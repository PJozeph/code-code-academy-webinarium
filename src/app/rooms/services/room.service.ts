import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../model/room.model';

@Injectable()
export class RoomService {
    constructor(private httpClient: HttpClient) {}

    public getRooms(): Observable<Room[]> {
        return this.httpClient.get<Room[]>('http://localhost:3000/rooms');
    }
}
