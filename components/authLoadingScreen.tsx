import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native';
import { withNavigation } from 'react-navigation';
interface Props {
  navigation: any
}
class AuthLoadingScreen extends React.Component<Props> {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  
  render() {
    return(
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default withNavigation(AuthLoadingScreen);