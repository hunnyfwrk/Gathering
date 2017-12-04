import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { RetrivepasswordPage } from '../retrivepassword/retrivepassword';
import { AccountPage } from '../account/account';
import { TabsPage } from '../tabs/tabs';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  isRemember:any = false;
  data:any='';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public http : Http
  ) {
      
      if(localStorage.getItem('isRemember') != undefined || localStorage.getItem('isRemember') != null){
        this.isRemember = localStorage.getItem('isRemember');
        console.log()
        this.data = {
          email : localStorage.getItem('email')
        } ;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  login(formdata) {
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      email: formdata.value.email.toLowerCase(),
      password: formdata.value.password,
    };
    var serialised = this.commonprovider.serializeObj(postdata)
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    Loader.present().then(() => {
      if(this.isRemember == true){
           localStorage.setItem('email',formdata.value.email);
           localStorage.setItem('isRemember','true');
      } else {
        if(localStorage.getItem('isRemember')){
          localStorage.removeItem('isRemember');
            localStorage.removeItem('email')
        }
      }
     
    //  http://wedding-dost.us-east-1.elasticbeanstalk.com/api/users/login1
      this.http.post(this.commonprovider.base_url+'users/login', serialised, options)
        .map(res => res.json())
        .subscribe(data => {
            console.log(data);
              Loader.dismiss()
          if(data.message){
               this.commonprovider.simpleToast(data.message);
          } else {
            var msg = 'Logged in successfully';
                if(localStorage.getItem('lang') == 'ar'){
                  msg = 'تم تسجيل الدخول بنجاح';
                }
            if(data.data.role != 'user'){
              if (data.data.status == 1) {
                localStorage.setItem('userdata', JSON.stringify(data.data));
                localStorage.setItem('user_id', data.data._id);
                
                this.commonprovider.simpleToast(msg);
                this.navCtrl.push(TabsPage);
              } else {
                this.commonprovider.toastWithOption('Your account has not been activated yet. Please try again after sometime.');
              }
            } else {
                localStorage.setItem('userdata', JSON.stringify(data.data));
                localStorage.setItem('user_id', data.data._id);
                this.commonprovider.simpleToast(msg);
                this.navCtrl.push(TabsPage);
            }
            
          }

        }, err=>{
          Loader.dismiss();
          
        })
    })
  }

  remeberMe(status){
    console.log(status)
    if(status == true){
      status = false;
    } else {
       status = true;
    }
    this.isRemember = status;
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  account() {
    this.navCtrl.push(AccountPage);
  }

  retrivepassword() {
    this.navCtrl.push(RetrivepasswordPage);
  }

}
