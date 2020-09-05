import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const MentorshipCard = ({
  category,
  type,
  length,
  frequency,
  description,
  mentee: {
    firstName,
    lastName,
    avatar,
    gender,
    jobTitle,
    jobArea,
    jobType,
    companyName,
    bio,
  }
}) => {
  const classes = useStyles();
  const fullName = `${firstName} ${lastName}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={avatar}
          title={fullName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstName} wants to learn {category}
          </Typography>
          <Typography variant="body2" component="p">
            <em>{firstName} is requesting a <strong>{type}</strong> {["coffee", "project"].includes(type) ? "buddy" : "mentorship"} and would like {frequency === "one" ? "a" : <strong>{frequency}</strong>} <strong>{length}</strong> session{frequency !== "one" && "s"}.</em>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions> */}
    </Card>
  );
}


