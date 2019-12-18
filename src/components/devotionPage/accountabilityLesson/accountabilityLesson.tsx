import React from "react";
import Dialog from "./dialog"
import YesNoQuestion from "./yesNoQuestion";
import TextQuestion from "./textQuestion";

class AccountabilityLesson extends React.Component<any, any> {
  
  render() {
    return (
     <>
    {this.props.accountabilityLessons.map((lesson, i) => {
      { return lesson.studySections.map((section, i) => {
        if(section.type === 'DIALOG') return <Dialog key={i}>{section.content}</Dialog>
        if(section.type === 'YESNO_QUESTION') return <YesNoQuestion key={i}> {section.content}</YesNoQuestion>
        if(section.type === 'TEXT_QUESTION') return <TextQuestion key={i}>{section.content}</TextQuestion>
        })
    }
    })
  }
   
    </>
    );
  }
}

export default AccountabilityLesson;

