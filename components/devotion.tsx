import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
import Scripture from "./scripture";
import HeaderTitle from "../components/headerTitle";
import { NavigationStackOptions } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";
import DevotionHeader from "./devotionHeader";
import GlobalVars from "../GlobalVars";
import HTMLView from "react-native-htmlview";

class DevotionScreen extends React.Component {
  static navigationOptions: NavigationStackOptions = {
    title: "Devotion",
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
  };
  componentDidMount = () => {
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
        <ScrollView>
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
  container: {
    alignItems: "center",
    flex: 1
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "sans-serif",
    color: "#404040",
    fontSize: 16,
    fontWeight: "bold"
  }
});
