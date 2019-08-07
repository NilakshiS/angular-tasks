import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Scenario2component1Component } from './scenario2/scenario2component1/scenario2component1.component';
import { Sc3Com1Component } from './scenario3/sc3-com1/sc3-com1.component';
import { Sc3Com2Component } from './scenario3/sc3-com2/sc3-com2.component';
import { Sc4Com1Component } from './scenario4/sc4-com1/sc4-com1.component';
import { Sc4Com2Component } from './scenario4/sc4-com2/sc4-com2.component';
import { Sc5Com1Component } from './scenario5/sc5-com1/sc5-com1.component';
import { Sc5Com2Component } from './scenario5/sc5-com2/sc5-com2.component';
import { Sc5Com3Component } from './scenario5/sc5-com3/sc5-com3.component';
import { Sc6Com1Component } from './scenario6/sc6-com1/sc6-com1.component';
import { Sc6Com2Component } from './scenario6/sc6-com2/sc6-com2.component';
import { Sc6Com3Component } from './scenario6/sc6-com3/sc6-com3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Scenario2component1Component,
    Sc3Com1Component,
    Sc3Com2Component,
    Sc4Com1Component,
    Sc4Com2Component,
    Sc5Com1Component,
    Sc5Com2Component,
    Sc5Com3Component,
    Sc6Com1Component,
    Sc6Com2Component,
    Sc6Com3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
