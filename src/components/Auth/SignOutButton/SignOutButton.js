import React from 'react';
import { connect } from "react-redux";
import { compose } from 'recompose';

import Button from '@material-ui/core/Button';

import { signOut } from '../../../store/actions'
import { withFirebase } from '../../Firebase';

const SignOutButton = ({ firebase, handleSignOut }) => {
  const handleClick = () => {
    firebase.doSignOut();
    handleSignOut();
  }

  return (
    <Button color="inherit" onClick={handleClick}>
      Sign Out
    </Button>
  )
};

const mapDispatchToProps = {
  handleSignOut: signOut,
}

export default compose(
  withFirebase,
  connect(null, mapDispatchToProps)
)(SignOutButton);
