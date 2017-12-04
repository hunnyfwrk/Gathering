import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { ServicePage } from '../service/service';
import { BalloonpricePage } from '../balloonprice/balloonprice';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the EntertainmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {
  subcategories;lang;
  category_name;category_ar_name; type;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public http : Http,
    public loadingCtrl : LoadingController,
  ) {
      this.lang = localStorage.getItem('lang');
      this.type = this.navParams.get('type');
      this.category_name = this.navParams.get('name');
      this.category_ar_name = this.navParams.get('ar_name');
      var categoryid = this.navParams.get('categoryid');
      console.log(categoryid)
      this.allsubCategories(categoryid);
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad EntertainmentPage');
  }


  allsubCategories(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      categoryid : id
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {

      this.http.post(this.commonprovider.base_url + 'subcategories/byCategory',postdata,  options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          if(data.status == true){
             this.subcategories = data.data;
             if(this.subcategories.length == 0){
                this.commonprovider.simpleToast("Nothing in this category yet. Try other categories :)")
             }
          } else {
            this.commonprovider.simpleToast("Could not load subcategories...");
          }
          Loader.dismiss()
        }, err => {
          Loader.dismiss()
        })
    })
  }

productsPage(id, name, ar_name ){
  this.navCtrl.push(BalloonpricePage, {id :id, name :name, ar_name:ar_name, type : this.type})
}

  service() {
    this.navCtrl.push(ServicePage);
  }

}
