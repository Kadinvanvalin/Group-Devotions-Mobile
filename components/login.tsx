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
// import {AsyncStorage} from 'react-native';
let CookieManager = require("react-native-cookies")

interface Props {
  navigation: any
}

class LoginScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  componentDidMount = async () => {
    try {
      const cookie = await AsyncStorage.getItem('cookie');
      if (cookie !== null) {
        // We have data!!
        console.log(cookie);

        fetch("https://www.groupdevotions.com/rest/account/localLogin", {
          method: "POST",
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            'cookie': cookie,
            },
            credentials: "omit",
        })
          .then(response => response.json())
          .then(responseJson => {
            // {"operationSuccessful":false,"message":{"type":"danger","text":"Unable to find your account."}}
            if(responseJson.operationSuccessful) {
              this.props.navigation.navigate('App');
            } else {
              alert(responseJson.message.text)
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    } catch (error) {
      // Error retrieving data
    }

  }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Login
        </Text>
        <TextInput
        onChangeText={(value) => this.setState({email: value})}
        placeholder='Email' />
        <TextInput
         onChangeText={(value) => this.setState({password: value})}
        placeholder='Password' />
        <View style={{margin: 7}} />
        <Button 
        onPress={this.onLoginPress}
        title="Submit"
        />

      </ScrollView>

    );
  }

  onLoginPress() {
    const state = this.state as any;
    // this.setState
    const opts = {
      "email": state.email,
      "password": state.password,
      // "test123",
      "url": "https://www.groupdevotions.com/",
      "stayLoggedIn": false
    }
    fetch("https://www.groupdevotions.com/rest/account/localLogin", {
      method: "POST",
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opts)
    })
      .then(response => {return {responseJson: response.json(), response} })
      .then(async obj => {
        const {responseJson, response} = obj
        // {"operationSuccessful":false,"message":{"type":"danger","text":"Unable to find your account."}}
        if(responseJson.operationSuccessful) {
              await AsyncStorage.setItem('cookie', response.headers.get("set-cookie"));
          this.props.navigation.navigate('App');
        } else {
          alert(responseJson.message.text)
        }
      })
      .catch(error => {
        console.error(error);
      });

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
