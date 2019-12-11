import React, { Component } from "react";
import { Platform, KeyboardAvoidingView, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

var chat = {
  operationSuccessful: true,
  data: [
    {
      groupKey: "ahBzfmdyb3VwZGV2b3Rpb25zchILEgVHcm91cBiAgICsr7eDCgw",
      blogDate: "2019-11-14T04:00:00.000+0000",
      blogDateDisplay: "Today",
      blogEntries: []
    },
    {
      groupKey: "ahBzfmdyb3VwZGV2b3Rpb25zchILEgVHcm91cBiAgICsr7eDCgw",
      blogDate: "2019-11-10T04:00:00.000+0000",
      blogDateDisplay: "11/10/2019",
      blogEntries: [
        {
          name: "Kadin",
          groupMemberKey:
            "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgICcxoedCgw",
          postedOn: "2019-11-10T20:55:12.818+0000",
          content:
            "copUt ac ante sit amet nulla ultrices auctor. Suspendisse mollis id diam aliquet porttitor. Donec luctus neque ut turpis dignissim porta nec vitae sem. Donec efficitur consequat massa et eleifend. Morbi sit amet porta dui. Nam efficitur sodales varius. Morbi vitae hendrerit nisi. Donec erat tortor, pretium a maximus scelerisque, tincidunt ut dui. Ut ligula diam, pellentesque id vulputate ut, hendrerit sed eros. Quisque vitae leo vel diam laoreet ultrices. Proin egestas venenatis diam quis blandit. Integer quis erat non urna imperdiet mollis eu quis lect",
          formattedPostedOn: "Sun, 3:55 PM",
          postedOnFullDateTime: "20191110165512818-0400",
          modifiable: false
        },
        {
          name: "Dad",
          groupMemberKey:
            "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgICcu8ONCgw",
          postedOn: "2019-11-10T23:04:04.859+0000",
          content: "I did not realize you new latin!",
          formattedPostedOn: "Sun, 6:04 PM",
          postedOnFullDateTime: "20191110190404859-0400",
          modifiable: false
        },
        {
          name: "Kadin",
          groupMemberKey:
            "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgICcxoedCgw",
          postedOn: "2019-11-10T20:55:12.818+0000",
          content:
            "copUt ac ante sit amet nulla ultrices auctor. Suspendisse mollis id diam aliquet porttitor. Donec luctus neque ut turpis dignissim porta nec vitae sem. Donec efficitur consequat massa et eleifend. Morbi sit amet porta dui. Nam efficitur sodales varius. Morbi vitae hendrerit nisi. Donec erat tortor, pretium a maximus scelerisque, tincidunt ut dui. Ut ligula diam, pellentesque id vulputate ut, hendrerit sed eros. Quisque vitae leo vel diam laoreet ultrices. Proin egestas venenatis diam quis blandit. Integer quis erat non urna imperdiet mollis eu quis lect",
          formattedPostedOn: "Sun, 3:55 PM",
          postedOnFullDateTime: "20191110165512818-0400",
          modifiable: false
        },
        {
          name: "Dad",
          groupMemberKey:
            "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgICcu8ONCgw",
          postedOn: "2019-11-10T23:04:04.859+0000",
          content: "I did not realize you new latin!",
          formattedPostedOn: "Sun, 6:04 PM",
          postedOnFullDateTime: "20191110190404859-0400",
          modifiable: false
        },
        {
          name: "Kadin",
          groupMemberKey:
            "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgICcxoedCgw",
          postedOn: "2019-11-10T20:55:12.818+0000",
          content:
            "copUt ac ante sit amet nulla ultrices auctor. Suspendisse mollis id diam aliquet porttitor. Donec luctus neque ut turpis dignissim porta nec vitae sem. Donec efficitur consequat massa et eleifend. Morbi sit amet porta dui. Nam efficitur sodales varius. Morbi vitae hendrerit nisi. Donec erat tortor, pretium a maximus scelerisque, tincidunt ut dui. Ut ligula diam, pellentesque id vulputate ut, hendrerit sed eros. Quisque vitae leo vel diam laoreet ultrices. Proin egestas venenatis diam quis blandit. Integer quis erat non urna imperdiet mollis eu quis lect",
          formattedPostedOn: "Sun, 3:55 PM",
          postedOnFullDateTime: "20191110165512818-0400",
          modifiable: false
        },
        {
          name: "Dad",
          groupMemberKey:
            "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgICcu8ONCgw",
          postedOn: "2019-11-10T23:04:04.859+0000",
          content: "I did not realize you new latin!",
          formattedPostedOn: "Sun, 6:04 PM",
          postedOnFullDateTime: "20191110190404859-0400",
          modifiable: false
        }
      ]
    }
  ]
};

interface User {
  _id: any;
  name: string;
  avatar?: string;
}
interface Message {
  _id: any;
  text: string;
  createdAt: Date;
  user: User;
}
interface BlogPost {
  name: string;
  groupMemberKey: string;
  postedOn: string;
  content: string;
  formattedPostedOn: string;
  postedOnFullDateTime: string;
  modifiable: boolean;
}

class Group extends Component {
  state: { messages: Message[] } = {
    messages: []
  };
  // "blogEntries": [{
  //   "name": "Kadin",
  //   "groupMemberKey": "ahBzfmdyb3VwZGV2b3Rpb25zchgLEgtHcm91cE1lbWJlchiAgICcxoedCgw",
  //   "postedOn": "2019-11-10T20:55:12.818+0000",
  //   "content": "copUt ac ante sit amet nulla ultrices auctor. Suspendisse mollis id diam aliquet porttitor. Donec luctus neque ut turpis dignissim porta nec vitae sem. Donec efficitur consequat massa et eleifend. Morbi sit amet porta dui. Nam efficitur sodales varius. Morbi vitae hendrerit nisi. Donec erat tortor, pretium a maximus scelerisque, tincidunt ut dui. Ut ligula diam, pellentesque id vulputate ut, hendrerit sed eros. Quisque vitae leo vel diam laoreet ultrices. Proin egestas venenatis diam quis blandit. Integer quis erat non urna imperdiet mollis eu quis lect",
  //   "formattedPostedOn": "Sun, 3:55 PM",
  //   "postedOnFullDateTime": "20191110165512818-0400",
  //   "modifiable": false
  // },
  componentWillMount() {
    this.setState({
      messages: chat.data.map(data =>
        data.blogEntries.map(this.transform).flat()
      )[1]
    });
    // this.setState({
    //   messages: [
    //     {
    //       _id: 1,
    //       text: "Hello developer",
    //       createdAt: new Date(),
    //       user: {
    //         _id: 2,
    //         name: "React Native",
    //         avatar: "https://placeimg.com/140/140/any"
    //       }
    //     }
    //   ]
    // });
  }
  transform(blogPost: BlogPost, i): Message {
    function getDate(strDate): Date {
      var dateString = "2019-11-10T23:04:04.859+0000";
      var reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
      var dateArray = reggie.exec(strDate); 
      return new Date(
          (+dateArray[1]),
          (+dateArray[2])-1, // Careful, month starts at 0!
          (+dateArray[3]),
          (+dateArray[4]),
          (+dateArray[5]),
          (+dateArray[6])
      );
    }
    const message: Message = {
      _id: i,
      text: blogPost.content,
      createdAt: getDate(blogPost.postedOn),
      user: {
        _id: blogPost.name,
        name: blogPost.name,
        avatar: "https://placeimg.com/140/140/any"
      }
    };
    return message;
  }

  render() {
    console.log(this.state.messages);
    return (
      <GiftedChat
        messages={this.state.messages}
        // onSend={messages => this.onSend(messages)}
        user={{
          _id: "Kadin"
        }}
        {
          ...Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
       }
      />
      // }
      // )
    );
  }
}
export default Group;

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Georgia",
    fontSize: 30
  }
});
