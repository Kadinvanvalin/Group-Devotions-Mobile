import React from "react";
import { View } from 'react-native';
import DevotionHeaderComponent from "../devotionHeaderComponent";
import StudySectionsComponent from "./studySectionsComponent";
import CopyrightComponent from "./copyrightComponent";
const LessonComponent = (props) => {
      return (
              <View>
                <DevotionHeaderComponent
                  title={props.lesson.title}
                  author={props.lesson.author}
                  devotionPageTagLine={props.lesson.devotionPageTagLine}
                />
                <StudySectionsComponent index={props.index} action={props.action} studySections={props.lesson.studySections}/>
                <CopyrightComponent copyright={props.lesson.copyright}/>
              </View>
      );
};

export default LessonComponent;
