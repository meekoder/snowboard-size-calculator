import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() idx: number;
  @Input() length: number;

  constructor(private viewService: ViewService) {
    this.idx = 0;
    this.length = 0;
  }

  ngOnInit(): void {}
}
