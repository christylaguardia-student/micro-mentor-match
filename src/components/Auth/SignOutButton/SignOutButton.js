import React from 'react';
import { connect } from "react-redux";
import { compose } from 'recompose';

import Button from '@material-ui/core/Button';

import { logout } from '../../../store/actions'
import { withFirebase } from '../../Firebase';

const SignOutButton = ({ firebase, handleLogout }) => {
  const handleClick = () => {
    firebase.doSignOut();
    handleLogout();
  }

  return (
    <Button color="inherit" onClick={handleClick}>
      Sign Out
    </Button>
  )
};

const mapDispatchToProps = {
  handleLogout: logout,
}

export default compose(
  withFirebase,
  connect(null, mapDispatchToProps)
)(SignOutButton);
