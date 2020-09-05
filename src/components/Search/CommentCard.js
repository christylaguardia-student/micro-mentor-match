import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2, 0),
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export function CommentCard({
  user: {
    firstName,
    lastName,
    avatar
  },
  comment
}) {
  const classes = useStyles();
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className={classes.root}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar aria-label={fullName} className={classes.avatar} src={avatar} />
        </Grid>
        <Grid item xs>
          <Typography>{comment}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
