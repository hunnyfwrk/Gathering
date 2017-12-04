import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaitingPage } from './rating';

@NgModule({
  declarations: [
    RaitingPage,
  ],
  imports: [
    IonicPageModule.forChild(RaitingPage),
  ],
})
export class RaitingPageModule {}
