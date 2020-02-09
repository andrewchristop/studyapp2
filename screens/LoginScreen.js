import React from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={style.body}>
        <TextInput style={style.email} placeholder="Email"></TextInput>
        <TextInput
          style={style.password}
          placeholder="Password"
          secureTextEntry
        ></TextInput>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  email: {
    borderColor: "black"
  }
});
