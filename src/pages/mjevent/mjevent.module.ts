import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MjeventPage } from './mjevent';

@NgModule({
  declarations: [
    MjeventPage,
  ],
  imports: [
    IonicPageModule.forChild(MjeventPage),
  ],
})
export class MjeventPageModule {}
