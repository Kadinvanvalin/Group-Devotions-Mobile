import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";

interface Props {
  navigation: any
}

class LoginScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  componentDidMount = () => {
    // fetch("https://www.groupdevotions.com/rest/devotion/dunamai", {
      // method: "GET"
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     const {
    //       title,
    //       author,
    //       devotionPageTagLine,
    //       studySections,
    //       copyright
    //     } = responseJson.data.studyLessons[0];
    //     this.setState({
    //       title,
    //       author,
    //       devotionPageTagLine,
    //       studySections,
    //       copyright
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Login
        </Text>
        <TextInput placeholder='Username' />
        <TextInput placeholder='Password' />
        <View style={{margin: 7}} />
        <Button 
        onPress={this.onLoginPress}
        title="Submit"
        />

      </ScrollView>

    );
  }

  onLoginPress() {
    this.props.navigation.navigate('App');
    // this.setState
  }
}
export default LoginScreen;


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
    fontFamily: "Verdana",
    color: "#404040",
    fontSize: 16,
    fontWeight: "bold"
  }
});
