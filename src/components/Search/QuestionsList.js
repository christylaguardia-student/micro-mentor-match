import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { QuestionCard } from './QuestionCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6, 0),
  },
  card: {
    padding: theme.spacing(2, 0),
  }
}));

export const QuestionsList = ({ questions }) => {
  const classes = useStyles();

  if (!questions && questions.length === 0) {
    return null;
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      {questions.map(data => (
        <div className={classes.card}>
          <QuestionCard {...data} />
        </div>
      ))}
    </Container>
  );
};
