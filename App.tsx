import React from 'react';
import DevotionScreen from './src/components/devotion';
import Group from './src/components/group';
import LoginScreen from './src/components/login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Font from 'expo-font';
// TODO import icons with fonts
import { Ionicons } from '@expo/vector-icons';

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

const TabNavigator = createBottomTabNavigator({
  Group: {
    screen: Group,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-mail" color={tintColor} size={32}  />
      )
    },
  },
  Devotion: {
    screen: DevotionScreen,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmark" color={tintColor} size={32} />
      )
    },
  },
  
},

{
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    inactiveTintColor: 'black',
    activeTintColor: '#00ada7',
    activeBackgroundColor: '#E0E0E0',
    inactiveBackgroundColor: '#E0E0E0',
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

