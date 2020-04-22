import React from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

export default class SignupScreen extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
  };
  handleSignup() {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch((error) => this.setState({ error: error.message }));
    console.log("handleSignup");
  }
  render() {
    return (
      <View style={style.body}>
        <Text>Sign-up</Text>
        <TextInput
          style={style.email}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        ></TextInput>
        <TextInput
          style={style.password}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>
        <TouchableOpacity onPress={() => this.handleSignup()}>
          <Text>Sign-up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  email: {
    borderColor: "black",
  },
});
