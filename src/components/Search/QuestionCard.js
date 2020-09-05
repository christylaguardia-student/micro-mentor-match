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
import Button from '@material-ui/core/Button';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { CommentCard } from './CommentCard';
// import { CommentForm } from './CommentForm';

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
    backgroundColor: theme.palette.background.paper,
  },
}));

export const QuestionCard = ({
  userId,
  category,
  question,
  answered,
  comments,
  user: {
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={fullName} src={avatar} />
        }
        title={fullName}
        subheader={`${jobTitle}@${companyName}`}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {question}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
          Answer
        </Button>
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
          <Typography className={classes.heading} paragraph>Comments</Typography>
          {comments && comments.map(comment => <CommentCard {...comment} />)}
          {/* <CommentForm /> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
