import { Injectable } from '@angular/core';
import { Option, Topic } from '../../info';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  getOptions(): Option[] {
    return [
      {topicId: 1, id: 1, str: 'Male' },
      {topicId: 1, id: 2, str: 'Female'},
      {topicId: 2, id: 1, str: 'M5, W6.5 or less' },
      {topicId: 2, id: 2, str: 'M5.5, W7'},
      {topicId: 2, id: 3, str: 'M6, W7.5'},
      {topicId: 2, id: 4, str: 'M6.5, W8'},
      {topicId: 2, id: 5, str: 'M7, W8.5'},
      {topicId: 2, id: 6, str: 'M7.5, W9'},
      {topicId: 2, id: 7, str: 'M8, W9.5'},
      {topicId: 2, id: 8, str: 'M8.5, W10'},
      {topicId: 2, id: 9, str: 'M9, W10.5'},
      {topicId: 2, id: 10, str: 'M9.5, W11'},
      {topicId: 2, id: 11, str: 'M10, W11.5'},
      {topicId: 2, id: 12, str: 'M10.5, W12 and up'},
      {topicId: 3, id: 58, str: '4\'10' },
      {topicId: 3, id: 59, str: '4\'11'},
      {topicId: 3, id: 60, str: '5\'0'},
      {topicId: 3, id: 61, str: '5\'1'},
      {topicId: 3, id: 62, str: '5\'2'},
      {topicId: 3, id: 63, str: '5\'3'},
      {topicId: 3, id: 64, str: '5\'4'},
      {topicId: 3, id: 65, str: '5\'5'},
      {topicId: 3, id: 66, str: '5\'6'},
      {topicId: 3, id: 67, str: '5\'7'},
      {topicId: 3, id: 68, str: '5\'8'},
      {topicId: 3, id: 69, str: '5\'9'},
      {topicId: 3, id: 70, str: '5\'10'},
      {topicId: 3, id: 71, str: '5\'11'},
      {topicId: 3, id: 72, str: '6\'0'},
      {topicId: 3, id: 73, str: '6\'1'},
      {topicId: 3, id: 74, str: '6\'2'},
      {topicId: 3, id: 75, str: '6\'3'},
      {topicId: 3, id: 76, str: '6\'4+'},
      {topicId: 5, id: 1, str: 'Beginner' },
      {topicId: 5, id: 2, str: 'Intermediate'},
      {topicId: 5, id: 3, str: 'Expert'},
      {topicId: 6, id: 1, str: 'Freestyle' },
      {topicId: 6, id: 2, str: 'Freeride'},
      {topicId: 6, id: 3, str: 'All Mountain'},
    ]
  }

  getTopics(): Topic[] {
    return [
      {question: 'gender', type: '', id: 1},
      {question: 'shoesize', type: 'dropdown', id: 2},
      {question: 'height', type: 'dropdown', id: 3},
      {question: 'weight', type: 'number', id: 4},
      {question: 'ability', type: '', id: 5},
      {question: 'style', type: '', id: 6},
    ];
  }
}
