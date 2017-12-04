import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndividualplannerPage } from '../individualplanner/individualplanner';
import { KnowaboutPage } from '../knowabout/knowabout';
import { WeofferPage } from '../weoffer/weoffer';

/**
 * Generated class for the MjeventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mjevent',
  templateUrl: 'mjevent.html',
})
export class MjeventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MjeventPage');
  }

  individualplanner() {
    this.navCtrl.push(IndividualplannerPage);
  }

  knowabout() {
    this.navCtrl.push(KnowaboutPage);
  }
  weoffer() {
    this.navCtrl.push(WeofferPage);
  }

}
