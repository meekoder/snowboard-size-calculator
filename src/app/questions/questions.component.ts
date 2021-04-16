import { Component, OnInit } from '@angular/core';
import { Question } from '../info';
import { ButtonsService } from '../services/buttons/buttons.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  constructor(private buttonsService: ButtonsService) { }

  ngOnInit(): void {
    const opts = this.buttonsService.getOptions();
    const m: any = {};
    opts.forEach(o => {
      m[o.topic] = true;
    });
    const topics = Object.keys(m);
    console.log(opts, topics);
    topics.forEach(t => {
      this.questions.push({ topic: t, options: opts.filter(o => o.topic === t) });
    });
  }

}
