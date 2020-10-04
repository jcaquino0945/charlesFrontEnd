import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from  './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {EventsComponent} from './events/events.component';
import {SeriesComponent} from './series/series.component';
import {TheTeamComponent} from './the-team/the-team.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'homeComponent',component:HomeComponent},
  {path:'aboutUsComponent',component:AboutUsComponent},
  {path:'contactUsComponent',component:ContactUsComponent},
  {path:'eventsComponent',component:EventsComponent},
  {path:'seriesComponent',component:SeriesComponent},
  {path:'theTeamComponent',component:TheTeamComponent},
  {path:'',redirectTo:'/homeComponent',pathMatch:'full'}, //if no path, redirects to home
  {path:'**',component:PagenotfoundComponent} //pagenotfound page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
