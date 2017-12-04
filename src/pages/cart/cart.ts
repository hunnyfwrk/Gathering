import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Nav } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { AddressdetailPage } from '../addressdetail/addressdetail';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { EnterdetailPage } from '../enterdetail/enterdetail'
import { ViewallPage } from '../viewall/viewall';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  total: number;
  products: any[];
  lang: string;
  user_id: string;
  noProducts:any = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider: CommonProvider,
    public http: Http,
    public nav: Nav,
    public loadingCtrl: LoadingController,
  ) {

    this.user_id = localStorage.getItem('user_id');
    this.lang = localStorage.getItem('lang');
    this.allProducts(this.user_id)
  }

  doRefresh(refresher) {
    this.allProducts(this.user_id)
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  allProducts(userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var obj = {userid : userid}
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
                for(var i = 0; i < this.products.length; i++){
                    var product = this.products[i];
                    total += (product.product_info.price * product.quantity);
                }
            this.total = total;
            ///
            if(this.products.length > 0) {
               this.noProducts = false;
            } else {
              this.noProducts = true;
            }
          } else {
            this.commonprovider.simpleToast("Could not load products...")
          }

        }, err => {
          this.commonprovider.simpleToast("Oops! Something went wrong!")
        //  Loader.dismiss()
        })
   // })
}

updateQty(cartid, quantity){
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var obj = {
      _id : cartid,
      qty : quantity
    }
    var serialised = this.commonprovider.serializeObj(obj)
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'carts/updateQty', obj, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          this.allProducts(this.user_id)
        }, err => {
          this.commonprovider.simpleToast("Oops! Something went wrong!")
          Loader.dismiss()
        })
    })
}

incQty(index:number, cartid){
  this.products[index].quantity = JSON.parse(this.products[index].quantity) + 1;
  var qty = this.products[index].quantity;
  this.updateQty(cartid, qty)
}

decQty(index:number, cartid){
  if(this.products[index].quantity > 1){
      this.products[index].quantity = JSON.parse(this.products[index].quantity) - 1; 
      var qty = this.products[index].quantity;
      this.updateQty(cartid, qty)
  }
}

removeItem(cartid){
  console.log(cartid);
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var obj = {
      cartid : cartid,
    }
    var serialised = this.commonprovider.serializeObj(obj)
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'carts/deleteproduct', obj, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          if (data.status == true) {
            this.commonprovider.simpleToast(data.message);
             this.products = [];
            this.allProducts(this.user_id);

          }
        }, err => {
          this.commonprovider.simpleToast("Oops! Something went wrong!")
          Loader.dismiss()
        })
    })
}

saveCart(){
  this.navCtrl.push(ViewallPage);
}
}
