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
import { MentorshipList } from './MentorshipList';
import { MentorList } from './MentorList';
import { QuestionsList } from './QuestionsList';

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
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { mentors, mentorships } = Object.entries(mentorshipsData)
    .filter(([, mentorship]) => mentorship.menteeId !== null || mentorship.mentorId !== null)
    .reduce((open, [id, mentorship]) => {
      const mentorId = mentorship.mentorId;
      const menteeId = mentorship.menteeId;

      // Mentees seeking mentors
      if (mentorId) {
        const mentor = usersData[mentorId];
        if (mentor) {
          open.mentors.push({ id, mentor, ...mentorship });
        }
        return open;
      }

      // Mentors seeking mentees
      if (menteeId) {
        const mentee = usersData[menteeId];
        if (mentee) {
          open.mentorships.push({ id, mentee, ...mentorship });
        }
        return open;
      }

      return open;
    }, { mentors: [], mentorships: [] })

  const questions = Object.entries(questionsData)
    .filter(([, question]) => !question.answered)
    // .map(([id, question]) => ({ id, ...question }))
    .reduce((questionsList, [id, question]) => {
      // const { mentorship } = data;
      // console.log({ id, data, mentorship })
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
  isAuthenticated: state.user?.isAuthenticated,
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
