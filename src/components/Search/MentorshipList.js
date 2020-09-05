import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MentorshipCard } from './MentorshipCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6, 0),
  },
}));

export const MentorshipList = ({ mentorships }) => {
  const classes = useStyles();

  if (!mentorships && mentorships.length === 0) {
    return null;
  }

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.root} spacing={2}>
      {mentorships.map(data =>
        <Grid item key={data.id}>
          <MentorshipCard {...data} />
        </Grid>
      )}
    </Grid>
  );
};
