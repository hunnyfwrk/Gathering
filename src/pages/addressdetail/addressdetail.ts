import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { EnterdetailPage } from '../enterdetail/enterdetail';
import { ViewallPage } from '../viewall/viewall';
import { OrderreviewPage } from '../orderreview/orderreview';
import { CommonProvider } from '../../providers/common/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the AddressdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addressdetail',
  templateUrl: 'addressdetail.html',
})
export class AddressdetailPage {
  addrs: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl : LoadingController,
    public commonprovider : CommonProvider
  ) {
      var id = this.navParams.get('addrs_id')
      console.log(id)
      this.fetchDetails(id);
  }

    fetchDetails(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      addressid : id
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'address/viewbyid', postdata, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.status == true) {
            console.log(data.data);
            this.addrs = data.data;
          } else {
            this.commonprovider.simpleToast(data.message)
          }

        }, err => {
          console.log(err);
           Loader.dismiss();
           this.commonprovider.simpleToast('Something went wrong. Please try again')
        })
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressdetailPage');
  }
  cart() {
    this.navCtrl.push(CartPage);
  }
  enterdetail() {
    this.navCtrl.push(EnterdetailPage);
  }
  viewall() {
    this.navCtrl.push(ViewallPage);
  }
  orderreview(id) {
    this.navCtrl.push(OrderreviewPage, { addrs_id : id});
  }


}
