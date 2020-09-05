import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const UserCard = ({ user: {
  id,
  firstName,
  lastName,
  avatar,
  gender,
  jobTitle,
  jobArea,
  jobType,
  companyName,
  bio,
} }) => {
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
            {fullName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}


