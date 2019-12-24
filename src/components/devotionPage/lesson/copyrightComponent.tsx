import React from 'react';
import { View, StyleSheet } from "react-native";
import HTMLView from "react-native-htmlview";
function CopyrightComponent(props) {
  return props.copyright ? (
    <View style={styles.copyright}>
      <HTMLView
        value={props.copyright}
        stylesheet={copyrightStyles}
        />
    </View>
    ) : null
}
export default CopyrightComponent;


const styles = StyleSheet.create({
  copyright: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
});
const copyrightStyles = StyleSheet.create({
  b: {
    fontWeight: "bold"
  }
});