import React from 'react';
import { useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(4),
      left: theme.spacing(4),
    },
  },
}));

const pageActions = {
  '/profile': [
    { icon: <SaveIcon />, name: 'Save' }
  ],
  '/mentorships': [
    { icon: <AddIcon />, name: 'Create a Mentorship' },
    { icon: <FavoriteIcon />, name: 'Favorite' },
  ],
  '/mentors': [
    { icon: <SearchIcon />, name: 'Search' },
    { icon: <FavoriteIcon />, name: 'Favorite' },
  ]
};

export function FabMenu() {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  const actions = pageActions[pathname];

  if (actions === undefined) {
    return null;
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
}
