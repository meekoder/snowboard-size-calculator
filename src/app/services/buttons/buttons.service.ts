import { Injectable } from '@angular/core';
import { Info } from '../../info';
import { HEIGHTS } from '../../data/heights';
import { WEIGHTS } from '../../data/weights';
import { SHOESIZES } from '../../data/shoesizes';
import { GENDERS } from '../../data/genders';
import { ABILITIES } from '../../data/abilities';
import { STYLES } from '../../data/styles';

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

  getAbilities(): Info[] {
    return ABILITIES;
  }

  getStyles(): Info[] {
    return STYLES;
  }

  getOptions(): Info[] {
    return [...HEIGHTS, ...WEIGHTS, ...SHOESIZES, ...GENDERS, ...ABILITIES, ...STYLES];
  }
}
