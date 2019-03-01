import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <h2>Date: {{ event.date }}</h2>
        <h2>Time: {{ event.time }}</h2>
        <h2>Price: \${{ event.price }}</h2>
        <div>
            <span>Location: {{ event.location.address }}</span>
            <span>&nbsp;</span>
            <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
    </div>
    `
})
export class EventThumbnailComponent {
    @Input() event: any;
}
