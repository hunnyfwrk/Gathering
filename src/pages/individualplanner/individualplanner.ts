import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { ProplannerPage } from '../proplanner/proplanner';
import { CommonProvider } from '../../providers/common/common'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the IndividualplannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-individualplanner',
  templateUrl: 'individualplanner.html',
})
export class IndividualplannerPage {
  searchbars: boolean;
  all_data: any; length:any = null;
  planners; myInput;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http : Http,
    public commonprovider : CommonProvider,
    public loadingCtrl : LoadingController,
    public formBuilder : FormBuilder
  ) {
      this.getIndiv_planner();
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
    console.log('ionViewDidLoad IndividualplannerPage');
  }

  proplanner() {
    this.navCtrl.push(ProplannerPage);
  }

  getIndiv_planner() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    })
    Loader.present().then(() => {

      this.http.get(this.commonprovider.base_url + 'users/all_individual', options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
           this.planners = [];
           this.all_data = data;
          var city = localStorage.getItem("city")
          for(let i in data){
              for(let j in data[i].city){
                  if(data[i].city[j] == city){
                      this.planners.push(data[i]);
                  }
              }
          }
            this.all_data =  this.planners;
          
          if(this.planners.length == 0){
            this.commonprovider.simpleToast("Not available in your selected location.")
          }
         
          Loader.dismiss()
        }, err => {
          Loader.dismiss()
        })
    })
  }

 showsearch(value){
    if(value == true){
this.searchbars=false;
    }else{
      this.searchbars=true;
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
       // alert(v.org_name.toLowerCase().indexOf(q.toLowerCase()));
        if (v.org_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
           
           
          return true;
        }
        
        return false;
      } 
    });
 
  }

}
