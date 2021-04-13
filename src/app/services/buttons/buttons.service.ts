import { Injectable } from '@angular/core';
import { Info } from '../../info';
import { HEIGHTS } from '../../data/heights';
import { WEIGHTS } from '../../data/weights';
import { SHOESIZES } from '../../data/shoesizes';
import { GENDERS } from '../../data/genders';
import { STYLES } from '../../data/styles';
import { ABILITIES } from '../../data/abilities';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor() { }

  getHeights(): Info[] {
    return HEIGHTS;
  }

  getWeights(): Info[] {
    return WEIGHTS;
  }

  getShoeSizes(): Info[] {
    return SHOESIZES;
  }

  getGenders(): Info[] {
    return GENDERS;
  }

  getStyles(): Info[] {
    return STYLES;
  }

  getAbilities(): Info[] {
    return ABILITIES;
  }
}
