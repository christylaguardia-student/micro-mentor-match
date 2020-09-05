import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function CommentForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-multiline-flexible"
        label="Post your answer..."
        variant="outlined"
        color="secondary"
        fullWidth
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">Comment</Button>
    </form>
  );
}
