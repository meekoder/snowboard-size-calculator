import { Component, Input, OnInit  } from '@angular/core';
import { Info, Option } from '../info';
import { ChoicesService } from '../services/choices/choices.service';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() options?: Option[];
  @Input() type: string;
  @Input() topicQuestion: string;
  @Input() idx: number;

  constructor(private choicesService: ChoicesService, private viewService: ViewService) {
    this.type = '';
    this.topicQuestion = '';
    this.idx = 0;
  }

  ngOnInit(): void {}

  onSelect(option: Option): void {
    const info = this.toInfo(option.topicId + '', option.id);
    this.choicesService.addChoice(info);
    this.viewService.setIdx(this.idx + 1);
  }

  onChange(e: any, topic: string): void {
    this.choicesService.addChoice(this.toInfo(this.topicQuestion, e.target.value));
    this.viewService.setIdx(this.idx + 1);
  }

  toInfo(topic: string, value: number): Info {
    return {
      topic,
      id: value,
      str: '',
    };
  }
}
