import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { getUsers, addError } from '../../store/actions';
import { withFirebase } from '../Firebase/context';

export const Search = ({ firebase, handleSuccess, handleError }) => {

  // const fetchData = () => {
  const userId = '123'; //firebase.currentUserId()
  console.log({ userId })
  firebase.users().once('value').then(function (snapshot) {
    const users = snapshot.val()
    console.log(users)
    handleSuccess({ users });
  })
    .catch(error => {
      console.log({ error });
      handleError({ error });
    });
  // }

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
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user?.isAuthenticated,
});

const mapDispatchToProps = {
  handleSuccess: getUsers,
  handleError: addError
};

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Search);
