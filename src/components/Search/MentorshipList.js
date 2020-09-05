import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { MentorshipCard } from './MentorshipCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6, 0),
  },
  card: {
    padding: theme.spacing(2, 0),
  }
}));

export const MentorshipList = ({ mentorships }) => {
  const classes = useStyles();

  if (!mentorships && mentorships.length === 0) {
    return null;
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      {mentorships.map(data =>
        <div className={classes.card}>
          <MentorshipCard {...data} />
        </div>
      )}
    </Container>
  );
};
