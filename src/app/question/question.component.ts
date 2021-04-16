import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../info';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() idx: number;
  @Input() question?: Question;

  constructor(private viewService: ViewService) {
    this.idx = 0;
  }

  ngOnInit(): void {
    console.log(this.question);
  }

}
