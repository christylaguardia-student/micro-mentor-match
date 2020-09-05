import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Hero from '../Hero';
import { MentorshipCard } from './MentorshipCard';

import mentorshipsData from '../..//fakeData/generated/mentorships.json';
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

export const MentorshipList = () => {
  const classes = useStyles();


  const mentorshipDataArray = Object.entries(mentorshipsData);

  const mentorships = mentorshipDataArray
    .filter(([, mentorship]) => mentorship.menteeId !== null && mentorship.mentorId === null)
    .map(([id, mentorship]) => ({ id, mentee: usersData[mentorship.menteeId], ...mentorship }));


  if (!mentorships && mentorships.length === 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Hero
        title="Mentorships"
        subtitle="Find a Mentee"
      />
      <Container maxWidth="md" className={classes.container}>
        {mentorships.map(data =>
          <div key={data.id} className={classes.card}>
            <MentorshipCard {...data} />
          </div>
        )}
      </Container>
    </div>
  );
};
