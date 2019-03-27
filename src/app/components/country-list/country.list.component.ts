/**
 * Created by dattaram on 26/3/19.
 */
import {Component, OnInit} from '@angular/core';
import {EmitEvent, EventBusService, Events} from '../../services/event.bus.service';

@Component({
   selector: 'country-list',
   templateUrl: 'country.list.component.html'
})

export class CountryListComponent implements OnInit {
  constructor(private eventBus: EventBusService) {
  }

  ngOnInit() {
  }

  getRowData(country: any) {
    this.eventBus.emit(new EmitEvent(Events.countrySelected, country));
  }

}
