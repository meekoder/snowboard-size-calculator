import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { ButtonsService } from '../services/buttons/buttons.service';

@Component({
  selector: 'app-shoesize',
  templateUrl: './shoesize.component.html',
  styleUrls: ['./shoesize.component.css']
})
export class ShoesizeComponent implements OnInit {
  shoesizes: Info[] = [];

  constructor(private buttonsService: ButtonsService) {}

  ngOnInit(): void {
    this.getShoeSizes();
  }

  getShoeSizes(): void {
    this.shoesizes = this.buttonsService.getShoeSizes();
  }
}
