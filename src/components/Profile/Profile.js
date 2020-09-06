import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import Alert from '@material-ui/lab/Alert';

import Hero from '../Hero';
import { ComboBox } from './ComboBox';
import { withFirebase } from '../Firebase/context';

import staticData from '../../fakeData/static-data.json'

const testUser = {
  "firstName": "Pattie",
  "lastName": "Denesik",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/xtopherpaul/128.jpg",
  "gender": "Trans*Female",
  "jobTitle": "Global Optimization Agent",
  "companyName": "Langworth, Kuvalis and McClure",
  "bio": "Veniam quibusdam dignissimos nobis consectetur. Quisquam aut minima placeat possimus. Qui porro repudiandae dolore nam doloremque quisquam ad velit.",
  "location": {
    "city": "Creminland",
    "state": "Ohio",
    "timeZone": "Europe/Amsterdam"
  },
  "linkedIn": "https://www.linkedin.com/",
  "portfolio": "http://gerardo.net",
  "categories": [
    {
      "category": "Translation",
      "years": 8,
      "months": 2
    },
    {
      "category": "Scientific Computing",
      "years": 7,
      "months": 8
    },
    {
      "category": "Emotional Intelligence",
      "years": 15,
      "months": 3
    },
    {
      "category": "Natural Language Processing",
      "years": 4,
      "months": 8
    }
  ]
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  heading: {
    ...theme.typography.button,
    margin: theme.spacing(3, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Profile({ firebase, user }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    email: user?.email,
    firstName: testUser?.firstName || '',
    lastName: testUser?.lastName || '',
    avatar: testUser?.avatar || '',
    gender: testUser?.gender || '',
    jobTitle: testUser?.jobTitle || '',
    companyName: testUser?.companyName || '',
    bio: testUser?.bio || '',
    location: {
      city: testUser?.location?.city || '',
      state: testUser?.location?.state || '',
      timeZone: testUser?.location?.timeZone || '',
    },
    linkedIn: testUser?.linkedIn || '',
    portfolio: testUser?.portfolio || '',
    categories: testUser?.categories || [],
  });
  const { email,
    firstName,
    lastName,
    avatar,
    gender,
    jobTitle,
    companyName,
    bio,
    location,
    linkedIn,
    portfolio,
    categories,
  } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // const handleRadioChange = (event) => {
  //   setState({ ...state, gender: event.target.value });
  // };

  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   let newMentorshipTypes = mentorshipTypes

  //   if (checked) {
  //     newMentorshipTypes.push(name);
  //   } else {
  //     const index = mentorshipTypes.indexOf(name);
  //     newMentorshipTypes.splice(index, 1);
  //   }

  //   setState({ ...state, mentorshipTypes: newMentorshipTypes });
  // };

  const handleCategoryChange = (name, value) => {
    // TODO: handle remove
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    // TODO:
  }

  return (
    <div className={classes.root}>
      <Alert severity="warning">This page is not functional yet!</Alert>
      <Hero subtitle="Profile" />
      <Container maxWidth="sm">
        <form
          className={classes.form}
          noValidate
          onSubmit={event => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                disabled
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Typography className={classes.heading} paragraph>Personal</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="firstName"
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                autoFocus
                id="city"
                label="City"
                name="city"
                value={location.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                autoFocus
                id="state"
                label="State"
                name="state"
                value={location.state}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="timeZone"
                label="Timezone"
                name="timeZone"
                value={location.timeZone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                autoFocus
                id="gender"
                label="Gender"
                name="gender"
                value={gender}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Profile Image URL"
                name="avatar"
                value={avatar}
                type="url"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Typography className={classes.heading} paragraph>Current Position</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="jobTitle"
                label="Job Title"
                name="jobTitle"
                value={jobTitle}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="companyName"
                label="Company Name"
                name="companyName"
                value={companyName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Typography className={classes.heading} paragraph>Professional</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                id="bio"
                label="Bio"
                name="bio"
                value={bio}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="linkedIn"
                label="LinkedIn URL"
                name="linkedIn"
                value={linkedIn}
                type="url"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="portfolio"
                label="Portfolio URL"
                name="portfolio"
                value={portfolio}
                type="url"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Typography className={classes.heading} paragraph>Areas of Expertise</Typography>

          <ComboBox name="skills-hard" label="Skills" placeholder="Skills" value={categories} options={staticData.categories} onChange={handleCategoryChange} />

          {/* TODO: should be skill, month, year */}

          <Typography className={classes.heading} paragraph>Mentorships</Typography>

          {/* TODO: */}

          <Button
            disabled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </form>
      </Container>
    </div >
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  // handleSuccess: signInSuccess,
  // handleError: addError
}

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
