import { Injectable } from '@angular/core';
import { Info } from './info';
import { HEIGHTS } from './heights';
import { ABILITIES } from './abilities';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor() { }

  getHeights(): Info[] {
    return HEIGHTS;
  }

  getAbilities(): Info[] {
    return ABILITIES;
  }
}
