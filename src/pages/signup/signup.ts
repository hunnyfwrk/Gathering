import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { TermsPage } from '../terms/terms';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  data:any='';hasAgreed = false;
  active:any = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public http : Http
  ) {
    console.log(this.hasAgreed);
  }

  agree(yes){
    this.hasAgreed = yes;
    this.active = 'active';
  }
  readTerms(){
    this.navCtrl.push(TermsPage);
  }
  notAgreed(){

        this.commonprovider.toastWithOption('Please hit "I agree" button before proceeding.');
  }

  register(formdata){
    console.log(formdata.value)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    if (formdata.value.password.indexOf(' ') >= 0) {
       this.commonprovider.simpleToast('Space not allowed in password');
    } else {
      if (formdata.value.password != formdata.value.cpassword) {
        this.commonprovider.simpleToast('Passwords do not match.');
      } else {

        var gender = formdata.value.gender;
        if(gender == undefined) {
            gender = '';
        }
        var name = formdata.value.name.split(' ');
        
        var firstname = name[0];
        if(name[1] != undefined){
         var lastname = name[1];
        } else {
          this.commonprovider.simpleToast('Please write your full name');
          return false;
        }
        var postdata = { 
            firstname: firstname,
            lastname : lastname,
            phone: formdata.value.number,
            email: formdata.value.email.toLowerCase(),
            username: formdata.value.email, 
            password: formdata.value.password,
            gender:  gender,
            role : 'user',
            status : '1',
        };
        console.log(postdata);
          var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop:false,
            cssClass:'loader'   
          })
          Loader.present().then(() => {

            this.http.post(this.commonprovider.base_url+'users' + '', postdata, options)
              .map(res => res.json())
              .subscribe(data => {
                Loader.dismiss();
                if(data.status == true){
                  this.commonprovider.simpleToast('Registration successfull.')
                  this.navCtrl.push(SigninPage);
                } else {
                  this.commonprovider.simpleToast(data.message)
                }
                
              }, err=>{
                console.log(err);
              }) 
          })
      
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signin() {
    this.navCtrl.push(SigninPage);
  }


}
