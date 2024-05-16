import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ... Your Configuration Here
  apiKey: "AIzaSyAD7BhqaSQCKZnfqCeIvbAFutFqCEC9fzc",
  authDomain: "class-work-e556f.firebaseapp.com",
  projectId: "class-work-e556f",
  storageBucket: "class-work-e556f.appspot.com",
  messagingSenderId: "217708981687",
  appId: "1:217708981687:web:6a3050887bd82d64924c32"
};

//make an env file

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO:Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app)
