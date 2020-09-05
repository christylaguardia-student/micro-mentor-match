import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'recompose';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import HelpIcon from '@material-ui/icons/Help';
import ErrorIcon from '@material-ui/icons/Error';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export function DrawerMenu({ open, handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/profile" onClick={handleDrawerClose}>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/mentorships" onClick={handleDrawerClose}>
          <ListItemText primary="Mentorships" />
        </ListItem>
        <ListItem button component={Link} to="/mentors" onClick={handleDrawerClose}>
          <ListItemText primary="Mentors" />
        </ListItem>
        <ListItem button component={Link} to="/questions" onClick={handleDrawerClose}>
          <ListItemText primary="Q&amp;A" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/messages" onClick={handleDrawerClose}>
          <ListItemIcon>
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button component={Link} to="/notifications" onClick={handleDrawerClose}>
          <ListItemIcon>
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button component={Link} to="/chat" onClick={handleDrawerClose}>
          <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem button component={Link} to="/help" onClick={handleDrawerClose}>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button component={Link} to="/issue" onClick={handleDrawerClose}>
          <ListItemIcon><ErrorIcon /></ListItemIcon>
          <ListItemText primary="Report Issue" />
        </ListItem>
      </List>
    </Drawer>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user?.isAuthenticated,
});

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(DrawerMenu);
