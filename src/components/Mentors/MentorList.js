import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Hero from '../Hero';
import { MentorCard } from './MentorCard';

import mentorshipsData from '../..//fakeData/generated/mentorships.json';
import usersData from '../..//fakeData/generated/users.json';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  grid: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export const MentorList = () => {
  const classes = useStyles();

  const mentorshipDataArray = Object.entries(mentorshipsData);
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

  if (!mentors && mentors.length === 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Hero
        title="Mentors"
        subtitle="Find a Mentor"
      />
      <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.grid} spacing={2}>
        {mentors.map(([id, data]) =>
          <Grid item key={id}>
            <MentorCard id={id} {...data} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};
