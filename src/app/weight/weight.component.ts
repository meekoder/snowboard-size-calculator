import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { ButtonsService } from '../services/buttons/buttons.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  weights: Info[] = [];

  constructor(private buttonsService: ButtonsService) {}

  ngOnInit(): void {
    this.getWeights();
  }

  getWeights(): void {
    this.weights = this.buttonsService.getWeights();
  }
}
