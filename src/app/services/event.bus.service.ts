/**
 * Created by dattaram on 26/3/19.
 */
import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/internal/operators';

@Injectable()
export class EventBusService {

  private subject = new Subject<any>();

  constructor() {
  }


  /* SUBSCRIPTION METHOD */

  on(event: Events, action: any): Subscription {
    return this.subject
      .pipe(
        filter((e: EmitEvent) => {
            return e.name === event;
        }),
        map((evnt: EmitEvent) => {
           return evnt.value;
        })
      ).subscribe(action);
  }

  /* EVENT EMIT METHOD */

  emit(event: EmitEvent) {
    this.subject.next(event);
  }
}


/* EMIT EVENT STRUCTURE */

export class EmitEvent {
  constructor(public name: any, public value?: any) {
  }
}


/* YOU CAN ADD MULTIPLE EVENT */

export enum Events {
  countrySelected
}
