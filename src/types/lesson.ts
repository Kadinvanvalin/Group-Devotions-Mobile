import { StudySection } from "./studySection";

export default interface Lesson {
  title: string;
  accountabilityLesson: boolean;
  author: string;
  devotionPageTagLine: string;
  studySections: StudySection[];
  copyright: string;
}