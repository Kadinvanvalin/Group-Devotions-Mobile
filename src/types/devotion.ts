// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Devotion {
  operationSuccessful: boolean;
  data:                Data;
}

export interface Data {
  studyLessons:             StudyLesson[];
  lessonBlogMap:            LessonBlogMap;
  firstLesson:              boolean;
  accountabilityConfigured: boolean;
}

export interface LessonBlogMap {
}

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

export interface StudySection {
  content:           string;
  type:              string;
  creationTimestamp: string;
  rawHtml:           boolean;
  answers:           any[];
}