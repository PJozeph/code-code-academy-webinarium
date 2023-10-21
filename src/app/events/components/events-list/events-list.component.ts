import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyEvent } from '../../model/event.model';
import { EventsService } from '../../services/events.service';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
    events$: Observable<CompanyEvent[]> = this.eventService.getEvents();

    constructor(private eventService: EventsService) {}

    ngOnInit() {}
}
