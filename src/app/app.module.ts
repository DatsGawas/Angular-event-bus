import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {CountryListComponent} from "./components/country-list/country.list.component";
import {CountryDetailsComponent} from "./components/country-details/country.details.component";
import {EventBusService} from "./services/event.bus.service";

@NgModule({
  declarations: [
    AppComponent, CountryListComponent, CountryDetailsComponent
  ],
  imports: [
    BrowserModule, AmexioWidgetModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
