
import React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FirebaseContext } from '../../components/Firebase';


// const useStyles = makeStyles((theme) => ({
// }));


export const Search = () => {
  // const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Search
      </Typography>
      <FirebaseContext.Consumer>
        {firebase => {
          return <div>I've access to Firebase and render something.</div>;
        }}
      </FirebaseContext.Consumer>
    </Container>
  )
}
