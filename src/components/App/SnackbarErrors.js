import React from 'react';
import { connect } from "react-redux";

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

// TODO: errors should clear after a while

export function SnackbarErrors({ errors }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  const errorMessage = errors?.message;

  if (!errorMessage) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }
      }
      open={open}
      onClose={handleClose}
      key="bottomcenter"
    >
      <Alert elevation={6} variant="filled" severity="error">{errorMessage}</Alert>
    </Snackbar>
  );
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps, null)(SnackbarErrors);
