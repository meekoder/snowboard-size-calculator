import { Component, OnInit } from '@angular/core';
import { Question } from '../info';
import { ButtonsService } from '../services/buttons/buttons.service';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];

  constructor(private buttonsService: ButtonsService, public viewService: ViewService) {}

  ngOnInit(): void {
    const opts = this.buttonsService.getOptions();
    const topics = this.buttonsService.getTopics();
    topics.forEach(t => {
      this.questions.push({ topic: t, options: opts.filter(o => o.topicId === t.id) });
    });
  }

}
