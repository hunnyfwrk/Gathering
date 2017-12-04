import { Component } from '@angular/core';
import { NavController, NavParams, Nav, LoadingController } from 'ionic-angular';
import { ServicePage } from '../service/service';
import { StoresPage } from '../Stores/stores'; 
import { LocationPage } from '../location/location';
import { ProplannerPage } from '../proplanner/proplanner';
import { BalloondetailPage } from '../balloondetail/balloondetail';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentdate: any = ''; myDate: any = null;
  trending;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider: CommonProvider,
    public http: Http,
    public loadingCtrl: LoadingController,
    public _sanitizer: DomSanitizer
  ) {
    console.log("updated")
    this.currentdate = this.commonprovider.currentdate();
    this.myDate = this.currentdate;
    console.log(this.currentdate);
    this.trendingPro();

  }

  getDate() {
    console.log(this.myDate);
    var days = JSON.stringify(this.commonprovider.days_prior(this.myDate));
    localStorage.setItem('days', days);
  }

  trendingPro() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    Loader.present().then(() => {

      this.http.get(this.commonprovider.base_url + 'products/trending', options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.trending = data.data;
          for(let i in this.trending){
             this.trending[i].image = this._sanitizer.bypassSecurityTrustUrl(this.trending[i].image);
          }
          Loader.dismiss()
        }, err => {
          Loader.dismiss()
        })
    })
  }

  productDetails(id){
     this.navCtrl.push(BalloondetailPage, {product_id : id});
  }


  service() {
    // this.navCtrl.push(ServicePage);
    this.navCtrl.push(StoresPage)
  }
  location() {
    this.navCtrl.push(LocationPage);
  }
  proplanner() {
    this.navCtrl.push(ProplannerPage);
  }


}
