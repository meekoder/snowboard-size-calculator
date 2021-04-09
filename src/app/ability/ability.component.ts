import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { ButtonsService } from '../services/buttons/buttons.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  abilities: Info[] = [];
  constructor(private buttonsService: ButtonsService) {}

  ngOnInit(): void {
    this.getAbilities();
  }

  getAbilities(): void {
    this.abilities = this.buttonsService.getAbilities();
  }
}
