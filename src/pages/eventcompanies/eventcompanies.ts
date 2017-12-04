import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { ProplannerPage } from '../proplanner/proplanner';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


/**
 * Generated class for the EventcompaniesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventcompanies',
  templateUrl: 'eventcompanies.html',
})
export class EventcompaniesPage {
  length: any = null;
  searchbar: boolean;
  all_data: any;
  planners;
  constructor(
     public navCtrl: NavController, 
    public navParams: NavParams, 
    public http : Http,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
      public formBuilder : FormBuilder,
  ) {
    this.get_event_comp();
  }
  searchterm: {
    search: any,
  } = {
    search: '',
  }
  search: FormGroup;
  ngOnInit(): any {
    this.search = this.formBuilder.group({
      'search': [''],
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventcompaniesPage');
  }

  proplanner() {
    this.navCtrl.push(ProplannerPage);
  }

  get_event_comp() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    Loader.present().then(() => {

      this.http.get(this.commonprovider.base_url + 'users/all_planning_comp', options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.planners = [];
          var city = localStorage.getItem("city")
          for (let i in data) {
            for (let j in data[i].city) {
              if (data[i].city[j] == city) {
                this.planners.push(data[i]);
              }
            }
          }
          this.all_data = this.planners 
          if (this.planners.length == 0) {
            this.commonprovider.simpleToast("Not available in your selected location.")
          }

          Loader.dismiss()
        }, err => {
          Loader.dismiss();
           this.commonprovider.simpleToast("Something went wrong. Please try again");
        });

    })
  }


  showsearch(value){
    if(value == true){
this.searchbar=false;
    }else{
      this.searchbar=true;
    }
    
  }
  
    getItems(searchbar){
    console.log('dd')
      this.length = null;
    console.log(searchbar);
    //this.events = this.eventss;
    this.planners = this.all_data
   // console.log(searchbar.srcElement.value);
    var q = searchbar;
    if (!q) {
      return;
    }


    this.planners = this.planners.filter((v) => {

      if (v.org_name && q) {
        if (v.org_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        
          return true;
        } 

        return false;
      }
    });
 
  }
    
}
