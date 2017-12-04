import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EntertainmentPage } from '../entertainment/entertainment';
import { DecorationPage } from '../decoration/decoration';
import { BalloondetailPage } from '../balloondetail/balloondetail';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
  products: any;
  vendorname: any;
  categories; lang; categories_1;
  stores;services;isSwitched:any = false;
  pet:any = 'puppies';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http : Http,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public events : Events
  ) {
      this.lang = localStorage.getItem('lang');

      this.vendorname = this.navParams.get('name');
      console.log(this.vendorname)
      var vendor_ids = this.navParams.get('vendorid')
      console.log(vendor_ids);
      this.vendor_products(vendor_ids);
      //this.allCategories();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }



  vendor_products(vendor_ids) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var id = {
      vendorid: vendor_ids
    }
      var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'products/vendor_id', id, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          this.products = data;
          // this.stores = [];
          // this.services = [];
          // for(let i in data){
          //     if(data[i].type == "service"){
          //         this.services.push(data[i])
          //     } else if (data[i].type == "product"){
          //        this.stores.push(data[i])
          //     }
          // }
          // this.categories_1 = data;
          if(this.products.length == 0){
              this.commonprovider.simpleToast("No products found");
          }
        }, err => {
           Loader.dismiss();
           this.commonprovider.simpleToast('An error occured. Try again')
        })
    })
  }

    addtoWish(prod_id){
     let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      productid : prod_id,
      userid : localStorage.getItem('user_id'),
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'wishlists/add',postdata,  options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          if (data.status == true) {
            
            this.events.publish('wish');
          this.commonprovider.simpleToast("Added to wishlist");
        } else {
            this.commonprovider.simpleToast(data.message);
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


  home() {
    this.navCtrl.push(HomePage);
  }

}
