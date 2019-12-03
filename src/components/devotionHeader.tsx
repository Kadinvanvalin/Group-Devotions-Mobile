import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import { Rect } from "react-native-svg";
const DevotionHeader = (props) => {
  if(false && props.title) {
    return (
      <View style={styles.container}>
        <Text style={styles.tagLine}>{props.devotionPageTagLine}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.author}>By {props.author}</Text>
      </View>
    );
    } else {
      return(
        <View style={styles.container}>
           <SvgAnimatedLinearGradient width={Dimensions.get('window').width} height={60}>
            <Rect rx="4" ry="4" width="100" height="14"/>
            <Rect y="17" rx="4" ry="4" width={Dimensions.get('window').width - 32 - 100} height="25"/>
            <Rect y="44" rx="4" ry="4" width="100" height="16"/>
         </SvgAnimatedLinearGradient> 
      </View>
      )
    }
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
