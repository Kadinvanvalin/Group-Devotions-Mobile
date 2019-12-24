import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native'
const DevotionHeaderComponent = (props) => {
  if(props.title) {
    return (
      <View style={styles.container}>
        <Text style={styles.tagLine}>{props.devotionPageTagLine}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.author}>{props.author ? props.author : "" } {props.author}</Text>
      </View>
    );
    } else {
      return(
        <View style={styles.container}>
      </View>
      )
    }
}
export default DevotionHeaderComponent

const styles = StyleSheet.create ({
  container: {
    padding: 16,
    shadowColor: "#404040",
    shadowOffset: {width: 0, height:1},
    shadowRadius: 5,
    shadowOpacity: 50,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  tagLine: {
    color: "#828282",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  title: {
    color: "#00ada7",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 25,
    
  },
  author: {
        fontWeight: "bold",
        fontFamily: "sans-serif",
      },
})
