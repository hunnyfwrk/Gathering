import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddressdetailPage } from '../addressdetail/addressdetail';
import { ViewallPage } from '../viewall/viewall';
import { CommonProvider } from '../../providers/common/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the EnterdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enterdetail',
  templateUrl: 'enterdetail.html',
})
export class EnterdetailPage {
  address_id: any;
  edit: any;
  title: string = 'Enter details';
  data: any = '';
  user_id;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public http : Http
  ) {
    this.user_id = localStorage.getItem('user_id');
    this.edit = this.navParams.get('edit');
    if(this.edit == 1) {
      this.title = 'Edit address'
      this.address_id = this.navParams.get('addrs_id');
      console.log(this.address_id);
      this.fetchDetails(this.address_id);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterdetailPage');
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
            this.data = data.data;
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

  add_addrs(formdata) {
    console.log(formdata.value)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    formdata.value.userid = this.user_id; // add user id in formdata

    console.log(formdata.value);
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'address/add', formdata.value, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.status == true) {
            this.commonprovider.simpleToast(data.message);
            this.navCtrl.push(ViewallPage);
          } else {
            this.commonprovider.simpleToast(data.message)
          }

        }, err => {
          console.log(err);
           Loader.dismiss();
        })
    })
  }

  edit_addrs(formdata) {
    console.log(formdata.value)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    formdata.value.addressid = this.address_id; // add user id in formdata
    console.log(formdata.value);
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'address/editaddress', formdata.value, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.status == true) {
            this.commonprovider.simpleToast(data.message);
            
            // this.navCtrl.setRoot(ViewallPage)
            this.navCtrl.pop();
          } else {
            this.commonprovider.simpleToast(data.message)
          }

        }, err => {
          console.log(err);
          Loader.dismiss();
        })
    })
  }

  addressdetail() {
    this.navCtrl.push(AddressdetailPage);
  }

}
