import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput
  } from "react-native";

  
  // const [value, onChangeText] = React.useState('Useless Placeholder');
class TextQuestion extends React.Component<any, any> {
  value: 'Useless Placeholder';
  render() {
    return (
     <View style={styles.container}>
       <Text style={styles.text}>{this.props.children}</Text>
       <TextInput 
              style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
              // Adding hint in TextInput using Placeholder option.
              placeholder=" Enter Your Answer"          
              // Making the Under line Transparent.
              underlineColorAndroid="transparent"
              // Making the Text Input Text Hidden.
       />
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
export default TextQuestion;

