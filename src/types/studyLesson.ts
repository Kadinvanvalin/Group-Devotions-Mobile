import { StudySection } from "./studySection";


export interface StudyLesson {
  key:                         string;
  studyKey:                    string;
  title:                       string;
  month?:                      number;
  day?:                        number;
  studySections:               StudySection[];
  devotionPageTagLine?:        string;
  copyright?:                  string;
  author?:                     string;
  accountabilityLesson:        boolean;
  bibleReadingComplete:        boolean;
  dailyReadingStartsEachMonth: boolean;
  navigationCaption?:          string;
  navigationStudyLessonInfos?: any[];
}