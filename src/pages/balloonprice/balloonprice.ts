import { Component } from '@angular/core';
import { IonicPage, NavController,Events, NavParams,LoadingController, Nav } from 'ionic-angular';
import { EntertainmentPage } from '../entertainment/entertainment';
import { BalloondetailPage } from '../balloondetail/balloondetail';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BalloonpricePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balloonprice',
  templateUrl: 'balloonprice.html',
})
export class BalloonpricePage {
  lang;products;
  subcategory_name;subcategory_ar_name;
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
      this.subcategory_name = this.navParams.get('name');
      this.subcategory_ar_name = this.navParams.get('ar_name');
      var subcategoryid = this.navParams.get('id');
      console.log(subcategoryid)
      var days = JSON.parse(localStorage.getItem("days"));
      var type = this.navParams.get('type');
      if(days){
       
          this.makeYourPlan(subcategoryid, days,type);
       
      } else {
         this.allProducts(subcategoryid,type);
      }
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalloonpricePage');
  }

  makeYourPlan(id, days_prior,type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      subcategoryid: id
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'products/bySubcategory', postdata, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          if (data.status == true) {
            var allPros = data.data;
            var array = [];
            for (let i in allPros) {
               console.log(allPros[i].days_prior);
               console.log(days_prior)
              if(allPros[i].days_prior != undefined){
                   console.log(2);
                if (days_prior > allPros[i].days_prior) {
                     console.log(4);
                  array.push(allPros[i]);
                } else {
                     console.log(5);
                }
              } else {
                 array.push(allPros[i]);
                 console.log(3);
              }
            }
            this.products = array;
            console.log(this.products);
            if (this.products.length == 0) {
              if(type == 'service'){
                 var name = 'services'
              } else {
                 var name = 'products'
              }
              this.commonprovider.toastWithOption("Sorry. No " + name  + " available on your selected date.")
            }
          } else {
            this.commonprovider.simpleToast("Could not load" + name + "...")
          }

        }, err => {
          this.commonprovider.simpleToast("Oops! Something went wrong!")
          Loader.dismiss()
        })
    })
  }


  allProducts(id,type){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      subcategoryid : id
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'products/bySubcategory',postdata,  options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          if (data.status == true) {
            this.products = data.data;
            
            if (data.data.length == 0) {
              if(type == 'service'){
                 var name = 'services'
              } else {
                 var name = 'products'
              }
              this.commonprovider.toastWithOption("Sorry. No " + name  + " available on your selected date.")
              this.commonprovider.simpleToast("Sorry. No "+ name  +" available right now.")
            }
          } else {
             this.commonprovider.simpleToast("Could not load products...")
          }
         
        }, err => {
          this.commonprovider.simpleToast("Oops! Something went wrong!")
          Loader.dismiss()
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

  decoration() {
    this.navCtrl.pop();
    //this.navCtrl.push(EntertainmentPage);
  }
  balloondetail(id) {
    this.navCtrl.push(BalloondetailPage, {product_id : id});
  }

}
