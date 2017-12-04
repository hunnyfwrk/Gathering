import { Component } from '@angular/core';
import { IonicPage,Nav, NavController, Events, NavParams,LoadingController } from 'ionic-angular';
import { BalloonpricePage } from '../balloonprice/balloonprice';
import { OrderPage } from '../order/order';
import { ChatPage } from '../chat/chat';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BalloondetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balloondetail',
  templateUrl: 'balloondetail.html',
})
export class BalloondetailPage {
  [x: string]: any; stars;
  product:any = '';lang; rate;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public http : Http,
    public nav : Nav,
    public loadingCtrl : LoadingController,
    public events : Events
  ) {
    this.lang = localStorage.getItem('lang');
    var proId = this.navParams.get("product_id");
    if(proId != null){
      this.productDetails(proId);
    }
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalloondetailPage');
  }



  productDetails(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      id: id
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'products/singleproduct', postdata, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          if (data.status == true) {
            this.product = data.data;
            this.rate = parseInt(this.product.rating);
            console.log(this.rate)
            this.stars = this.commonprovider.printRating(this.product.rating);
            if (this.lang == 'en') {
              this.diseases = [
                {
                  title: "Description",
                  description: this.product.description
                },
              ];
            } else {
              this.diseases = [
                {
                  title: "وصف",
                  description: this.product.ar_description
                },
              ];
            }
          } else {
            this.commonprovider.simpleToast("Could not load products...")
          }

        }, err => {
         // this.commonprovider.simpleToast("Oops! Something went wrong!")
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

  balloonprice() {
    this.navCtrl.pop();
    //this.navCtrl.push(BalloonpricePage);
  }
  order1(id) {
    this.navCtrl.push(OrderPage, {product_id : id});
  }
  chat() {
    this.navCtrl.push(ChatPage);
  }

}
