import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { getUsers, addError } from '../../store/actions';
import { withFirebase } from '../Firebase/context';
import { TabPanel } from './TabPanel';

import { MentorshipList } from '../Mentorships/MentorshipList';
import { MentorList } from '../Mentors/MentorList';
import { QuestionsList } from '../Questions/QuestionsList';

import mentorshipsData from '../..//fakeData/generated/mentorships.json';
import questionsData from '../..//fakeData/generated/questions.json';
import usersData from '../..//fakeData/generated/users.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Search = ({ firebase, handleSuccess, handleError }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mentorshipDataArray = Object.entries(mentorshipsData);

  const mentorships = mentorshipDataArray
    .filter(([, mentorship]) => mentorship.menteeId !== null && mentorship.mentorId === null)
    .map(([id, mentorship]) => ({ id, mentee: usersData[mentorship.menteeId], ...mentorship }));

  const mentorsReduced = mentorshipDataArray
    .filter(([, mentorship]) => mentorship.menteeId === null && mentorship.mentorId !== null)
    .reduce((reducedList, [id, mentorship]) => {
      const mentorId = mentorship.mentorId;

      if (reducedList.hasOwnProperty(mentorId)) {
        reducedList[mentorId] = {
          ...reducedList[mentorId],
          mentorships: {
            ...reducedList[mentorId].mentorships,
            [id]: mentorship,
          }
        }
      } else {
        reducedList[mentorId] = {
          mentor: usersData[mentorId],
          mentorships: {
            [id]: mentorship,
          }
        }
      }

      return reducedList;
    }, {})
  const mentors = Object.entries(mentorsReduced);


  const questions = Object.entries(questionsData)
    .filter(([, question]) => !question.answered)
    .reduce((questionsList, [id, question]) => {
      const userId = question.userId;

      // Mentees seeking mentors
      if (userId) {
        const user = usersData[userId];

        if (user) {
          let commentList = [];

          if (question.comments) {
            commentList = Object.entries(question.comments).map(([commentId, comment]) => ({ commentId, user: usersData[comment.userId], ...comment }));
          }

          questionsList.push({ id, user, ...question, comments: commentList });
        }
        return questionsList;
      }

      return questionsList;
    }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label={`Mentorships (${mentorships.length})`} {...a11yProps(0)} />
          <Tab label={`Mentors (${mentors.length})`} {...a11yProps(1)} />
          <Tab label={`Q&A (${questions.length})`} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MentorshipList mentorships={mentorships} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MentorList mentors={mentors} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QuestionsList questions={questions} />
      </TabPanel>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user?.isAuthenticated,
});

const mapDispatchToProps = {
  handleSuccess: getUsers,
  handleError: addError
};

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Search);
