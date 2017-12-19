import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//devextreme
import { DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
