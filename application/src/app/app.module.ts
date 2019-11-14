import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppserviceService} from './appservice.service';

import {AgGridModule} from '@ag-grid-community/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
