import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MjeventPage } from '../mjevent/mjevent';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the WeofferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weoffer',
  templateUrl: 'weoffer.html',
})
export class WeofferPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeofferPage');
  }

  mjevent() {
    this.navCtrl.push(MjeventPage);
  }

  chat() {
    this.navCtrl.push(ChatPage);
  }

}
