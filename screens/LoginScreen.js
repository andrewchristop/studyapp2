import React from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Image,
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
      <ImageBackground
        source={{ uri: "https://i.imgur.com/oB1KOoT.jpg" }}
        style={{ flex: 1 }}
      >
        <View style={style.body}>
          <Image
            style={style.tinyLogo}
            source={{
              uri: "https://i.imgur.com/C4ZtGk7.png",
            }}
          />
          <Text style={{ fontSize: 23, fontWeight: "bold", paddingBottom: 20 }}>
            Login{"\n"}
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
          <TouchableOpacity onPress={() => this.handleLogin()}>
            <Text style={{ fontSize: 18 }}>{"\n"}Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
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
    textAlign: "center",
  },
  email: {
    borderColor: "black",
    fontSize: 20,
    // backgroundColor: "white",
    // color: "black",
  },

  password: {
    borderColor: "black",
    fontSize: 20,
  },
  tinyLogo: {
    width: 220,
    height: 220,
  },
});
