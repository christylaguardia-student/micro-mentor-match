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
import Tooltip from '@material-ui/core/Tooltip';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PanToolIcon from '@material-ui/icons/PanTool';

import { MentorshipDetailCard } from './MentorshipDetailCard';
import { MentorshipChips } from './MentorshipChips';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(0, 1),
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
  heading: {
    ...theme.typography.button,
    marginBottom: theme.spacing(1),
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  }
}));

export const MentorshipCard = ({
  title,
  description,
  categories,
  type,
  length,
  frequency,
  mentee: {
    firstName,
    lastName,
    avatar,
    gender,
    jobTitle,
    companyName,
    bio,
  }
}) => {
  const classes = useStyles();
  const fullName = `${firstName} ${lastName}`;
  const [expanded, setExpanded] = React.useState(false);
  const subheader = type === "coffee"
    ? `${length} coffee chat`
    : `${frequency} ${length} session${frequency === "one" ? "" : "s"}`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label={fullName} className={classes.avatar} src={avatar} />}
        title={fullName}
        subheader={`${jobTitle}@${companyName}`}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{subheader}</Typography>
        <Typography className={classes.paragraph} variant="body2" component="p" gutterBottom>{description}</Typography>
        <MentorshipChips categories={categories} />
      </CardContent>
      <CardActions disableSpacing>

        <Tooltip title="Add to favorites">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Request" aria-label="request">
          <IconButton aria-label="request">
            <PanToolIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Chat">
          <IconButton aria-label="chat">
            <ChatBubbleIcon />
          </IconButton>
        </Tooltip>

        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>

      {/* TODO: comments */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        </CardContent>
      </Collapse> */}
    </Card>
  );

}


