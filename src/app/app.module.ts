import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProgressComponent } from './progress/progress.component';

import { ViewService } from './view.service';
import { ChoicesService } from './services/choices/choices.service';
import { ButtonsService } from './services/buttons/buttons.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    QuestionComponent,
    QuestionsComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ViewService,
    ChoicesService,
    ButtonsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
