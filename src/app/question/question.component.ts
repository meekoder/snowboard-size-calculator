import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../info';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() idx: number;
  @Input() question?: Question;

  constructor() {
    this.idx = 0;
  }

  ngOnInit(): void {}

}
