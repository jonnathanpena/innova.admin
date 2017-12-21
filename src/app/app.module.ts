import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//devextreme
import { DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
