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

/* 
  const windowW = Dimensions.get("window").width;
  const windowH = Dimensions.get("screen").height;
*/

export default class SubjectScreen extends React.Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    const { navigation } = this.props;
    const subject = navigation.getParam("subject", "");
    firebase
      .database()
      .ref(`topics/${subject}/subtopics`)
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
    const { navigation } = this.props;
    const subject = navigation.getParam("subject", "testing");
    return (
      <View style={style.main}>
        <Text style={style.title}>{subject}</Text>
        <FlatList
          data={this.state.topics}
          keyExtractor={(item) => item.key}
          renderItem={(item) => (
            <TouchableOpacity style={style.row}>
              <Text>{item.key}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
  },
  row: {
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
  },
});
