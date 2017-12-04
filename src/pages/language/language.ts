import { Component,NgModule  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { Translator } from '../../pipes/eigonic/eigonic';
import { LangBundle } from '../../app/langBundle';
import { Pipe, PipeTransform } from '@angular/core';
/**
 * Generated class for the LanguagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
  
})
export class LanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }

  location(lang) {
    console.log(lang)
    localStorage.setItem('lang',lang);
    Translator.switchLang(lang);
    this.navCtrl.push(LocationPage);
  }

}
