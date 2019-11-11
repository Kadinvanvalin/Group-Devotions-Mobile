import React, { Component } from "react";
import {
  View,
  Text,
  Alert,
  Button,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  SafeAreaView
} from "react-native";
import Scripture from "./scripture";
import { Devotion, StudyLesson } from "../types/devotion";
import HeaderTitle from "../components/headerTitle";
import Shimmer from 'react-native-shimmer';
import { NavigationStackOptions } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";
import DevotionHeader from "./devotionHeader";
import { DevotionHeaderOptions } from "../types/devotionHeaderOptions";
import GlobalVars from "../GlobalVars";
import Constants from "expo-constants";
import HTMLView from "react-native-htmlview";
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import Svg, { Circle, Rect } from "react-native-svg";
import devotion from "../types/devotion.json";
import { any } from "prop-types";
const dev: Devotion = devotion;

const headerTitleStyle: StyleProp<ViewStyle> = {
  // fontFamily: "verdana",
  // color: '#404040',
  // fontSize: 16,
  // fontWeight: "bold"
};
class DevotionScreen extends React.Component {
  static navigationOptions: NavigationStackOptions = {
    title: "Devotion",
    //   headerTitleStyle,
    headerStyle: { height: 90 },
    headerTitleContainerStyle: { backgroundColor: GlobalVars.colors.primary },
    headerTitle: <HeaderTitle title="Devotion" />
  };
  state = {
    title: "",
    author: "",
    devotionPageTagLine: "",
    studySections: [],
    copyright: "",
    dev
  };
  XcomponentDidMount = () => {
    fetch("https://www.groupdevotions.com/rest/devotion/dunamai", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        const {
          title,
          author,
          devotionPageTagLine,
          studySections,
          copyright
        } = responseJson.data.studyLessons[0];
        console.log(responseJson);
        this.setState({
          title,
          author,
          devotionPageTagLine,
          studySections,
          copyright
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <DevotionHeader
            title={this.state.title}
            author={this.state.author}
            devotionPageTagLine={this.state.devotionPageTagLine}
          />
          {/* The only reason we are using key={i} is because we know this array will NEVER change. It is not safe to use in all contexts*/}
          {this.state.studySections.map((section, i) =>
            section.type === "SCRIPTURE" ? (
              <Scripture key={i} content={section.content} />
            ) : (
              <Text style={styles.text} key={i}>
                {section.content}
              </Text>
            )
          )}
          <View style={styles.copyright}>
            <HTMLView
              value={this.state.copyright}
              stylesheet={copyrightStyles}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default DevotionScreen;
const copyrightStyles = StyleSheet.create({
  b: {
    fontWeight: "bold"
  }
});
const styles = StyleSheet.create({
  copyright: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  scrollView: {
    // marginLeft: 20,
    // marginRight: 20,
  },
  container: {
    alignItems: "center",
    flex: 1
    //   marginTop: Constants.statusBarHeight,
    //   marginHorizontal: 16,
    //   marginTop: 100,
    //   margin: 20
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Verdana",
    color: "#404040",
    fontSize: 16,
    fontWeight: "bold"
  }
  //   capitalLetter: {
  //      color: 'red',
  //      fontSize: 20
  //   },
  //   wordBold: {
  //      fontWeight: 'bold',
  //      color: 'black'
  //   },
  //   italicText: {
  //      color: '#37859b',
  //      fontStyle: 'italic'
  //   },
  //   textShadow: {
  //      textShadowColor: 'red',
  //      textShadowOffset: { width: 2, height: 2 },
  //      textShadowRadius : 5
  //   }
});
