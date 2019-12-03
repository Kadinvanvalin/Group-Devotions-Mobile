import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DevotionScreen from './src/components/devotion';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: DevotionScreen,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

