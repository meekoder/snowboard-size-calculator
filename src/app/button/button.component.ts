import { Component, Input, OnInit  } from '@angular/core';
import { Info } from '../info';
import { ChoicesService } from '../choices.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() options?: object;
  selectedOption?: Info;

  constructor(private choicesService: ChoicesService) {}

  ngOnInit(): void {
  }

  onSelect(option: Info): void {
    this.selectedOption = option;
    this.choicesService.add(option.id);
  }

}
