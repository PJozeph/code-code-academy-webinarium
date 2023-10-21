import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.module';
import { TapsComponent } from './taps/taps.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, TapsComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule, RouterModule, HttpClientModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
