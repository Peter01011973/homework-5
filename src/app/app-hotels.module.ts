import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-hotels.component';
import { ListOfHotelComponent } from './list-of-hotel/list-of-hotel.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfHotelComponent,
    WeatherComponent,
    ProfileComponent,
    FooterComponent,
    DeleteDialogComponent,
  ],
  entryComponents: [DeleteDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [DeleteDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }