import firebase from 'firebase';

// Get a reference to the database service
const FirebaseDatabase = firebase.database();

export function writeUserData(userId, name, email, imageUrl) {
  FirebaseDatabase.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}
