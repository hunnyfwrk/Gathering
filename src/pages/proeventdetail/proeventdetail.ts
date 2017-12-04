import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventcompaniesPage } from '../eventcompanies/eventcompanies';

/**
 * Generated class for the ProeventdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proeventdetail',
  templateUrl: 'proeventdetail.html',
})
export class ProeventdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProeventdetailPage');
  }

  eventcompanies() {
    this.navCtrl.push(EventcompaniesPage);
  }
  

}
