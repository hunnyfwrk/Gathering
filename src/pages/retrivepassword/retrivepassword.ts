import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { EmailPage } from '../email/email';
import { PhonePage } from '../phone/phone';

/**
 * Generated class for the RetrivepasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retrivepassword',
  templateUrl: 'retrivepassword.html',
})
export class RetrivepasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetrivepasswordPage');
  }

  signin() {
    this.navCtrl.push(SigninPage);
  }

  email() {
    this.navCtrl.push(EmailPage);
  }

  phoneverify() {
    this.navCtrl.push(PhonePage);
  }
  

}
