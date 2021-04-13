import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { ButtonsService } from '../services/buttons/buttons.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  styles: Info[] = [];

  constructor(private buttonsService: ButtonsService) {}

  ngOnInit(): void {
    this.getStyles();
  }

  getStyles(): void {
    this.styles = this.buttonsService.getStyles();
  }
}
