import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PanToolIcon from '@material-ui/icons/PanTool';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  hand: {
    marginLeft: 'auto',
  },
  text: {
    width: '200px', // dummy width to show the elipsis
  },
  heading: {
    ...theme.typography.button,
    marginBottom: theme.spacing(1),
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  }
}));

export const MentorCard = ({
  category,
  type,
  length,
  frequency,
  description,
  mentor: {
    firstName,
    lastName,
    avatar,
    gender,
    jobTitle,
    companyName,
    bio,
    linkedIn,
    portfolio,
    categories,
  }
}) => {
  const classes = useStyles();
  const fullName = `${firstName} ${lastName}`;
  const [expanded, setExpanded] = React.useState(false);

  const typeDescriptions = {
    'skill': 'teach a',
    'project': 'help with a',
    'coffee': 'chat over',
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={fullName} className={classes.avatar} src={avatar} />
        }
        title={<Typography className={classes.text} variant="h6" noWrap>{fullName}</Typography>}
        subheader={(
          <>
            <Typography className={classes.text} variant="subtitle1" noWrap>{jobTitle}</Typography>
            <Typography className={classes.text} variant="subtitle2" noWrap>{companyName}</Typography>
          </>
        )}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {linkedIn && <IconButton aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>}
        {portfolio && <IconButton aria-label="LinkedIn">
          <MenuBookIcon />
        </IconButton>}
        <IconButton aria-label="chat">
          <ChatBubbleIcon />
        </IconButton>
        <IconButton aria-label="request">
          <PanToolIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.heading} paragraph>Bio</Typography>
          <Typography className={classes.paragraph} variant="body2" component="p" gutterBottom>{bio}</Typography>

          <Typography className={classes.heading} paragraph>Gender</Typography>
          <Typography className={classes.paragraph} variant="body2" component="p" gutterBottom>{gender}</Typography>

          <Typography className={classes.heading} paragraph>Current position</Typography>
          <Typography className={classes.paragraph} variant="body2" component="p" gutterBottom>{jobTitle} at {companyName}</Typography>

          <Typography className={classes.heading} paragraph>Areas of Expertise</Typography>
          {categories ? categories.map(({ category, years, months }) => (
            <Typography key={category} paragraph>{category} - {years > 0 && `${years} years`} {months > 0 && `${months} months`}</Typography>
          )) : (
              <Typography className={classes.paragraph} variant="body2" component="p" gutterBottom>N/A</Typography>
            )}

          <Typography className={classes.heading} paragraph>Mentorship Opportunity</Typography>
          <Typography className={classes.paragraph} variant="body2" component="p" gutterBottom>
            I'm available to {typeDescriptions[type]} <strong>{category} {type}</strong> and can meet for {frequency === "one" ? "a" : <strong>{frequency}</strong>} <strong>{length}</strong> session{frequency !== "one" && "s"}.
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
