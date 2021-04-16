export interface Info {
  topic: string;
  id: number;
  str: string;
}

export interface Topic {
  question: string;
  type: string;
  id: number;
}

export interface Option {
  topicId: number;
  id: number;
  str: string;
}

export interface Question {
  topic: Topic;
  options: Option[];
}

