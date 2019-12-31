import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from "react-native";
import { NavigationStackOptions } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";
import LessonComponent from "./lesson/lessonComponent";
import Lesson from "../../types/lesson";
import { SERVER_URL } from 'react-native-dotenv';
import MessageComponent from "../messageComponent";
interface DevotionScreenState {
    message: any,
    lessons: Lesson[],
    isLoading: boolean,
}
class DevotionScreen extends React.Component {
  static navigationOptions: NavigationStackOptions = {
    title: "Devotions",
  };
  state: DevotionScreenState = {
    message: null,
    isLoading: false,
    lessons: [{
      title: "",
      accountabilityLesson: false,
      author: "",
      devotionPageTagLine: "",
      studySections: [],
      copyright: "",
    }],
  };
  componentDidMount = () => {
    const loggedInUrl = `${SERVER_URL}/rest/devotion/today?anticache=${(new Date()).toString()}`;
    this.setState({isLoading: true});
    fetch(loggedInUrl, {
      credentials: 'include',
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
        },
    })
      .then((response) => response.json())
      .then(response => {
        if (response.operationSuccessful) {
          const lessons: Lesson[] = response.data.studyLessons;
          this.setState({lessons, isLoading: false});
        } else {
          this.setState({message: response.message});
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MessageComponent message={this.state.message}/>
        <ScrollView>
          { this.state.lessons.map((lesson, i) => <LessonComponent action={this.action} index={i} key={i} lesson={lesson} />) }
          <ActivityIndicator style={styles.spinner} animating={this.state.isLoading} size="large" color="#0000ff" />
          <Button onPress={this.onSubmitPress} title="Submit" />
        </ScrollView>
      </SafeAreaView>
    )
  }


  action = (value: string, studySectionIndex: number, lessonsIndex: number) => {
    const lessons: Lesson[] = [...this.state.lessons];
    lessons[lessonsIndex].studySections[studySectionIndex].answer = value;
    this.setState({lessons});
  };

  onSubmitPress = () => {
    const loggedInUrl = `${SERVER_URL}/rest/devotion/?anticache=`;
    this.setState({isLoading: true});
    fetch(loggedInUrl, {
      credentials: 'include',
      method:"POST",
      body:  "{ studyLessons: " + JSON.stringify(this.state.lessons) + " }",
      headers: {
        'Content-Type': 'application/json'
        },
    })
      .then((response) => response.json())
      .then(response => {
        console.log(response);
        // TODO
        // if(response.data && response.data.studyLessons) {
        //   const lessons: Lesson[] = response.data.studyLessons
        //   this.setState({lessons, isLoading: false});
        // } else {console.log(response)}
      })
      .catch(error => {
        console.error(error);
      });
  }
}
export default DevotionScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  spinner: {
    padding: 16
  }
});
