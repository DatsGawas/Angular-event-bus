/**
 * Created by dattaram on 26/3/19.
 */
import {Component, OnInit} from '@angular/core';
import {EventBusService, Events} from "../../services/event.bus.service";
import {GoogleMapOverlays, PropertyGridModel} from "amexio-ng-extensions";

@Component({
  selector: 'country-details',
  templateUrl: 'country.details.component.html'
})

export class CountryDetailsComponent implements OnInit {
  countryDetail: any;
  countryKeyValueData: any[] = [];
  mapData: any[] = [];

  constructor(private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.eventBus.on(Events.countrySelected, (country => {
      this.createEmployeeGrid(country);
    }));
  }

  /* CONVERT COUNTRY DATA INTO GRID AND MAP DATA FORMAT */

  createEmployeeGrid(country: any) {
    this.countryDetail = country;
    this.countryKeyValueData = [];
    this.countryKeyValueData.push(new PropertyGridModel('Name', country.name, '', false));
    this.countryKeyValueData.push(new PropertyGridModel('Official Name', country.name_official, '', false));
    this.countryKeyValueData.push(new PropertyGridModel('Code', country.code2l, '', false));
    this.countryKeyValueData.push(new PropertyGridModel('Latitude', country.latitude, '', false));
    this.countryKeyValueData.push(new PropertyGridModel('Longitude', country.longitude, '', false));
    this.mapData = [];
    this.mapData.push(new GoogleMapOverlays(parseInt(country.latitude), parseInt(country.longitude), country.name, true, null, {country: country.name}));
  }
}
