import React from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

export default class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
  };
  handleLogin() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch((error) => this.setState({ error: error.message }));
    console.log("handleLogin");
  }
  render() {
    return (
      <View style={style.body}>
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
        <TouchableOpacity onPress={() => this.handleLogin()}>
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
    justifyContent: "center",
  },
  email: {
    borderColor: "black",
  },
});
