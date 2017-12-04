import { Component } from '@angular/core';
import { IonicPage, NavController, Events, NavParams, LoadingController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { CommonProvider } from '../../providers/common/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {
  ordernumber: any='';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public http : Http,
    public events : Events
  ) {
     
       this.ordernumber = localStorage.getItem('ordernumber');
       this.deleteCart();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
    this.ordernumber = localStorage.getItem('ordernumber');
    this.deleteCart();
  }
  deleteCart(){
     let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var obj = {
      userid : localStorage.getItem('user_id'),
    }
    var serialised = this.commonprovider.serializeObj(obj)
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })


    this.http.post(this.commonprovider.base_url + 'carts/deletecart', obj, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
        }, err => {
    })
   
  }
  payment() {
    this.navCtrl.push(PaymentPage);
  }

}
