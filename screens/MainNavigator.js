import React from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

// const windowW = Dimensions.get("window").width;
// const windowH = Dimensions.get("screen").height;

export default class MainNavigator extends React.Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    firebase
      .database()
      .ref("topics")
      .once("value", (snapshot) => {
        var topics = [];
        snapshot.forEach((child) => {
          topics.push({
            key: child.key,
          });
        });

        this.setState({ topics });
        console.log(this.state.topics);
      });
  }
  render() {
    return (
      <View>
        <Text>Choose Topic</Text>
        <FlatList
          data={this.state.topics}
          keyExtractor={(item) => item.key}
          renderItem={(item) => <Text>{item.key}</Text>}
        ></FlatList>
      </View>
    );
  }
}
