import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Hero from '../Hero';
import { QuestionCard } from './QuestionCard';

import questionsData from '../..//fakeData/generated/questions.json';
import usersData from '../..//fakeData/generated/users.json';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  container: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2, 0),
  }
}));

export const QuestionsList = () => {
  const classes = useStyles();

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

  if (!questions && questions.length === 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Hero
        title="Q&amp;A"
        subtitle="Have a question?"
      />

      <Container maxWidth="md" className={classes.container}>
        {questions.map(data => (
          <div className={classes.card}>
            <QuestionCard {...data} />
          </div>
        ))}
      </Container>
    </div>
  );
};
