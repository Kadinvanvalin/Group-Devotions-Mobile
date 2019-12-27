import React from "react";
import DialogComponent from "./dialogComponent"
import YesNoQuestionComponent from "./yesNoQuestionComponent";
import TextQuestionComponent from "./textQuestionComponent";
import ScriptureComponent from "./scriptureComponent";
import { Text, View } from "react-native"
import LoadScriptureComponent from "./loadScriptureComponent";

const StudySectionsComponent = (props) => {
    return <>
    {  
      props.studySections.map((section, i) => {
        if(section.type === 'SCRIPTURE') return <ScriptureComponent key={i}>{section.content}</ScriptureComponent>
        if(section.type === 'DIALOG') return <DialogComponent key={i}>{section.content}</DialogComponent>
        if(section.type === 'YESNO_QUESTION') return <YesNoQuestionComponent key={i}>{section.content}</YesNoQuestionComponent>
        if(section.type === 'TEXT_QUESTION') return <TextQuestionComponent key={i}>{section.content}</TextQuestionComponent>
        if(section.type === 'SCRIPTURE_TO_LOAD') return <LoadScriptureComponent key={i}>{section.content}</LoadScriptureComponent>
      return <View><Text>FAILED!!{section.content}</Text></View>
      })
    }   
  </>
}

export default StudySectionsComponent;
