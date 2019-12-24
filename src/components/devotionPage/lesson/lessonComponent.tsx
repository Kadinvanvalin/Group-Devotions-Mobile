import React from "react";
import { View } from 'react-native';
import DevotionHeaderComponent from "../devotionHeaderComponent";
import StudySectionsComponent from "./studySectionsComponent";
import CopyrightComponent from "./copyrightComponent";
class LessonComponent extends React.Component<any, any> {
  render() {
    return (
              <View>
                <DevotionHeaderComponent
                  title={this.props.devotion.title}
                  author={this.props.devotion.author}
                  devotionPageTagLine={this.props.devotion.devotionPageTagLine}
                />
                <StudySectionsComponent currentLesson={this.props.devotion}/>
                <CopyrightComponent copyright={this.props.devotion.copyright}/>
              </View>
            );
  }
}

export default LessonComponent;
