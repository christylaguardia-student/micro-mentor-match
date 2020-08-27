import firebase from 'firebase';

// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

export const firebaseConfig = {
  apiKey: "AIzaSyBGhqTuNiyoG6g4elOVN39FstjndXx1juE",
  authDomain: "micro-mentor-match.firebaseapp.com",
  databaseURL: "https://micro-mentor-match.firebaseio.com",
  projectId: "micro-mentor-match",
  storageBucket: "micro-mentor-match.appspot.com",
  messagingSenderId: "23276308788",
  appId: "1:23276308788:web:2acd0a499519cc1b3bfd61"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
