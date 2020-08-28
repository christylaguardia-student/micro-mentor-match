import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FirebaseContext from "../Firebase/context";

import { withFirebase } from '../Firebase/context';
import data from '../../data';

export const Search = ({ firebase }) => {
  // const industries = firebase.industries().once('value').then(snapshot => snapshot.val());
  console.log(data);

  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Search
      </Typography>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <div>I've access to Firebase and render something.</div>;
        }}
      </FirebaseContext.Consumer>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

const mapDispatchToProps = null;

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Search);
