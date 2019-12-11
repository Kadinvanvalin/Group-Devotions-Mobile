import React from 'react';
import { Text, StyleSheet } from 'react-native'

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
    fontWeight: "bold",
    fontFamily: "Georgia",
    fontSize: 30,
 }
})
