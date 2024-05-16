import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";
import { useEffect, useState } from 'react';
import RegisterScreen from './screens/RegisterScreen';

// TODO: Navigation Container

export default function App() {

  const [loggedIn, SetLoggedIn] = useState(false)

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        SetLoggedIn(true)
        console.log("User logged in ..." + user.email)
      } else {
        SetLoggedIn(false)
        console.log("No user logged in ...")
      }
    })

  }, [])

  return (
    <>
      {loggedIn ? (
        <ProfileScreen />
      ) : (
        <RegisterScreen />
      )}
    </>
  );
}

