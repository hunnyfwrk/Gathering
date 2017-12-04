import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import { ServicePage } from '../service/service'; 
import { EntertainmentPage } from '../entertainment/entertainment';
import { DecorationPage } from '../decoration/decoration';
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
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {
  users: any[];
  categories; lang; categories_1;
  stores;services;isSwitched:any = false;
  pet:any = 'puppies';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http : Http,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
  ) {
      this.lang = localStorage.getItem('lang');
      var vendor_ids = JSON.parse(localStorage.getItem('vendor_ids'));
      var city =  localStorage.getItem('city');
      this.allUsers(city);
      this.vendor_products(vendor_ids);
      //this.allCategories();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }


 allUsers(city) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.get(this.commonprovider.base_url + 'users/all_vendors', options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.users = [];
       this.stores = [];  // vendors itself are stores 
        for(let x in data){
            if(data[x].city){
              for(let j in data[x].city){
                if(data[x].city[j] == city){
                    this.stores.push(data[x])
                }
              }
            }
        }
         console.log(this.stores)
      }, err => {

      })
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
      this.http.post(this.commonprovider.base_url + 'products/vendors_products', id, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          this.categories = data;
          this.services = [];
          for(let i in data){
              if(data[i].type == "service"){
                  this.services.push(data[i])
              }
          }
          this.categories_1 = data;
          if(this.categories_1.length == 0){
              this.commonprovider.simpleToast("Not found");
          }
        }, err => {
           Loader.dismiss();
           this.commonprovider.simpleToast('An error occured. Try again')
        })
    })
  }


  switch(){
    this.isSwitched = true;
  }

  // sortBy(key){
  //   console.log(key)
  //   var data = this.categories_1;
  //   var sorted = [];
  //   for(let i in data){
  //       if(data[i].type == key){
  //           sorted.push(data[i])
  //       }
  //   }
  //   this.categories = sorted;
  // }


  subcategorypage(id,cname,ar_cname, type) {
    this.navCtrl.push(EntertainmentPage, { categoryid : id, name : cname, ar_name: ar_cname, type : type});
  }

  servicepage(id,cname,ar_cname, type) {
    this.navCtrl.push(ServicePage, { vendorid : id, name : cname, ar_name: ar_cname});
  }

  decoration1() {
    this.navCtrl.push(DecorationPage);
  }
  home() {
    this.navCtrl.push(HomePage);
  }

}
