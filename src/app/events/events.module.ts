import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './components/events-list/events-list.component';
import { IonicModule } from '@ionic/angular';
import { EventsService } from './services/events.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [EventsListComponent],
    imports: [CommonModule, EventsRoutingModule, IonicModule, HttpClientModule],
    providers: [EventsService],
})
export class EventsModule {}
