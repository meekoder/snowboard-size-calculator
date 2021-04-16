import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() topic?: string;
  @Input() idx?: number;
  @Input() options?: Info[] = [];

  ngOnInit(): void {}

}

