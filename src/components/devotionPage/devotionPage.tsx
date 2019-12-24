import React from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { NavigationStackOptions } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";
import LessonComponent from "./lesson/lessonComponent";
import Lesson from "../../types/lesson";
import { SERVER_URL } from 'react-native-dotenv';
class DevotionScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions: NavigationStackOptions = {
    title: "Devotions",
  };
  state: { lessons: Lesson[] }= {
    lessons: [{
      title: "",
      accountabilityLesson: false,
      author: "",
      devotionPageTagLine: "",
      studySections: [],
      copyright: "",
    }],
  }
  componentDidMount = () => {
    // TODO make into service
    const loggedInUrl = `${SERVER_URL}/rest/devotion/today`;
    // ?anticache=" + (new Date()).toString();
    fetch(loggedInUrl, {
      credentials: 'include',
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
        },
    })
      .then((response) => response.json())
      .then(response => {
        if(response.data && response.data.studyLessons) {
          const lessons: Lesson[] = response.data.studyLessons
          this.setState({lessons});
        } else {console.log(response)}
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          { this.state.lessons.map((lesson, i) => <LessonComponent key={i} lesson={lesson} />) }
        </ScrollView>
      </SafeAreaView>
    )
  }
}
export default DevotionScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
});
