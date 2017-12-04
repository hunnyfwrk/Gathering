import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicePage } from '../service/service';
import { BalloonpricePage } from '../balloonprice/balloonprice';

/**
 * Generated class for the DecorationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decoration',
  templateUrl: 'decoration.html',
})
export class DecorationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecorationPage');
  }

  service1() {
    this.navCtrl.push(ServicePage);
  }
  balloonprice() {
    this.navCtrl.push(BalloonpricePage);
  }

}
