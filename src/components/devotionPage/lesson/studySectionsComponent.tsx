import React from "react";
import DialogComponent from "./dialogComponent"
import YesNoQuestionComponent from "./yesNoQuestionComponent";
import TextQuestionComponent from "./textQuestionComponent";
import ScriptureComponent from "./scriptureComponent";
import { Text, View } from "react-native"

const StudySectionsComponent = (props) => {
    return <>
    {  
      props.studySections.map((section, i) => {
        if(section.type === 'SCRIPTURE') return <ScriptureComponent key={i} content={section.content} />
        if(section.type === 'DIALOG') return <DialogComponent key={i}>{section.content}</DialogComponent>
        if(section.type === 'YESNO_QUESTION') return <YesNoQuestionComponent key={i}> {section.content}</YesNoQuestionComponent>
        if(section.type === 'TEXT_QUESTION') return <TextQuestionComponent key={i}>{section.content}</TextQuestionComponent>
        return <View><Text>FAILED!!</Text></View>
      })
    }   
  </>
}

export default StudySectionsComponent;
