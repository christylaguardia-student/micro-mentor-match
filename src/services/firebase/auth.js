import firebase from 'firebase';
import store from '../../store';
import { LOGIN, LOGOUT } from '../../containers/App/reducers';
import { firebaseApp } from './config';

/**
 * TODO:
 * reset password
 * prompt the user to re-provide their sign-in credentials
 */

export const firebaseAppAuth = firebaseApp.auth();

export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

// export const uiConfig = {
//   // signInOptions: [
//   //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   // ]
//   // Popup signin flow rather than redirect flow.
//   // signInFlow: 'popup',
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: '/signedIn',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ]
// };

// Save the currently logged in user here
export let currentUser = firebaseAppAuth.currentUser;

// Listen for changes to auth state
// firebaseAppAuth.onAuthStateChanged(user => {
//   if (user) {
//     firebaseAppAuth
//       .currentUser.getIdToken(true)
//       .then(idToken => store.dispatch({ type: LOGIN, payload: { idToken, uid: user.uid, providerData: user.providerData } }))
//       .catch(error => console.log({ error }));

//     if (!user.emailVerified) {
//       user.sendEmailVerification()
//         .then(() => console.log('Email verification sent.'))
//         .catch(error => console.log({ error }));
//     }
//   } else {
//     localStorage.clear();
//     store.dispatch({ type: LOGOUT });
//   }
// });

export const getCurrentUser = () => {
  const user = firebaseAppAuth.currentUser;

  if (user == null) {
    // TODO:
    console.log('Could not get current user.');
  } else {
    return {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      uid: user.uid
    };
  }
};

export const updateDisplayName = ({ displayName }) => {
  const user = firebaseAppAuth.currentUser;

  user
    .updateProfile({ displayName })
    .then(function () {
      // TODO:
      console.log('Update successful.');
    })
    .catch(function (error) {
      // TODO:
      console.log('An error happened.', error);
    });
};

export const updateEmail = ({ email }) => {
  const user = firebaseAppAuth.currentUser;

  user
    .updateEmail({ email })
    .then(function () {
      // TODO:
      console.log('Update successful.');
    })
    .catch(function (error) {
      // TODO:
      console.log('An error happened.', error);
    });
};

export const doSignOut = () => firebaseAppAuth.signOut();

export default {
  getCurrentUser,
  updateDisplayName,
  updateEmail,
  doSignOut
};
