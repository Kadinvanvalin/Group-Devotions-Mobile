import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const Scripture = (props) => {
   return (
    <View style = {styles.container}>
         <Text style = {styles.text}>
          {props.content}
         </Text>
      </View>

   )
}
export default Scripture

const styles = StyleSheet.create ({
  container: {
     alignItems: 'center',
     marginTop: 16,
     marginBottom: 16,
     shadowColor: "#404040",
     shadowOffset: {width: 0, height:1},
     shadowRadius: 5,
     shadowOpacity: 50,
     backgroundColor: '#fff',
    // shadowColor: "#404040",
    // shadowOffset: {width: 5, height:5},
    // shadowRadius: 20,
    // shadowOpacity: 50,
    // backgroundColor: '#00ada7',
    padding: 20
  },
  text: {
     color: '#00ada7',
     fontSize: 16,
     fontWeight: "bold",
  },
  textShadow: {
    //  textShadowColor: 'red',
    //  textShadowOffset: { width: 2, height: 2 },
    //  textShadowRadius : 5
  }
})
