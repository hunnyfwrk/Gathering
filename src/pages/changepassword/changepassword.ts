import { Component } from '@angular/core';
import { IonicPage, NavController,Nav, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PhonePage } from '../phone/phone';
import { SigninPage } from '../signin/signin';
import { AccountPage } from '../account/account';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  data: any = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public nav : Nav,
    public commonprovider: CommonProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

  phone() {
    this.navCtrl.push(PhonePage);
  }

  account() {
    this.navCtrl.push(AccountPage);
  }

  Changepassword(formdata) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var user_id = localStorage.getItem('user_id')
    var postdata = {
      id: user_id,
      password: formdata.value.password,
    };
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    if (formdata.value.password.indexOf(' ') >= 0) {
      this.commonprovider.simpleToast('Space not allowed in password');
    } else {
      if (formdata.value.password != formdata.value.cpassword) {
        this.commonprovider.simpleToast('Passwords do not match.');
      } else {
        // return false;
        Loader.present().then(() => {
          this.http.post(this.commonprovider.base_url + 'users/changepass', postdata, options)
            .map(res => res.json())
            .subscribe(data => {
              Loader.dismiss()
              if (data.status == true) {
                this.commonprovider.simpleToast("You have got yourself a new password!");
                this.logout();
              } else {
                this.commonprovider.simpleToast('An error occurred. Please try again');
              }

            }, err => {
              Loader.dismiss()
            })
        })
      }
    }
  }

  logout(){
    localStorage.clear();
    this.nav.setRoot(SigninPage);
    this.nav.popToRoot();
    // this.navCtrl.push(SigninPage);
  }

}
