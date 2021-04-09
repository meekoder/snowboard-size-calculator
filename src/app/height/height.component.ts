import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { ButtonsService } from '../buttons.service';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.css']
})
export class HeightComponent implements OnInit {
  heights: Info[] = [];

  constructor(private buttonsService: ButtonsService) {}

  ngOnInit(): void {
    this.getHeights();
  }

  getHeights(): void {
    this.heights = this.buttonsService.getHeights();
  }

}
