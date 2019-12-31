import React from "react";
import { View, Text, StyleSheet } from "react-native";
import fetchJsonp from "fetch-jsonp";
import LoadedScripture from "./../../../types/loadedScripture";
class LoadScriptureComponent extends React.Component<any> {
  state: {loadedScripture: LoadedScripture} = {
    loadedScripture: {
      type:       "",
      version:    "",
      book_name:  "",
      book_nr:    null,
      chapter_nr: null,
      direction:  "",
      chapter:    [],
    }
  }
  render() {
    return (
      <View style={styles.container}>
          { this.state.loadedScripture.chapter ?
            this.state.loadedScripture.chapter.map((chapter, i) => {
              return <Text key={i} style={styles.text}>{chapter.verse_nr}) {chapter.verse}</Text>
            })
          : <Text>Unable to find {this.props.children}</Text>
          }
      </View>
    );
  }
  componentDidMount() {
    console.log("component Loaded, trying to load scripture");
    const bibleVersion = "asv"
    fetchJsonp(`https://getbible.net/index.php?option=com_getbible&view=json&p=${this.props.children}&v=${bibleVersion}`)
    .then((response) => response.json())
    .then((loadedScripture) => {
      loadedScripture.chapter = this.turnObjectToArray(loadedScripture.chapter);
      this.setState({loadedScripture})
  })
}
    turnObjectToArray(chapter) {
      let chapterArray = [];
      for (const key in chapter) {
        let value = chapter[key];
        if (chapter.hasOwnProperty(key)) {
          chapterArray.push(value);   
        }
      }
      return chapterArray;
    }
}
export default LoadScriptureComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    shadowColor: "#404040",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 50,
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    color: "#00ada7",
    fontSize: 16,
    fontWeight: "bold"
  }
});
