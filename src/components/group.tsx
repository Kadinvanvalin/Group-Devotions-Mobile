import React, { Component } from "react";
import { Platform, KeyboardAvoidingView, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios"

interface User {
  _id: any;
  name: string;
  avatar?: string;
}
interface Message {
  // _id: any;
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

  componentWillMount() {
    const groupChatUrl = "https://www.groupdevotions.com/rest/blog/query"
    axios.get(groupChatUrl,
      { withCredentials: true, headers: {
      }}
    ).then((response) => {
      this.setState({
        messages: response.data.data.map(data =>
          data.blogEntries.map(this.transform).flat()
          ).flat().map((message, i) => {return {...message, _id: i}})
        });
      })

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
