import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventcompaniesPage } from './eventcompanies';

@NgModule({
  declarations: [
    EventcompaniesPage,
  ],
  imports: [
    IonicPageModule.forChild(EventcompaniesPage),
  ],
})
export class EventcompaniesPageModule {}
