import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndividualplannerPage } from './individualplanner';

@NgModule({
  declarations: [
    IndividualplannerPage,
  ],
  imports: [
    IonicPageModule.forChild(IndividualplannerPage),
  ],
})
export class IndividualplannerPageModule {}
