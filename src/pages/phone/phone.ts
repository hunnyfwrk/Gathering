import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrivepasswordPage } from '../retrivepassword/retrivepassword';
import { ChangepasswordPage } from '../changepassword/changepassword';

/**
 * Generated class for the PhonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonePage');
  }

  signin() {
    this.navCtrl.push(RetrivepasswordPage);
  }

  changepassword() {
    this.navCtrl.push(ChangepasswordPage);
  }

}
