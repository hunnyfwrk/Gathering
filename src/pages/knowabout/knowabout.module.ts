import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowaboutPage } from './knowabout';

@NgModule({
  declarations: [
    KnowaboutPage,
  ],
  imports: [
    IonicPageModule.forChild(KnowaboutPage),
  ],
})
export class KnowaboutPageModule {}
