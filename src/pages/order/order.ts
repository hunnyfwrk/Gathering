import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Nav } from 'ionic-angular';
import { BalloondetailPage } from '../balloondetail/balloondetail';
import { CartPage } from '../cart/cart';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { googlemaps } from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

  declare var google: any;

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  geocoder: any;
  user_id: string;
  currentdate: any; stars: any[]; rate: number; lang: any = 'en'; product: any; data: any = '';
  //maps autocomplete
  autocompleteItems: any;
  autocomplete: any ={ query : ''};
  acService:any;
    map: any;

  @ViewChild('map') mapElement: ElementRef;
  currentLongitude: number;
  currentLatitude: number;
  placesService: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commonprovider: CommonProvider,
    public http: Http,
    public nav: Nav,
    public loadingCtrl: LoadingController,
    public geolocation : Geolocation
  ) {
    
    this.user_id = localStorage.getItem('user_id');
    this.lang = localStorage.getItem('lang');
    var proId = this.navParams.get("product_id");
    if (proId != null) {
      this.productDetails(proId);
    }
    
    // this.getlocation1()
    
  }

  // ngOnInit() {
  //   this.acService = new google.maps.places.AutocompleteService();;        
  //   this.autocompleteItems = [];
  //   this.data = {
  //   query: ''
  //   };        
  // }
    ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder();
    this.autocompleteItems = [];
    this.data = {
      query: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  

  // getLocation() {

  //   this.geolocation.getCurrentPosition().then(res => {
  //     console.log(res.coords.latitude);
  //     console.log(res);
  //     console.log(res.coords.longitude)
     
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   })
  // }

  updateSearch() {
    console.log('modal > updateSearch');
  
    if (this.data.query == '') {
        console.log(this.data.query )
      this.autocompleteItems = [];
      return;
    }
      console.log(this.data.query )
    let self = this;
    let config = {
      //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.data.query,
      componentRestrictions: {}
    }
    this.acService.getPlacePredictions(config, function (predictions, status) {
      console.log('modal > getPlacePredictions > status > ', status);
      
      self.autocompleteItems = [];
      if (status != "ZERO_RESULTS") {
        predictions.forEach(function (prediction) {
          self.autocompleteItems.push(prediction);
        });
      } else {
        return false;
      }

    });
  }

  chooseItem(item){
      this.autocompleteItems = [];
      this.data.query = item.description;
    
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.data.query+'&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
      this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data.results[0].geometry.location);
                this.data.location = data.results[0].geometry.location;
      })
  }


  productDetails(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var postdata = {
      id: id
    }
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'products/singleproduct', postdata, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          Loader.dismiss()
          if (data.status == true) {
            this.product = data.data;
            this.rate = parseInt(this.product.rating);
            let date = this.commonprovider.add_days(this.product.days_prior);
            console.log(date);
            this.data = {
              myDate : date,
              qty : 1
            }
            this.currentdate = date;
            console.log(this.rate)
            this.stars = this.commonprovider.printRating(this.product.rating);

          } else {
            this.commonprovider.simpleToast("Could not load products...")
          }

        }, err => {
          // this.commonprovider.simpleToast("Oops! Something went wrong!")
          Loader.dismiss()
        })
    })
  }

  getdate(date){
    console.log(date)
    var days = JSON.stringify(this.commonprovider.days_prior(date));
    console.log(days)
    console.log(this.product.days_prior);
  }
  gettime(time){
    console.log(time);
    this.data.myTime = this.commonprovider.tConvert(time);
    console.log(this.data.myTime);
  }
  increase() {
    console.log( this.data.qty);
     this.data.qty = this.data.qty + 1
  }
  decrease() {
    if (this.data.qty > 1) {
     this.data.qty = this.data.qty - 1;
    }
  }

  addTocart(formData){
    if(this.user_id){

   
    console.log(formData);
    console.log(this.data.location)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    if(formData.value.comments == undefined){
      formData.value.comments = '';
    }
    var postdata = {
          userid : this.user_id,
          productid : this.product._id,
          vendorid : this.product.vendorid,
          time : this.data.myTime,
          date : this.data.myDate,
          comments : formData.value.comments,
          quantity : formData.value.qty,
          location :  this.data.query
          // location :  this.data.location
    }
    console.log(postdata)
    // return false;
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })

    Loader.present().then(() => {
      this.http.post(this.commonprovider.base_url + 'carts/addtocart', postdata, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          Loader.dismiss();
          if(data.status == true){
            this.commonprovider.simpleToast(data.message);
            this.navCtrl.push(CartPage);
          } else {
            this.commonprovider.simpleToast(data.message);
          }
           
        },
        err=> {
          Loader.dismiss();
        })
    })
     } else {
       this.commonprovider.simpleToast('Please login to add item in your cart')
     }
  }



  ////// get location //////
  getlocation1() {
  
  var aa = this;
   return new Promise((resolve, reject) => {
    this.geolocation.getCurrentPosition().then(res => {
    
    this.currentLatitude =  res.coords.latitude
    this.currentLongitude = res.coords.longitude

     let latLng = new google.maps.LatLng(this.currentLatitude,this.currentLongitude); 
    this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
       if (status == google.maps.GeocoderStatus.OK) {
         if (results[1]) {
           this.autocomplete.query = results[1].formatted_address;
         }
       }

     })
     )
     let mapOptions = {
       center: latLng,
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     this.map = new google.maps.Map(aa.mapElement.nativeElement, mapOptions);
     var marker = new google.maps.Marker({
       position: latLng,
       draggable: true,
       map: this.map,
     });

     google.maps.event.addListener(marker, 'dragend', ((marker) => {
       var latLng = marker.latLng;
       this.currentLatitude = latLng.lat();
       this.currentLongitude = latLng.lng();
       console.log(this.currentLatitude)
       console.log(this.currentLongitude)
       let latLong = new google.maps.LatLng(this.currentLatitude, this.currentLongitude);
       this.geocoder.geocode({ 'latLng': latLong }, ((results, status) => {
         console.log(results);
         if (status == google.maps.GeocoderStatus.OK) {
           if (results[1]) {
             this.autocomplete.query = results[1].formatted_address;
             this.data.query = this.autocomplete.query;
             console.log(this.autocomplete.query)
           }
         }

       })
       )
     }));



      ///

    }).catch(reject);
  });
  }
  balloondetail() {
    this.navCtrl.push(BalloondetailPage);
  }

}
