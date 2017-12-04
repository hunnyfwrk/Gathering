import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddressdetailPage } from '../addressdetail/addressdetail';
import { PaymentPage } from '../payment/payment';
import { CommonProvider } from '../../providers/common/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { googlemaps } from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the OrderreviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderreview',
  templateUrl: 'orderreview.html',
})
export class OrderreviewPage {
  cart_ids: any[];
  map: any;
  currentLongitude: number;
  currentLatitude: number;
  autocomplete: {
    query: string;
  };
  autocompleteItems: any[];
  geocoder: any;
  acService: any;
  addrs: any;
  user_id: string;
  total: number;
  products: any[];

  @ViewChild('map') mapElement: ElementRef;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider: CommonProvider,
    public loadingCtrl: LoadingController,
    public http: Http,
    public places: ElementRef,
    private geolocation: Geolocation,
  ) {
    var addrs_id = this.navParams.get('addrs_id');
    this.fetchDetails(addrs_id)
    this.user_id = localStorage.getItem('user_id');
    console.log(addrs_id)
    this.allProducts(this.user_id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderreviewPage');
  }

  addressdetail() {
    this.navCtrl.push(AddressdetailPage);
  }
  payment() {
    console.log(this.cart_ids);
    this.navCtrl.push(PaymentPage, { total: this.total, addrs_id: this.addrs._id, cart_ids : this.cart_ids });
  }

  allProducts(userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var obj = { userid: userid }
    var serialised = this.commonprovider.serializeObj(obj)
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    //
    //  Loader.present().then(() => {
    this.http.post(this.commonprovider.base_url + 'carts/showCart', obj, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        // Loader.dismiss()
        this.products = [];
        if (data.status == true) {
          this.products = data.data;
          ////
          var total = 0;
          var cart_ids = [];
          for (var i = 0; i < this.products.length; i++) {
            var product = this.products[i];
            total += (product.product_info.price * product.quantity);
            cart_ids.push(this.products[i]._id)
          }
          this.total = total;
          this.cart_ids = cart_ids;
          console.log(this.cart_ids)
        } else {
          this.commonprovider.simpleToast("Could not load products...")
        }

      }, err => {
        this.commonprovider.simpleToast("Oops! Something went wrong!")
        //  Loader.dismiss()
      })
    // })
  }

  fetchDetails(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      addressid: id
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
            localStorage.setItem('address',JSON.stringify(data.data));
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

  

}
