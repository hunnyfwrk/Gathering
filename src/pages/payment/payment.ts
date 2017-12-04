import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { OrderreviewPage } from '../orderreview/orderreview';
import { ConfirmationPage } from '../confirmation/confirmation';
import { CommonProvider } from '../../providers/common/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  products: any;
  cart_ids: any;
  addrs_id: any;
  total: any;
  user_id: string;
  method :any = null;
 constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public http : Http,
    public events : Events
  ) {
        this.addrs_id = this.navParams.get('addrs_id');
        this.cart_ids = this.navParams.get('cart_ids');
        this.total = this.navParams.get('total');
        this.user_id = localStorage.getItem('user_id');
        this.allProducts(this.user_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  allProducts(userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var obj = { userid: userid }
    var serialised = this.commonprovider.serializeObj(obj)
    this.http.post(this.commonprovider.base_url + 'carts/showCart', obj, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        // Loader.dismiss()
        this.products = [];
        if (data.status == true) {
          this.products = data.data;
        } 
      }, err => {
      })
  }

  review() {
    this.navCtrl.push(OrderreviewPage);
  }

  confirmation(method) {
    console.log(this.addrs_id, this.total, this.user_id);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var billing = JSON.parse(localStorage.getItem('address'));
    // console.log(billing)
    var obj = {
      userid: this.user_id,
      total: this.total,
      billing_address: billing,
      orderitems: this.products,
      method: method
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    console.log(obj)
    if (method == 'cod') {
      Loader.present().then(() => {
        this.http.post(this.commonprovider.base_url + 'orders/checkout', obj, options)
          .map(res => res.json())
          .subscribe(data => {
            Loader.dismiss()
            if (data.status == true) {
               this.commonprovider.simpleToast(data.message);
               localStorage.setItem('ordernumber', data.ordernumber);
               this.navCtrl.setRoot(ConfirmationPage);
               this.navCtrl.popToRoot();
            } else {
               this.commonprovider.simpleToast(data.message);
            }
          }, err => {
             Loader.dismiss()
             this.commonprovider.simpleToast('Order could not be place. Network error.');
          })
      });
    } else {
      this.commonprovider.simpleToast('Please choose Cash on delivery');
    }
  }
  

}
