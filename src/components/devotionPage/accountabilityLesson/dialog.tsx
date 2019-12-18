import React from "react";
import {
  View,
  Text,
  StyleSheet,
  } from "react-native";

class Dialog extends React.Component<any, any> {
  
  render() {
    return (
     <View style={styles.container}>
       <Text style={styles.text}>{this.props.children}</Text>
    </View>
    );
  }
}
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
     padding: 20
  },
  text: {
     color: '#00ada7',
     fontSize: 16,
     fontWeight: "bold",
  },
})
export default Dialog;

