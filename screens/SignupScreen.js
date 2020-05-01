import React from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
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
      <ImageBackground
        source={{ uri: "https://i.imgur.com/kMjK4Qh.jpg" }}
        style={{ flex: 1 }}
      >
        <View style={style.body}>
          <Text style={{ fontWeight: "bold", fontSize: 23 }}>
            Sign-up{"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <TextInput
            style={style.email}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(email) => this.setState({ email })}
          ></TextInput>
          <TextInput
            style={style.password}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          ></TextInput>
          <TouchableOpacity onPress={() => this.handleSignup()}>
            <Text style={{ fontSize: 18 }}>{"\n"}Sign-up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ fontSize: 18 }}>Go back to login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    fontSize: 20,
  },
  password: {
    borderColor: "black",
    fontSize: 20,
  },
});
