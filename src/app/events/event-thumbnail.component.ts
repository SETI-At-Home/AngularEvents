import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <h2>Date: {{ event?.date }}</h2>
      <h2 [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </h2>
      <h2>Price: \${{ event?.price }}</h2>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span class="pad-left"
          >{{ event.location.city }}, {{ event.location.country }}</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .green {
        color: lightgreen !important;
      }
      .bold: {
        font-weight: bold;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green bold'];
    }
    return [];
  }
}
