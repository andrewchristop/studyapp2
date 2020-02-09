import React from "react";
import {
  createAppContainer,
  createSwitchManager,
  createSwitchNavigator
} from "react-navigation";

import * as firebase from "firebase";

import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen.js";
import SignupScreen from "./screens/SignupScreen.js";
import MainNavigator from "./screens/MainNavigator.js";

var firebaseConfig = {
  apiKey: "AIzaSyCC0m9kYUq4u-dw7RSouKkBCmMZLwm3P68",
  authDomain: "studyapp-587f7.firebaseapp.com",
  databaseURL: "https://studyapp-587f7.firebaseio.com",
  projectId: "studyapp-587f7",
  storageBucket: "studyapp-587f7.appspot.com",
  messagingSenderId: "510623847493",
  appId: "1:510623847493:web:d692bfbefa4962e096ff2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const RootStack = createSwitchNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Main: MainNavigator
  },

  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer></AppContainer>;
}
