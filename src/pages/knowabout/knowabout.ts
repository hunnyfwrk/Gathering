import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MjeventPage } from '../mjevent/mjevent';

/**
 * Generated class for the KnowaboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-knowabout',
  templateUrl: 'knowabout.html',
})
export class KnowaboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowaboutPage');
  }

  mjevent() {
    this.navCtrl.push(MjeventPage);
  }

}
