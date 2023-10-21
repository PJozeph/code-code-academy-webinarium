import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyEvent } from '../model/event.model';

@Injectable()
export class EventsService {
    constructor(private httpClient: HttpClient) {}

    public getEvents(): Observable<CompanyEvent[]> {
        return this.httpClient.get<CompanyEvent[]>('http://localhost:8000/events');
    }
}
