import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddressdetailPage } from '../addressdetail/addressdetail';
import { EnterdetailPage } from '../enterdetail/enterdetail';
import { CommonProvider } from '../../providers/common/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ViewallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewall',
  templateUrl: 'viewall.html',
})
export class ViewallPage {
  addresses: any;
  user_id;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public http : Http
  ) {
     this.user_id = localStorage.getItem('user_id');
     //this.view_addrs();
  }

  ionViewDidEnter(){
    this.view_addrs();
  }

  doRefresh(refresher) {
    this.view_addrs();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  addressdetail() {
    this.navCtrl.push(AddressdetailPage);
  }
  view_addrs() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      userid : this.user_id
    } 
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'address/viewall', postdata, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          console.log(data.data)
          if (data.status == true) {
              this.addresses = data.data;
          } else {
            this.commonprovider.simpleToast(data.message)
          }

        }, err => {
          console.log(err);
        })
    })
  }
  enterdetail() {
    this.navCtrl.push(EnterdetailPage, { edit : 0});
  }

  edit(id){
    this.navCtrl.push(EnterdetailPage, { edit : 1 , addrs_id : id});
  }

  review(id){
    console.log(id);
    // this.navCtrl.push(OrderreviewPage)
    this.navCtrl.push(AddressdetailPage, { addrs_id : id})
  }

}
