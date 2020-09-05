import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export function MentorshipChips({ categories }) {
  const classes = useStyles();

  if (!categories) {
    return null;
  }

  const chipData = categories.map((category, index) => ({
    id: index + 1,
    // icon: TagFacesIcon,
    label: category
  }));

  return (
    <div className={classes.root}>
      {chipData.map((data) => (
        <Chip
          key={data.id}
          icon={<TagFacesIcon />}
          label={data.label}
          className={classes.chip}
        />
      ))}
    </div>
  );
}
