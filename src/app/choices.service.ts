import { Injectable } from '@angular/core';
import { Choices } from './button/choices';

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {
  choices: number[] = [];

  add(choice: number): void {
    this.choices.push(choice);
    console.log(this.choices);
  }

  clear(): void {
    this.choices = [];
  }
}
