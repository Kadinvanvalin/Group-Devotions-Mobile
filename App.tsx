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
// keepMeLoggedInTokens: (131) ["8145452356251736872", "-55894454703469237", "-5261141125209814399", "-802859957387556535", "8771151534613117202", "1809009975351538589", "-4165160235343154225", "-2634343958866932135", "-7367158358538375704", "-1912384998863567847", "5270150702792508540", "-2073901310460178650", "-4055746495620581564", "-5038556865616411529", "-6413176160803152953", "5282907908220239765", "8157471683382772340", "5707388561436943904", "-5620863844292155895", "-2348383387060080457", "-6872693303498393195", "-8075940514129039936", "8271963114063447442", "6271561081048042726", "-8355064645245349121", "6117461313791839716", "-7684903577035235996", "6511027175614473990", "8774012522078146426", "-5762357118817572058", "2822671283046365418", "5300434970512592150", "-1243946772737582604", "-8138182617669704288", "2874318552750629358", "8664374906282772232", "4375709183136071943", "-4704189040393034239", "-4461058289590129194", "3237644980945333203", "1945707447229882669", "-8761414536769545424", "-2665824836300664932", "1375439428816677546", "-1604108767648660599", "-7760584142955053291", "7211354635609658151", "9080315027692084596", "6468369639891517242", "-6297307835744359201", "2985831034191930991", "8827488921830184550", "-418452578579684211", "8601714501599612744", "-707660440470952517", "-7064970755207887209", "5231988909968574351", "-344087061116460346", "4348214618702926130", "-5378167725841554931", "7670408816490382172", "-5832246959079464018", "-6108736289521690958", "-3359401527305425969", "8377442895687308791", "4713696988295815359", "2001911658422131720", "-1076986381910085829", "-4008496730077335094", "-6462249301538326006", "5049170394396153004", "7102239689625802921", "-8675569236057838232", "6773137243015379944", "-1660354325817396897", "-3964555595329705313", "-4820686803983953521", "7657170331736444544", "1730832532690890223", "8158133999697374936", "4429239053522327386", "6020635983478911967", "5593194254345301608", "2873792682175097258", "9103179759242667876", "-4213599630132292445", "-3166760055641239523", "-1194873854892804336", "-7622303533516851006", "-4572349964545542415", "-6913978915135868965", "-2370830716500401813", "4145144410720114346", "-5861989904457640778", "5049838615341373741", "3416176868622111032", "8405419487553492961", "-7711353269161731252", "-3748142208012671554", "-1087918446637507191", …]
// keepMeLoggedInExpirations: (131) ["2020-01-17T17:21:10.027+0000", "2020-02-02T15:25:17.186+0000", "2020-02-02T15:40:55.281+0000", "2020-02-02T15:48:22.868+0000", "2020-02-04T19:32:40.826+0000", "2020-02-04T19:35:54.412+0000", "2020-02-04T19:38:20.093+0000", "2020-02-04T19:42:30.124+0000", "2020-02-04T19:49:56.418+0000", "2020-02-04T19:52:16.052+0000", "2020-02-04T19:54:33.518+0000", "2020-02-04T19:54:38.848+0000", "2020-02-04T19:56:09.466+0000", "2020-02-04T20:08:53.753+0000", "2020-02-09T20:27:33.514+0000", "2020-02-09T21:18:55.088+0000", "2020-02-09T21:19:49.604+0000", "2020-02-09T21:38:41.671+0000", "2020-02-09T21:46:27.810+0000", "2020-02-09T21:49:42.525+0000", "2020-02-09T22:09:04.436+0000", "2020-02-09T22:10:24.427+0000", "2020-02-09T22:10:25.323+0000", "2020-02-09T22:15:42.978+0000", "2020-02-09T22:16:05.107+0000", "2020-02-09T22:18:40.298+0000", "2020-02-09T22:19:08.499+0000", "2020-02-09T22:19:29.113+0000", "2020-02-09T22:19:29.856+0000", "2020-02-09T22:20:34.647+0000", "2020-02-09T22:22:44.695+0000", "2020-02-09T22:22:45.407+0000", "2020-02-09T22:22:46.606+0000", "2020-02-09T22:22:48.973+0000", "2020-02-09T22:24:01.505+0000", "2020-02-09T22:30:17.575+0000", "2020-02-09T22:30:21.857+0000", "2020-02-09T22:35:45.514+0000", "2020-02-09T22:35:45.819+0000", "2020-02-09T22:38:20.294+0000", "2020-02-09T22:41:16.405+0000", "2020-02-09T22:41:17.028+0000", "2020-02-09T22:41:21.394+0000", "2020-02-09T22:41:21.680+0000", "2020-02-09T22:42:30.603+0000", "2020-02-09T22:52:03.981+0000", "2020-02-09T22:52:06.391+0000", "2020-02-09T22:53:08.349+0000", "2020-02-09T22:53:08.887+0000", "2020-02-09T22:55:01.201+0000", "2020-02-09T22:55:02.372+0000", "2020-02-09T23:12:39.506+0000", "2020-02-09T23:12:40.975+0000", "2020-02-09T23:12:43.495+0000", "2020-02-09T23:12:43.921+0000", "2020-02-09T23:14:45.613+0000", "2020-02-09T23:14:48.355+0000", "2020-02-09T23:15:46.044+0000", "2020-02-09T23:17:11.662+0000", "2020-02-09T23:17:20.041+0000", "2020-02-09T23:17:55.369+0000", "2020-02-09T23:17:55.641+0000", "2020-02-09T23:18:05.569+0000", "2020-02-09T23:18:29.639+0000", "2020-02-09T23:19:24.539+0000", "2020-02-09T23:19:25.171+0000", "2020-02-09T23:19:32.853+0000", "2020-02-09T23:19:46.003+0000", "2020-02-09T23:20:54.360+0000", "2020-02-09T23:20:54.611+0000", "2020-02-09T23:21:04.455+0000", "2020-02-09T23:21:40.747+0000", "2020-02-09T23:21:50.465+0000", "2020-02-09T23:22:20.847+0000", "2020-02-09T23:22:27.457+0000", "2020-02-09T23:23:05.152+0000", "2020-02-09T23:23:30.052+0000", "2020-02-09T23:23:30.564+0000", "2020-02-09T23:23:51.661+0000", "2020-02-09T23:23:52.145+0000", "2020-02-09T23:23:57.542+0000", "2020-02-09T23:24:50.204+0000", "2020-02-09T23:24:54.294+0000", "2020-02-09T23:24:54.879+0000", "2020-02-09T23:25:34.054+0000", "2020-02-09T23:25:34.440+0000", "2020-02-09T23:25:57.653+0000", "2020-02-09T23:25:57.965+0000", "2020-02-09T23:27:34.856+0000", "2020-02-09T23:27:35.519+0000", "2020-02-09T23:27:53.943+0000", "2020-02-09T23:27:54.200+0000", "2020-02-09T23:27:59.351+0000", "2020-02-09T23:29:01.722+0000", "2020-02-09T23:29:02.641+0000", "2020-02-09T23:29:22.201+0000", "2020-02-09T23:29:24.256+0000", "2020-02-09T23:30:03.740+0000", "2020-02-09T23:30:03.995+0000", "2020-02-09T23:30:10.663+0000", …]
// groupMemberKey: "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgIDstd6BCgw"
// key: "ahBzfmdyb3VwZGV2b3Rpb25zchQLEgdBY2NvdW50GICAgKydiZAKDA"
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

