import { Component,   } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, LoadingController, AlertController } from 'ionic-angular';
import { WishlistPage } from '../wishlist/wishlist';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  lang: string;
  login: any;
  cancel: any;
  user_id;
  tab1Root:any;
  tab2Root = HomePage;
  tab3Root:any;
  tab4Root:any;
  selectedIndex = 1;

  constructor(
    public nav: Nav,
    public alertCtrl : AlertController
  ) {
      this.selectedIndex=1;  

      // to disabled tab4Root 
      if(localStorage.getItem('user_id')){
          this.user_id = localStorage.getItem('user_id');
          this.tab4Root = AccountPage;
          this.tab1Root  = WishlistPage;
          this.tab3Root = CartPage;
      }
      this.lang = localStorage.getItem('lang');
      if(this.lang == 'en'){
        this.cancel = 'Cancel';
        this.login = 'Login';
      } else{
        this.cancel = 'إلغاء';
        this.login = 'تسجيل الدخول';
      }
  }

  tabIndex(event){
    var buttonId = event.id.split('-')[1];
    console.log(buttonId)
    if(buttonId == 3){
      if(localStorage.getItem('user_id')){
          this.user_id = localStorage.getItem('user_id');
          this.tab4Root = AccountPage;
      } else {
          if(this.lang == 'en'){
             this.showAlert('Please log in to view your account.');
          } else {
            this.showAlert('الرجاء تسجيل الدخول لعرض حسابك.');
          }
      }
    } else if(buttonId == 0) {
      if(localStorage.getItem('user_id')){
          this.user_id = localStorage.getItem('user_id');
          this.tab1Root  = WishlistPage;
      } else {
        if(this.lang == 'en'){
             this.showAlert('Please log in to view your wishlist.');
          } else {
           this.showAlert('الرجاء تسجيل الدخول لعرض قائمة الأمنيات.');
          }
      }
    } else if(buttonId == 2) {
      if(localStorage.getItem('user_id')){
          this.user_id = localStorage.getItem('user_id');
          this.tab3Root  = CartPage;
      } else {
        if(this.lang == 'en'){
             this.showAlert('Please log in to view your cart.');
          } else {
             this.showAlert('الرجاء تسجيل الدخول لعرض سلة التسوق.');
          }
      }
    }
  }


  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Login',
      message: message,
      buttons: [
        {
          text: this.cancel,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.login,
          handler: () => {
                this.nav.setRoot(SigninPage);
                this.nav.popToRoot();
          }
        }
      ]
    });
    alert.present();
  }
}
