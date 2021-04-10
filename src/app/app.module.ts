import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeightComponent } from './height/height.component';
import { ButtonComponent } from './button/button.component';
import { AbilityComponent } from './ability/ability.component';
import { GenderComponent } from './gender/gender.component';
import { ShoesizeComponent } from './shoesize/shoesize.component';

@NgModule({
  declarations: [
    AppComponent,
    HeightComponent,
    ButtonComponent,
    AbilityComponent,
    GenderComponent,
    ShoesizeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
