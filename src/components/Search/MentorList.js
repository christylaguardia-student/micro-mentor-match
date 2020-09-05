import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MentorCard } from './MentorCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export const MentorList = ({ mentors }) => {
  const classes = useStyles();

  if (!mentors && mentors.length === 0) {
    return null;
  }

  // <Grid item xs={12} sm={8} md={8} lg={4} key={data.id}>
  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.root} spacing={2}>
      {mentors.map(data =>
        <Grid item key={data.id}>
          <MentorCard {...data} />
        </Grid>
      )}
    </Grid>
  );
};
