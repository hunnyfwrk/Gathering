import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IndividualplannerPage } from '../individualplanner/individualplanner';
import { EventcompaniesPage } from '../eventcompanies/eventcompanies';

/**
 * Generated class for the ProplannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proplanner',
  templateUrl: 'proplanner.html',
})
export class ProplannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProplannerPage');
  }

  home() {
    this.navCtrl.push(HomePage);
  }
  individualplanner() {
    this.navCtrl.push(IndividualplannerPage);
  }
  eventcompanies() {
    this.navCtrl.push(EventcompaniesPage);
  }


}
