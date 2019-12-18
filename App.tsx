import React from 'react';
import DevotionScreen from './src/components/devotionPage/devotion';
import Group from './src/components/groupChatPage/group';
import LoginScreen from './src/components/auth/login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Font from 'expo-font';
// TODO import icons with fonts
import { Ionicons } from '@expo/vector-icons';
import Settings from './src/components/settings';

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

const TabNavigator = createBottomTabNavigator({
  Devotion: {
    screen: DevotionScreen,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmark" color={tintColor} size={32} />
      )
    },
  },
  Group: {
    screen: Group,
    navigationOptions: {
      tabBarLabel:"",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-mail" color={tintColor} size={32}  />
      )
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-settings" color={tintColor} size={32}/>
      )
    }
  }
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
  state = {account: {}}
  // account:
// name: "Kadin"
// email: "kadinvanvalin@yahoo.com"
// acceptTexts: false
// signUpDate: "2019-11-18T17:15:30.845+0000"
// siteAdmin: false
// disabled: false
// confirmed: false
// privacy: false
// settingsConfirmed: false
// screenFormat: "DETECT"
// postingNotification: "NO"
// studyKeyPublicAccepts: []
// studyKeyGroupDeclines: []
// confirmedByEmail: true
// consecutiveFailedLogins: 0
// keepMeLoggedInTokens: []
// keepMeLoggedInExpirations: []
// groupMemberKey: ""
// key: ""
// allowPasswordChange: true
// studyContributors: []
// privacyAvailableInSettings: false
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

