export interface Info {
  topic: string;
  id: number;
  str: string;
}

export interface Question {
  topic: string;
  options: Info[];
}
