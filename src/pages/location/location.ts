import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguagePage } from '../language/language';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  users;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    public http : Http,
    public commonprovider : CommonProvider
  ) {
    // this.allUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  language() {
    this.navCtrl.push(LanguagePage);
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
       
        for(let x in data){
            if(data[x].city){
              for(let j in data[x].city){
                if(data[x].city[j] == city){
                    this.users.push(data[x]._id)
                }
              }
            }
        }
       // console.log(this.users)
      // this.vendor_products(this.users)
         console.log(this.users)
        localStorage.setItem('vendor_ids', JSON.stringify(this.users));
        this.navCtrl.push(TabsPage);
      }, err => {

      })
  }


  home(city) {

    if(city == 'jb'){
        city = 'Jubail'
    } else if(city == 'dk') {
        city = 'Damman & Khobar'
    }
    localStorage.setItem('city', city);
    this.allUsers(city);
   // this.vendor_products();
  }

}
