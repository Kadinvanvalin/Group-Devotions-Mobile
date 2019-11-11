import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { DevotionHeaderOptions } from '../types/devotionHeaderOptions';
import GlobalVars from '../GlobalVars';
import Shimmer from 'react-native-shimmer'

const DevotionHeader = (props) => {
   return (
    <View style={styles.container}>
      <Shimmer>
        <Text>Loading...</Text>
      </Shimmer>
      <Text style={styles.tagLine}>{props.devotionPageTagLine}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.author}>By {props.author}</Text>
    </View>
  );
}
export default DevotionHeader

const styles = StyleSheet.create ({
  container: {
    padding: 16,
    shadowColor: "#404040",
    shadowOffset: {width: 0, height:1},
    shadowRadius: 5,
    shadowOpacity: 50,
    backgroundColor: '#fff',
    //  alignItems: 'center',
    // borderBottomColor: "purple",
    // borderStyle: "solid",
    // borderWidth: 1
  },
  tagLine: {
    color: "#828282",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: GlobalVars.font.family.georgia,
  },
  author: {
    fontWeight: "bold",
    fontFamily: GlobalVars.font.family.georgia,
    // textShadow: " -1px -1px 0 #000,  1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
    // color: GlobalVars.colors.primary,
  },
  title: {
    color: GlobalVars.colors.primary,
    fontWeight: "bold",
    fontFamily: "Georgia",
    fontSize: 25,
 
 }
})
