import { Component } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
  ar_terms: any;
  terms: any; lang: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public http : Http,
    public nav : Nav
    ) {
      this.lang = localStorage.getItem('lang');
      this.termsCondtions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

  goback(){

    console.log(this.nav.canGoBack());
    if(this.nav.canGoBack()){
      this.nav.pop();
    }
  }

  termsCondtions() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    Loader.present().then(() => {

      this.http.get(this.commonprovider.base_url + 'termsnconditions', options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          console.log(data);
          this.terms = data[0].terms;
           this.ar_terms = data[0].ar_terms;
        }, err => {
          Loader.dismiss();
        })
    })

  }
}
