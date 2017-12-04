import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user_id;firstname;
  data:any='';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider: CommonProvider,
    public loadingCtrl: LoadingController,
    public http: Http,
    public events : Events,
  ) {
    this.user_id = localStorage.getItem("user_id");
    var userdata:any = JSON.parse(localStorage.getItem('userdata'));
    this.firstname = userdata.firstname;
    console.log(this.user_id)
    this.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  account() {
    this.navCtrl.pop();
  }

  getUser() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      id: this.user_id
    };
    var serialised = this.commonprovider.serializeObj(postdata)
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'getsingleuser', serialised, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.data= {
            name : data.firstname + ' ' + data.lastname,
            email : data.email,
            phone : data.phone,
            gender : data.gender,
          } 
          Loader.dismiss()
         

        }, err => {
          Loader.dismiss();

        })
    })
  }


  update(formdata) {
    console.log(formdata.value)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
   
        var gender = formdata.value.gender;
        if (gender == undefined) {
          gender = '';
        }
        var name = formdata.value.name.split(' ');

        var firstname = name[0];
        if (name[1] != undefined) {
          var lastname = name[1];
        } else {
          this.commonprovider.simpleToast('Please write your full name');
          return false;
        }
        var postdata = {
          id : this.user_id,
          firstname: firstname,
          lastname: lastname,
          phone: formdata.value.phone,
          email: formdata.value.email,
          username: formdata.value.email,
          gender: formdata.value.gender,
          role: 'user',
          status: '0',
        };
        console.log(postdata);
        var Loader = this.loadingCtrl.create({
          spinner: 'bubbles',
          showBackdrop: false,
          cssClass: 'loader'
        })
        Loader.present().then(() => {
          this.http.post(this.commonprovider.base_url + 'edit_user', postdata, options)
            .map(res => res.json())
            .subscribe(data => {
              Loader.dismiss();
              console.log(data);
              if(data.status == true){
                this.commonprovider.simpleToast(data.message);
                
                //update userdetails in local storage
                this.http.post(this.commonprovider.base_url + 'getsingleuser', {id: this.user_id}, options)
                .map(res => res.json())
                .subscribe(data => {
                  localStorage.setItem('userdata', JSON.stringify(data));
                  var userdata:any = JSON.parse(localStorage.getItem('userdata'));
                  this.firstname = userdata.firstname;
                   this.events.publish('userdata');
                }, err => {

                })

              } else {
                this.commonprovider.simpleToast('Something went wrong. Try again later.');
              }

            }, err => {
              console.log(err);
               Loader.dismiss();
                this.commonprovider.simpleToast('Something went wrong. Try again later.');
            })
        })

    }
  

}
