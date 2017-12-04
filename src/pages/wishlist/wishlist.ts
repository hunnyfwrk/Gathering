import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Events, Nav } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { BalloondetailPage } from '../balloondetail/balloondetail';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  lang: string;
  showOption:any = '0'
  test_to_show:any = "Edit";
  products: any = [];
   constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     public commonprovider : CommonProvider,
    public http : Http,
    public loadingCtrl : LoadingController,
    public nav : Nav,
    public events : Events
  ) {
    
    this.lang = localStorage.getItem('lang');
    var userid = localStorage.getItem('user_id');
    this.allProducts(userid);
    this.events.subscribe('wish', (data)=>{
          this.allProducts(userid);
    })

  }


  doRefresh(refresher) {
     var userid = localStorage.getItem('user_id');
    this.allProducts(userid)
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  allProducts(userid){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
   
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.get(this.commonprovider.base_url + 'products/showWishlist',  options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          this.products = [];
          if (data.status == true) {
                for(let i in data.data){
                    if(data.data[i].userid == userid){
                        data.data[i].product_info.wishlistid = data.data[i]._id;
                       this.products.push( data.data[i].product_info);
                    }
                }
                if(this.products.length == 0){
                  this.commonprovider.simpleToast('Your wishlist is empty!')
                }
                console.log(this.products);
          } else {
             this.commonprovider.simpleToast("Could not load products...")
          }
         
        }, err => {
          this.commonprovider.simpleToast("Oops! Something went wrong!")
          Loader.dismiss()
        })
    })
  }

  edit(text){
    if(text == 'Edit') {
      this.test_to_show = "Done";
      this.showOption = '1';
    } else {
      this.test_to_show = "Edit";
      this.showOption = '0'
    }
  }


  removeItem(wishlistid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    var postdata = {
      id: wishlistid
    }

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'wishlists/deleteproduct', postdata, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          if (data.status == true) {
            this.commonprovider.simpleToast(data.message)
            var userid = localStorage.getItem('user_id');
            this.allProducts(userid);
          }

        }, err => {
          this.commonprovider.simpleToast("Oops! Something went wrong!")
          Loader.dismiss()
        })
    })
  }

  balloondetail(id) {
    this.navCtrl.push(BalloondetailPage, {product_id : id});
  }
}
