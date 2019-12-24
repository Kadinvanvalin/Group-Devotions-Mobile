import React from "react";
import { Text, View, StyleSheet } from 'react-native';
class DialogComponent extends React.Component<any, any> {

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
     backgroundColor: '#fff',
     padding: 20
  },
  text: {
     fontSize: 16,
  },
})
export default DialogComponent;
