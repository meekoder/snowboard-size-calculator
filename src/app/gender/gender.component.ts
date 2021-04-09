import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { ButtonsService } from '../services/buttons/buttons.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  genders: Info[] = [];

  constructor(private buttonsService: ButtonsService) {}

  ngOnInit(): void {
    this.getGenders();
  }

  getGenders(): void {
    this.genders = this.buttonsService.getGenders();
  }
}
