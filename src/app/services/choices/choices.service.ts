import { Injectable } from '@angular/core';
import { Choices } from './choices';
import { ButtonsService } from '../buttons/buttons.service';
import { Info } from '../../info';

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {
  choices: Choices;

  constructor(private buttonsService: ButtonsService) {
    this.choices = {};
  }

  addChoice(choice: Info): void {
    this.choices[choice.topic] = choice.id;
    const topics = this.buttonsService.getTopics();
  }

  clear(): void {
    this.choices = {};
  }
}
