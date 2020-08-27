import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ROUTES } from './Routes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    margin: theme.spacing(1, 1.5),
  },
}));

export const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Micro-Mentorship
          </Typography>
          <nav>
            {Object.entries(ROUTES).map(([name, path]) => (
              <Button key={name} component={Link} to={path} className={classes.link}>
                {name}
              </Button>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
