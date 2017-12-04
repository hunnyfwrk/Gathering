import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the AboutorderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutorder',
  templateUrl: 'aboutorder.html',
})
export class AboutorderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutorderPage');
  }

  account() {
    this.navCtrl.push(AccountPage);
  }

}
