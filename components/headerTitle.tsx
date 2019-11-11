import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import GlobalVars from '../GlobalVars';

const LessonTitle = (props) => {
   return (
         <Text style = {styles.text}>
          {props.title}
         </Text>
   )
}
export default LessonTitle

const styles = StyleSheet.create ({
  container: {
     alignItems: 'center',
  },
  text: {
    // color: '#707070',
    // padding: 30,
    fontWeight: "bold",
    fontFamily: GlobalVars.font.family.georgia,
    fontSize: 30,
 }
})
