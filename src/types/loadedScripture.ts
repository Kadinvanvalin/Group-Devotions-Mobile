export default interface LoadedScripture {
  type:       string;
  version:    string;
  book_name:  string;
  book_nr:    number;
  chapter_nr: number;
  direction:  string;
  chapter:   any | { [key: string]: Chapter };
}

export interface Chapter {
  verse_nr: number;
  verse:    string;
}