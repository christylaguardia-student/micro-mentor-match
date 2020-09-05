import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";

import { updateUserSuccess, addError } from '../../store/actions';
import { withFirebase } from '../Firebase/context';
import Hero from '../Hero'
import { ComboBox } from './ComboBox';

import data from '../../data';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  container: {
    flexGrow: 1,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Profile = ({ firebase, handleSuccess, handleError }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    firstName: 'Christy',
    lastName: 'La Guardia',
    gender: 'male',
    mentorshipTypes: ['mentee'],
    bio: '',
  });
  const {
    firstName,
    lastName,
    gender,
    mentorshipTypes,
    bio,
  } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleRadioChange = (event) => {
    setState({ ...state, gender: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let newMentorshipTypes = mentorshipTypes

    if (checked) {
      newMentorshipTypes.push(name);
    } else {
      const index = mentorshipTypes.indexOf(name);
      newMentorshipTypes.splice(index, 1);
    }

    setState({ ...state, mentorshipTypes: newMentorshipTypes });
  };

  const handleComboBoxChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  // TODO;
  const handleSubmit = () => {
    const uid = '124';
    firebase.user(uid).set(state)
      .then(authUser => handleSuccess({ authUser }))
      .catch(error => handleError({ error }));
  }

  return (
    <div className={classes.root}>
      <Hero
        title="Profile"
      />

      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              value={firstName}
              label="First Name"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              value={lastName}
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl required component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleRadioChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl required component="fieldset">
              <FormLabel component="legend">What are you looking for? (Check all that apply)</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={mentorshipTypes.includes("mentor")} onChange={handleCheckboxChange} name="mentor" />}
                  label="Get matched with a mentor"
                />
                <FormControlLabel
                  control={<Checkbox checked={mentorshipTypes.includes("skill")} onChange={handleCheckboxChange} name="skill" />}
                  label="Learn a skill"
                />
                <FormControlLabel
                  control={<Checkbox checked={mentorshipTypes.includes("project")} onChange={handleCheckboxChange} name="project" />}
                  label="Work on a project"
                />
                <FormControlLabel
                  control={<Checkbox checked={mentorshipTypes.includes("mentee")} onChange={handleCheckboxChange} name="mentee" />}
                  label="Become a mentor"
                />
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="bio"
              value={bio}
              label="About you"
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              What skills would you like to learn?
          </Typography>
            <ComboBox name="skills-hard" label="Hard Skills" placeholder="Hard Skills" options={data.skills["Top hard"]} onChange={handleComboBoxChange} />
          </Grid>
          <Grid item xs={12}>
            <ComboBox name="skills-soft" label="Soft Skills" placeholder="Soft Skills" options={data.skills["Top soft"]} onChange={handleComboBoxChange} />
          </Grid>
          <Grid item xs={12}>
            <ComboBox name="skills-tech" label="Tech Skills" placeholder="Teck Skills" options={data.skills["Top tech"]} onChange={handleComboBoxChange} />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>


        {/* <Container>
        <code>{JSON.stringify(state, "", 2)}</code>
      </Container> */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >Save</Button>
      </Container>
    </div>

  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.user?.isAuthenticated,
});

const mapDispatchToProps = {
  handleSuccess: updateUserSuccess,
  handleError: addError
};

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
