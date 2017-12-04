import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { KnowaboutPage } from '../pages/knowabout/knowabout';
import { AddressdetailPage } from '../pages/addressdetail/addressdetail';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { EnterdetailPage } from '../pages/enterdetail/enterdetail';
import { MjeventPage } from '../pages/mjevent/mjevent';
import { PaymentPage } from '../pages/payment/payment';
import { ViewallPage } from '../pages/viewall/viewall';
import { WeofferPage } from '../pages/weoffer/weoffer';
import { TrendingdetailPage } from '../pages/trendingdetail/trendingdetail';
import { ProeventdetailPage } from '../pages/proeventdetail/proeventdetail';
import { OrderreviewPage } from '../pages/orderreview/orderreview';
import { StartPage } from '../pages/start/start';
import { LanguagePage } from '../pages/language/language';
import { LocationPage } from '../pages/location/location';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { DecorationPage } from '../pages/decoration/decoration';
import { BalloonpricePage } from '../pages/balloonprice/balloonprice';
import { BalloondetailPage } from '../pages/balloondetail/balloondetail';
import { OrderPage } from '../pages/order/order';
import { TrackorderPage } from '../pages/trackorder/trackorder';
import { ChatPage } from '../pages/chat/chat';
import { ProplannerPage } from '../pages/proplanner/proplanner';
import { IndividualplannerPage } from '../pages/individualplanner/individualplanner';
import { EventcompaniesPage } from '../pages/eventcompanies/eventcompanies';
import { ProfilePage } from '../pages/profile/profile';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { RetrivepasswordPage } from '../pages/retrivepassword/retrivepassword';
import { EmailPage } from '../pages/email/email';
import { PhonePage } from '../pages/phone/phone';
import { CartPage } from '../pages/cart/cart';
import { NotificationPage } from '../pages/notification/notification';
import { AccountPage } from '../pages/account/account';
import { ContactusPage } from '../pages/contactus/contactus';
import { HistoryPage } from '../pages/history/history';
import { AboutorderPage } from '../pages/aboutorder/aboutorder';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { Translator } from '../pipes/eigonic/eigonic';

import { StoresPage } from '../pages/Stores/stores';
import { LangBundle } from '../app/langBundle';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LanguagePage;
//
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var lang = localStorage.getItem('lang');
      if(lang){

        Translator.init(LangBundle.MSG, lang);
      } else {
        Translator.init(LangBundle.MSG, 'ar');
      }
      if(localStorage.getItem('user_id')){
        this.rootPage = TabsPage;
      }
    });
  }
}
