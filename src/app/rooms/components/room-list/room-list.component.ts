import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Room } from '../../model/room.model';
import { RoomService } from '../../services/room.service';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent {
    private roomService = inject(RoomService);
    public rooms$: Observable<Room[]> = this.roomService.getRooms().pipe(
        map((rooms: Room[]) => {
            return rooms.filter((room: Room) => room.availableSeats > 0);
        })
    );
}
