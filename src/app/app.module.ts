import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { SeriesComponent } from './series/series.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    TheTeamComponent,
    SeriesComponent,
    ContactUsComponent,
    EventsComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
