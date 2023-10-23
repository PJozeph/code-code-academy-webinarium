import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RoomListComponent } from './components/room-list/room-list.component';
import { EventsRoutingModule } from './rooms-routing.module';
import { RoomService } from './services/room.service';

@NgModule({
    declarations: [RoomListComponent],
    imports: [CommonModule, EventsRoutingModule, IonicModule, HttpClientModule],
    providers: [RoomService],
})
export class RoomsModule {}
