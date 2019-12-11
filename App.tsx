import React from 'react';
import DevotionScreen from './src/components/devotion';
import Group from './src/components/group';
import LoginScreen from './src/components/login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Font from 'expo-font';
const AuthStack = createStackNavigator({ SignIn: LoginScreen });

const TabNavigator = createBottomTabNavigator({
  Group: Group,
  Devotion: DevotionScreen,
},
{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#00ada7',
    activeBackgroundColor: '#00ada7',
    inactiveBackgroundColor: '#E0E0E0',
    labelStyle: {
      fontWeight: "bold",
      fontFamily: "Georgia",
      fontSize: 30,
    },
  },
}
);
const switchNavigator =  createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
const AppContainer = createAppContainer(switchNavigator);

export default class App extends React.Component {
  componentDidMount() {
    // TODO: set real fonts, find out why these don't seem to load.
    Font.loadAsync({
      'Georgia': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
      'sans-serif': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
    });
  }
  render() {
    return <AppContainer />;
  }
}

