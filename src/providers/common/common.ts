import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController,LoadingController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Injectable()
export class CommonProvider {  
  
    public base_url:string = 'http://localhost:8000/api/';
    dPipe = new DatePipe('en-US');
    // moment: moment.Moment = moment(new Date(), 'yyyy-MM-dd');
   // base_url = 'http://mynewapp-env.mpa9eqyg3u.eu-central-1.elasticbeanstalk.com/api/';

  constructor(   
    public http: Http,
    public toastCtrl: ToastController,
    public loadingCtrl : LoadingController
  ) {
    console.log('Hello CommonProvider Provider');

  // alert('fg');
  }


  currentdate(){
    var today:any =  this.dPipe.transform(new Date(), 'yyyy-MM-dd');
    return today;
  }

  tConvert (time) {
      // Check correct time format and split into components
      time = time.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    }

    printRating(rating) {

    let max_rate = 5;
    let rounded_rating = Math.round(rating);
    let array_stars = new Array(max_rate);
    array_stars.fill('star-outline');

    for (let i = 0; i < rounded_rating; i++) {
      array_stars[i] = 'star';

      if (i === rounded_rating - 1 && rating % 1 !== 0) {
        array_stars[i] = 'star-half';
      }
    }

    return array_stars;
  }
  
  days_prior(req_date){
    return moment(req_date).diff(moment(this.dPipe.transform(new Date(), 'yyyy-MM-dd')), 'days')
  }

  add_days(days){
    var newDate = moment().add(days, 'days');
    return this.dPipe.transform(newDate, 'yyyy-MM-dd');
  }
  
  simpleToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  toastWithOption(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: 'Close',
      position: 'middle'
    });
    toast.present();
  }

  serializeObj(obj) {
			var result = [];
			for (var property in obj)
				result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
			return result.join("&");
	}
	
}
