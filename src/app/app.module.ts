import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WishlistPage } from '../pages/wishlist/wishlist';
import { CartPage } from '../pages/cart/cart';
import { HomePage } from '../pages/home/home';
import { AddressdetailPage } from '../pages/addressdetail/addressdetail';
import { TabsPage } from '../pages/tabs/tabs';
import { KnowaboutPage } from '../pages/knowabout/knowabout';
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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LanguagePage } from '../pages/language/language';
import { LocationPage } from '../pages/location/location';
import { StoresPage } from '../pages/Stores/stores';
import { ServicePage } from '../pages/service/service';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { DecorationPage } from '../pages/decoration/decoration';
import { BalloonpricePage } from '../pages/balloonprice/balloonprice';
import { BalloondetailPage } from '../pages/balloondetail/balloondetail';
import { OrderPage } from '../pages/order/order';
import { ChatPage } from '../pages/chat/chat';
import { ProplannerPage } from '../pages/proplanner/proplanner';
import { IndividualplannerPage } from '../pages/individualplanner/individualplanner';
import { EventcompaniesPage } from '../pages/eventcompanies/eventcompanies';
import { ProfilePage } from '../pages/profile/profile';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { RetrivepasswordPage } from '../pages/retrivepassword/retrivepassword';
import { EmailPage } from '../pages/email/email';
import { PhonePage } from '../pages/phone/phone';
import { TrackorderPage } from '../pages/trackorder/trackorder';
import { AccountPage } from '../pages/account/account';
import { ContactusPage } from '../pages/contactus/contactus';
import { HistoryPage } from '../pages/history/history';
import { TermsPage } from '../pages/terms/terms';
import { NotificationPage } from '../pages/notification/notification';
import { AboutorderPage } from '../pages/aboutorder/aboutorder';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { CommonProvider } from '../providers/common/common';
import { HttpModule } from '@angular/http';
import { Translator } from '../pipes/eigonic/eigonic';
import { LangBundle } from '../app/langBundle';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { IonRatingComponent } from '../components/ion-rating/ion-rating';

@NgModule({
  declarations: [
    MyApp,
    WishlistPage,
    EnterdetailPage,
    AddressdetailPage,
    OrderreviewPage,
    ConfirmationPage,
    KnowaboutPage,
    ViewallPage,
    ProeventdetailPage,
    MjeventPage,
    WeofferPage,
    PaymentPage,
    TrendingdetailPage,
    NotificationPage,
    CartPage,
    HomePage,
    TabsPage,
    StartPage,
    LanguagePage,
    LocationPage,
    ServicePage,
    StoresPage,
    EntertainmentPage,
    DecorationPage,
    BalloonpricePage,
    BalloondetailPage,
    OrderPage,
    ChatPage,
    TrackorderPage,
    ProplannerPage,
    IndividualplannerPage,
    EventcompaniesPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    RetrivepasswordPage,
    EmailPage,
    PhonePage,
    AccountPage,
    ContactusPage,
    HistoryPage,
    AboutorderPage,
    ChangepasswordPage,
    Translator,
    TermsPage,
    IonRatingComponent,
    EnterdetailPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WishlistPage,
    AddressdetailPage,
    OrderreviewPage,
    ConfirmationPage,
    KnowaboutPage,
    ViewallPage,
    ProeventdetailPage,
    MjeventPage,
    WeofferPage,
    PaymentPage,
    TrendingdetailPage,
    NotificationPage,
    CartPage,
    HomePage,
    TabsPage,
    StartPage,
    LanguagePage,
    TrackorderPage,
    LocationPage,
    ServicePage,
    StoresPage,
    EntertainmentPage,
    DecorationPage,
    BalloonpricePage,
    BalloondetailPage,
    OrderPage,
    ChatPage,
    ProplannerPage,
    IndividualplannerPage,
    EventcompaniesPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    RetrivepasswordPage,
    EmailPage,
    PhonePage,
    AccountPage,
    ContactusPage,
    HistoryPage,
    AboutorderPage,
    ChangepasswordPage,
    TermsPage,
    IonRatingComponent,
    EnterdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
    Geolocation,
    Camera,
  ]
})
export class AppModule {}
