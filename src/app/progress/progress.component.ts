import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from '../view.service';
import { Question } from '../info';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() idx: number;
  @Input() length: number;
  @Input() question?: Question;
  idxa: number;
  iconPath?: string;

  constructor(private viewService: ViewService) {
    this.idx = 0;
    this.idxa = this.idx;
    this.length = 0;
    this.iconPath = '';
  }

  ngOnInit(): void {
    this.iconPath = `assets/icons/${this.question?.topic?.question}.png`;
  }

  fn(): void {
    this.idxa += 500;
    console.log(this.idxa);
  }
}
