import React from "react";
import {
  AsyncStorage,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import { SERVER_URL, DEFAULT_EMAIL, DEFAULT_PW } from 'react-native-dotenv';
import Props from "../../types/props";
import MessageComponent from "../MessageComponent";


class LoginScreen extends React.Component<Props> {
  state = {email: DEFAULT_EMAIL, password: DEFAULT_PW, message: null};

  constructor(props) {
    super(props);
    this.onLoginPress = this.onLoginPress.bind(this);
  }
  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <MessageComponent message={this.state.message}/>
        <Text style={{ fontSize: 27 }}>Login</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.email}
          onChangeText={value => this.setState({ email: value })}
          placeholder=" Enter Your Email"
        />
        <TextInput
          value={this.state.password}
          onChangeText={value => this.setState({ password: value })}
          style={styles.textInput}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your Password"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          // Making the Text Input Text Hidden.
          secureTextEntry={true}
        />
        <View style={{ margin: 7 }} />
        <Button onPress={this.onLoginPress} title="Submit" />
      </ScrollView>
    );
  }

  xcomponentDidMount = async () => {
    try {
      const body = await AsyncStorage.getItem("password");
      if (body !== "null" && body !== null) {
        fetch(SERVER_URL + "/rest/account/localLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.operationSuccessful) {
              this.props.navigation.navigate("App");
            } else {
              this.setState({message: responseJson.message})
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        console.log("no cookie");
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  onLoginPress() {
    const state = this.state as any;
    // this.setState
    const opts = {
      "email": state.email,
      "password": state.password,
      "url": SERVER_URL,
      "stayLoggedIn": true
    }
    const body = JSON.stringify(opts);
    fetch(SERVER_URL + "/rest/account/localLogin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body
    })
      .then(async response => {
        return { responseJson: await response.json(), response };
      })
      .then(async obj => {
        const { responseJson, response } = obj;
        if (responseJson.operationSuccessful) {
          console.log(response);
          // TODO: WARNING We should not save an unhashed password in the final app
          await AsyncStorage.setItem("password", body);
          this.props.navigation.navigate("App");
        } else {
          this.setState({message: responseJson.message})
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    width: "95%",
    borderColor: "gray",
    borderWidth: 2,
    paddingLeft: 15,
    marginBottom: 25
  }
});
