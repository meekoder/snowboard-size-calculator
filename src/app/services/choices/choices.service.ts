import { Injectable } from '@angular/core';
import { Choices } from './choices';
import { Info } from '../../info';

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {
  choices: Choices;

  constructor() {
    this.choices = {};
  }

  addChoice(choice: Info): void {
    this.choices[choice.topic] = choice.id;
    console.log(this.choices);
  }

  clear(): void {
    this.choices = {};
  }
}
