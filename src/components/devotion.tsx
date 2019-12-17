import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
import Scripture from "./scripture";
import HeaderTitle from "./headerTitle";
import { NavigationStackOptions } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";
import DevotionHeader from "./devotionHeader";
import HTMLView from "react-native-htmlview";

class DevotionScreen extends React.Component {
  static navigationOptions: NavigationStackOptions = {
    title: "Devotions",
  };
  state = {devos: [{
    title: "",
    author: "",
    devotionPageTagLine: "",
    studySections: [],
    copyright: "",
  }]}
  componentDidMount = () => {
    // TODO make into service
    const loggedInUrl = "https://www.groupdevotions.com/rest/devotion/today?anticache=" + (new Date()).toString();
    fetch(loggedInUrl, { credentials: 'include', method:"GET"})
      .then((response) => response.json())
      .then(response => {
        const {
          title,
          author,
          devotionPageTagLine,
          studySections,
          copyright
        } = response.data.studyLessons[0];
        this.setState({devos: [{
          title,
          author,
          devotionPageTagLine,
          studySections,
          copyright
        }]});
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {this.state.devos.map((devo, i) => {
            return <View key={i}>
              <DevotionHeader
              title={devo.title}
              author={devo.author}
              devotionPageTagLine={devo.devotionPageTagLine}
              />
          

          {/* The only reason we are using key={i} is because we know this array will NEVER change. It is not safe to use in all contexts*/}
          {devo.studySections.map((section, i) =>
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
              value={devo.copyright}
              stylesheet={copyrightStyles}
              />
          </View>
          </View>
            })}
     
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
