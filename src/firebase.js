import firebase from 'firebase/app';
import 'firebase/database';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCxOXS7BqLz-5G3mucZgmz9MJk9IaQapA",
  authDomain: "where-in-the-world-77df7.firebaseapp.com",
  projectId: "where-in-the-world-77df7",
  storageBucket: "where-in-the-world-77df7.appspot.com",
  messagingSenderId: "691288283678",
  appId: "1:691288283678:web:9cacb19b390243eac1ac0f",
};

// initializing firebase with our specific configuration (unique every app)

firebase.initializeApp(firebaseConfig);

// last step is that we now have a variable available for us, that has everything we will need to know about our firebase database. We want to export this variable to make it available to any other file in our react app that may or may not need it. We'll do that with the following:

export default firebase;

// NO LONGER USING THIS APP
