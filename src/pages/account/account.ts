import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Events, LoadingController, ActionSheetController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { ProfilePage } from '../profile/profile';
import { ChatPage } from '../chat/chat';
import { StartPage } from '../start/start';
import { ContactusPage } from '../contactus/contactus';
import { HistoryPage } from '../history/history';
import { AboutorderPage } from '../aboutorder/aboutorder';
import { ChangepasswordPage } from '../changepassword/changepassword'; 
import { LanguagePage } from '../language/language';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  firstname;lastname;
  srcImage:any=null;imgTosend:any = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nav : Nav,
    public events : Events,
    public actionSheetCtrl : ActionSheetController,
    public camera : Camera,
    public commonprovider : CommonProvider,
    public http : Http,
    public loadingCtrl :  LoadingController
  ) {
    var userdata:any = JSON.parse(localStorage.getItem('userdata'));
    this.events.subscribe('userdata', (res)=>{
       userdata = JSON.parse(localStorage.getItem('userdata'));
    })
    this.firstname = userdata.firstname;
    this.lastname = userdata.lastname;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }



  CameraAction() {
    console.log('opening');
   // this.srcImage = 'http://i0.kym-cdn.com/photos/images/original/000/164/141/1313714621002.png';
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          // this.Loader.present();
          const options: CameraOptions = {
            quality: 8,
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            this.imgTosend = imageUri;
            // this.Loader.dismiss();

          }, (err) => {
            alert(JSON.stringify(err));
            // this.Loader.dismiss();
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log("Gallery Clicked");
          //alert("get Picture")
          // this.Loader.present();
          const options: CameraOptions = {
            quality: 8,
            sourceType: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageData;
            this.imgTosend = imageData;
            //	this.Loader.dismiss();

          }, (err) => {
            //this.Loader.dismiss();
            //alert(JSON.stringify(err));

          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          //  actionsheet.dismiss();

        }
      }]
    });

    actionsheet.present();
  }


  changeImage(){
       
  }



  back() {
    this.navCtrl.pop();
    // push(SigninPage);
  }
  profile() {
    this.navCtrl.push(ProfilePage);
  }

  chat() {
    this.navCtrl.push(ChatPage);
  }

  notification() {
    this.navCtrl.push(NotificationPage);
  }

  contact() {
    this.navCtrl.push(ContactusPage);
  }

  aboutorder() {
    this.navCtrl.push(AboutorderPage);
  }

  history() {
    this.navCtrl.push(HistoryPage);
  }

  ChangePasswordpage(){
    this.navCtrl.push(ChangepasswordPage);
  }
  logout(){
    var email = localStorage.getItem('email');
   var remember = localStorage.getItem('isRemember');
    localStorage.clear();
    if(remember != null){
       localStorage.setItem('email',email);
       localStorage.setItem('isRemember',remember);
    };
    this.nav.setRoot(LanguagePage);
    this.nav.popToRoot();
    // this.navCtrl.push(SigninPage);
  }
}
