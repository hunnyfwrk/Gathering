import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';

/**
 * Generated class for the RaitingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-raiting',
  templateUrl: 'raiting.html',
})
export class RaitingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaitingPage');
  }

  history() {
    this.navCtrl.push(HistoryPage);
  }

}
