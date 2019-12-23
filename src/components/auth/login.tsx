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

interface Props {
  navigation: any;
}

class LoginScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 27 }}>Login</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => this.setState({ email: value })}
          placeholder=" Enter Your Email"
        />
        <TextInput
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
        fetch("https://www.groupdevotions.com/rest/account/localLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.operationSuccessful) {
              console.log("already logged in");
              this.props.navigation.navigate("App");
            } else {
              alert(responseJson.message.text);
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
      email: state.email,
      password: state.password,
      url: "https://www.groupdevotions.com/",
      stayLoggedIn: true
    };
    const body = JSON.stringify(opts);
    fetch("https://www.groupdevotions.com/rest/account/localLogin", {
      method: "POST",
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
          // TODO: WARNING We should not save an unhashed password in the final app
          await AsyncStorage.setItem("password", body);
          this.props.navigation.navigate("App");
        } else {
          console.log(responseJson);
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
