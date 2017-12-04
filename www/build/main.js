webpackJsonp([41],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the EigonicPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var Translator = Translator_1 = (function () {
    function Translator() {
    }
    Translator.init = function (langBundle, fallbackLang, currentLang) {
        Translator_1.langBundle = langBundle;
        Translator_1.currentLang = currentLang;
        Translator_1.fallbackLang = fallbackLang;
    };
    Translator.switchLang = function (lang) {
        Translator_1.currentLang = lang;
    };
    Translator.prototype.transform = function (value) {
        // If there is no selected language, use the default.
        if (Translator_1.currentLang === null || Translator_1.currentLang === undefined)
            Translator_1.currentLang = Translator_1.fallbackLang;
        // get the translation from the language bundle
        var transVal = Translator_1.langBundle[Translator_1.currentLang][value];
        // if there is no translation, then return the orignal keyword
        if (transVal === null || transVal === undefined)
            transVal = value;
        return transVal;
    };
    return Translator;
}());
Translator = Translator_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'translate' })
], Translator);

var Translator_1;
//# sourceMappingURL=eigonic.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
    };
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\history\history.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n\n      <ion-title>History</ion-title>\n\n      <button ion-button class="back" style="float: right;">\n          <ion-icon ios="ios-search" md="md-search"></ion-icon>\n        </button>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <div class="wishlist_box">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/image/1.jpg">\n            </ion-thumbnail>\n            <h2>Balloon 1</h2>\n            <p>Delivered</p>\n            <button ion-button clear item-end class="price">8/31/2017</button>\n          </ion-item>\n      \n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/image/6.jpg">\n            </ion-thumbnail>\n            <h2>Balloon 2</h2>\n            <p>Delivered</p>\n            <button ion-button clear item-end class="price">8/31/2017</button>\n          </ion-item>\n      \n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/image/7.jpg">\n            </ion-thumbnail>\n            <h2>Balloon 3</h2>\n            <p>Delivered</p>\n            <button ion-button clear item-end class="price">8/31/2017</button>\n          </ion-item>\n      \n        </ion-list>\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\history\history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecorationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balloonprice_balloonprice__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DecorationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DecorationPage = (function () {
    function DecorationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DecorationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DecorationPage');
    };
    DecorationPage.prototype.service1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServicePage */]);
    };
    DecorationPage.prototype.balloonprice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__balloonprice_balloonprice__["a" /* BalloonpricePage */]);
    };
    return DecorationPage;
}());
DecorationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-decoration',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\decoration\decoration.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>Decorations</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n  <div class="card_box">\n  \n    <ion-card  (click)="balloonprice()">\n      <ion-card-content>\n          <div class="pick">\n              <img src="assets/image/12.png">\n              </div>\n       <span>Balloons</span>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-content>\n          <div class="pick">\n              <img src="assets/image/13.png">\n              </div>\n      <span>Backdrops</span>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-content>\n        <div class="pick">\n          <img src="assets/image/14.png">\n          </div>\n          <span>Flowers</span>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-content>\n          <div class="pick">\n              <img src="assets/image/15.png">\n              </div>\n       <span>Flooring</span>\n      </ion-card-content>\n    </ion-card>\n  \n    </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\decoration\decoration.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], DecorationPage);

//# sourceMappingURL=decoration.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntertainmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balloonprice_balloonprice__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EntertainmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EntertainmentPage = (function () {
    function EntertainmentPage(navCtrl, navParams, commonprovider, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.lang = localStorage.getItem('lang');
        this.type = this.navParams.get('type');
        this.category_name = this.navParams.get('name');
        this.category_ar_name = this.navParams.get('ar_name');
        var categoryid = this.navParams.get('categoryid');
        console.log(categoryid);
        this.allsubCategories(categoryid);
    }
    EntertainmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntertainmentPage');
    };
    EntertainmentPage.prototype.allsubCategories = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            categoryid: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'subcategories/byCategory', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    _this.subcategories = data.data;
                    if (_this.subcategories.length == 0) {
                        _this.commonprovider.simpleToast("Nothing in this category yet. Try other categories :)");
                    }
                }
                else {
                    _this.commonprovider.simpleToast("Could not load subcategories...");
                }
                Loader.dismiss();
            }, function (err) {
                Loader.dismiss();
            });
        });
    };
    EntertainmentPage.prototype.productsPage = function (id, name, ar_name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__balloonprice_balloonprice__["a" /* BalloonpricePage */], { id: id, name: name, ar_name: ar_name, type: this.type });
    };
    EntertainmentPage.prototype.service = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServicePage */]);
    };
    return EntertainmentPage;
}());
EntertainmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-entertainment',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\entertainment\entertainment.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n\n    <ion-title *ngIf=\'lang == "en"\'>{{category_name}}</ion-title>\n    <ion-title *ngIf=\'lang == "ar"\'>{{category_ar_name}}</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n<div class="card_box">\n\n  <ion-card *ngFor=\'let sub of subcategories\'>\n    <ion-card-content (click)="productsPage(sub._id,sub.name,sub.ar_name)">\n        <div class="pick">\n            <img [src]="sub.image">\n            </div>\n     <span *ngIf=\'lang == "en"\'>  {{sub.name}}  </span>\n     <span *ngIf=\'lang == "ar"\'>  {{sub.ar_name}}  </span>\n    </ion-card-content>\n  </ion-card>\n\n  <!--<ion-card>\n    <ion-card-content>\n        <div class="pick">\n            <img src="assets/image/10.png">\n            </div>\n    <span> Clowns</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <div class="pick">\n        <img src="assets/image/10.png">\n        </div>\n        <span> Clowns</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n        <div class="pick">\n            <img src="assets/image/11.png" style="width: 32px;float: none; margin: auto;">\n            </div>\n     <span>Traditional Dancers</span>\n    </ion-card-content>\n  </ion-card>-->\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\entertainment\entertainment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], EntertainmentPage);

//# sourceMappingURL=entertainment.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balloondetail_balloondetail__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, commonprovider, http, nav, loadingCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.http = http;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.lang = 'en';
        this.data = '';
        this.autocomplete = { query: '' };
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
    OrderPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.data = {
            query: ''
        };
    };
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    // getLocation() {
    //   this.geolocation.getCurrentPosition().then(res => {
    //     console.log(res.coords.latitude);
    //     console.log(res);
    //     console.log(res.coords.longitude)
    //   }).catch((error) => {
    //     console.log('Error getting location', error);
    //   })
    // }
    OrderPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.data.query == '') {
            console.log(this.data.query);
            this.autocompleteItems = [];
            return;
        }
        console.log(this.data.query);
        var self = this;
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.data.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            if (status != "ZERO_RESULTS") {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                });
            }
            else {
                return false;
            }
        });
    };
    OrderPage.prototype.chooseItem = function (item) {
        var _this = this;
        this.autocompleteItems = [];
        this.data.query = item.description;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.data.query + '&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data.results[0].geometry.location);
            _this.data.location = data.results[0].geometry.location;
        });
    };
    OrderPage.prototype.productDetails = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            id: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'products/singleproduct', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.product = data.data;
                    _this.rate = parseInt(_this.product.rating);
                    var date = _this.commonprovider.add_days(_this.product.days_prior);
                    console.log(date);
                    _this.data = {
                        myDate: date,
                        qty: 1
                    };
                    _this.currentdate = date;
                    console.log(_this.rate);
                    _this.stars = _this.commonprovider.printRating(_this.product.rating);
                }
                else {
                    _this.commonprovider.simpleToast("Could not load products...");
                }
            }, function (err) {
                // this.commonprovider.simpleToast("Oops! Something went wrong!")
                Loader.dismiss();
            });
        });
    };
    OrderPage.prototype.getdate = function (date) {
        console.log(date);
        var days = JSON.stringify(this.commonprovider.days_prior(date));
        console.log(days);
        console.log(this.product.days_prior);
    };
    OrderPage.prototype.gettime = function (time) {
        console.log(time);
        this.data.myTime = this.commonprovider.tConvert(time);
        console.log(this.data.myTime);
    };
    OrderPage.prototype.increase = function () {
        console.log(this.data.qty);
        this.data.qty = this.data.qty + 1;
    };
    OrderPage.prototype.decrease = function () {
        if (this.data.qty > 1) {
            this.data.qty = this.data.qty - 1;
        }
    };
    OrderPage.prototype.addTocart = function (formData) {
        var _this = this;
        if (this.user_id) {
            console.log(formData);
            console.log(this.data.location);
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            if (formData.value.comments == undefined) {
                formData.value.comments = '';
            }
            var postdata = {
                userid: this.user_id,
                productid: this.product._id,
                vendorid: this.product.vendorid,
                time: this.data.myTime,
                date: this.data.myDate,
                comments: formData.value.comments,
                quantity: formData.value.qty,
                location: this.data.query
                // location :  this.data.location
            };
            console.log(postdata);
            // return false;
            var Loader = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            Loader.present().then(function () {
                _this.http.post(_this.commonprovider.base_url + 'carts/addtocart', postdata, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    Loader.dismiss();
                    if (data.status == true) {
                        _this.commonprovider.simpleToast(data.message);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
                    }
                    else {
                        _this.commonprovider.simpleToast(data.message);
                    }
                }, function (err) {
                    Loader.dismiss();
                });
            });
        }
        else {
            this.commonprovider.simpleToast('Please login to add item in your cart');
        }
    };
    ////// get location //////
    OrderPage.prototype.getlocation1 = function () {
        var _this = this;
        var aa = this;
        return new Promise(function (resolve, reject) {
            _this.geolocation.getCurrentPosition().then(function (res) {
                _this.currentLatitude = res.coords.latitude;
                _this.currentLongitude = res.coords.longitude;
                var latLng = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
                _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            _this.autocomplete.query = results[1].formatted_address;
                        }
                    }
                }));
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(aa.mapElement.nativeElement, mapOptions);
                var marker = new google.maps.Marker({
                    position: latLng,
                    draggable: true,
                    map: _this.map,
                });
                google.maps.event.addListener(marker, 'dragend', (function (marker) {
                    var latLng = marker.latLng;
                    _this.currentLatitude = latLng.lat();
                    _this.currentLongitude = latLng.lng();
                    console.log(_this.currentLatitude);
                    console.log(_this.currentLongitude);
                    var latLong = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
                    _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                        console.log(results);
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                _this.autocomplete.query = results[1].formatted_address;
                                _this.data.query = _this.autocomplete.query;
                                console.log(_this.autocomplete.query);
                            }
                        }
                    }));
                }));
                ///
            }).catch(reject);
        });
    };
    OrderPage.prototype.balloondetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__balloondetail_balloondetail__["a" /* BalloondetailPage */]);
    };
    return OrderPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], OrderPage.prototype, "mapElement", void 0);
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\order\order.html"*/'<ion-header class="main_header" *ngIf=\'this?.product\'>\n  <ion-navbar>\n    <ion-title *ngIf=\'lang == "en"\'>{{product.name}}</ion-title>\n    <ion-title *ngIf=\'lang == "ar"\'>{{product.ar_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!--<ion-content *ngIf=\'this?.product\' padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">-->\n\n\n<ion-content *ngIf=\'this?.product\' padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n\n  <div class="order_box">\n    <div class="image">\n      <img [src]="product.image">\n    </div>\n    <div class="content1">\n      <div class="raiting">\n        <ul>\n          <li>\n            <ion-icon ios="ios-star" md="md-star"></ion-icon>\n          </li>\n          <li>\n            <ion-icon ios="ios-star" md="md-star"></ion-icon>\n          </li>\n          <li>\n            <ion-icon ios="ios-star" md="md-star"></ion-icon>\n          </li>\n          <li>\n            <ion-icon ios="ios-star" md="md-star"></ion-icon>\n          </li>\n          <li>\n            <ion-icon ios="ios-star" md="md-star"></ion-icon>\n          </li>\n        </ul>\n      </div>\n      <p>{{ \'vendor\' | translate}} </p>\n      <p>{{product.vendorname}}</p>\n      <span>{{ \'price\' | translate}} : {{product.price}}SR</span>\n    </div>\n    <div class="spacer" style="height: 2vh;float:left;width:100%;"></div>\n\n    <div class="order_input">\n      <form  #orderForm="ngForm" novalidate>\n      <ion-grid style="padding:0px;">\n\n        <ion-row>\n          <ion-col col-4>\n            <div class="label1">Quantity</div>\n          </ion-col>\n          <ion-col col-8>\n            <!-- <div class="input_box">\n                      <ion-input type="date"></ion-input>\n                    </div> -->\n            <div class="main_box">\n\n              <div class="min">\n                <button ion-button small type="button" (click)="decrease()"><ion-icon ios="ios-remove" md="md-remove"></ion-icon></button>\n              </div>\n              <div class="quantity_input">\n                <ion-input type="text" name=\'qty\' [(ngModel)]="data.qty" style="text-align:center;" placeholder="1" #qty=\'ngModel\'></ion-input>\n              </div>\n              <div class="plus">\n                <button ion-button small type="button" (click)="increase()"><ion-icon ios="ios-add" md="md-add"></ion-icon></button>\n              </div>\n\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <div class="label1">Time</div>\n          </ion-col>\n          <ion-col col-8>\n            <div class="input_box">\n              <!--<ion-input style="text-align:center;" type="time" placeholder="00:00"></ion-input>-->\n                <ion-datetime displayFormat="h:mm a" [(ngModel)]="data.myTime"  pickerFormat="h:mm a" name=\'time\' (ionChange)="gettime(data.myTime)" required #time="ngModel"> </ion-datetime>\n                 </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <div class="label1">Date</div>\n          </ion-col>\n          <ion-col col-8>\n            <div class="input_box">\n                <ion-datetime displayFormat="MM/DD/YYYY" max="2050-12-31" placeholder="mm/dd/yyyy" [(ngModel)]="data.myDate" name=\'date\' pickerFormat="MMM-DD-YYYY" min="{{currentdate}}" (ionChange)="getdate(data.myDate)" required #date="ngModel"> </ion-datetime>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <div class="label1">Comments</div>\n          </ion-col>\n          <ion-col col-8>\n            <div class="input_box">\n              <ion-input type="text" [(ngModel)]="data.comments" name="comments" placeholder="Ex: No purple balloons" #comments="ngModel"></ion-input>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <div class="label1">Location</div>\n          </ion-col>\n          <ion-col col-8>\n            <div class="input_box position">\n               <ion-input class="location_sss" type="text" name="query" [(ngModel)]="data.query" (input)="updateSearch()" #query="ngModel" required></ion-input>\n              <!--#query="ngModel"-->\n              <ion-icon (click)="getlocation1()" ios="ios-pin" md="md-pin" class="location"></ion-icon>\n            </div>\n            <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">{{ item.description }} </ion-item>\n          </ion-col>\n        </ion-row>\n\n         <div class="map" #map id="map"  style="height:20vh;position: initial;float:left;width:100%;"></div> \n\n      </ion-grid>\n\n      <div class="spacer" style="height: 2vh;float:left;width:100%;"></div>\n\n      <div class="language_btn">\n\n        <button type="submit" (click)="addTocart(orderForm)"  [disabled]=\'!orderForm.valid\' ion-button>Add to cart</button>\n        <!--location()-->\n\n      </div>\n      </form>\n    </div>\n\n    <div style="height:3vh;float:left;width:100%;"></div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConfirmationPage = (function () {
    function ConfirmationPage(navCtrl, navParams, commonprovider, loadingCtrl, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.events = events;
        this.ordernumber = '';
        this.ordernumber = localStorage.getItem('ordernumber');
        this.deleteCart();
    }
    ConfirmationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmationPage');
        this.ordernumber = localStorage.getItem('ordernumber');
        this.deleteCart();
    };
    ConfirmationPage.prototype.deleteCart = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var obj = {
            userid: localStorage.getItem('user_id'),
        };
        var serialised = this.commonprovider.serializeObj(obj);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        this.http.post(this.commonprovider.base_url + 'carts/deletecart', obj, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
        });
    };
    ConfirmationPage.prototype.payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    return ConfirmationPage;
}());
ConfirmationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirmation',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\confirmation\confirmation.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>Confirmation</ion-title>\n\n      <ion-buttons end>\n        <button ion-button right class="back">\n       Done\n      </button>\n      </ion-buttons>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n    \n    <div class="spacer" style="height:2vh;float:left;width:100%;"></div>\n\n    <div class="logo_box">\n      <img src="assets/image/logo2.png">\n    </div>\n\n    <div class="order_number">\n      <span>Order Number</span>\n      <h3>{{this?.ordernumber}}</h3>\n    </div>\n\n    <div class="payment_conplete">\n      <h2>Thank You !</h2>\n      <h5>Your payment is complete</h5>\n     <div class="center"><span><img src="assets/image/check.png"></span></div>\n      <p>We\'ve sent you an email with all the details of your order.</p>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\confirmation\confirmation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], ConfirmationPage);

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_terms__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, commonprovider, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.data = '';
        this.hasAgreed = false;
        this.active = '';
        console.log(this.hasAgreed);
    }
    SignupPage.prototype.agree = function (yes) {
        this.hasAgreed = yes;
        this.active = 'active';
    };
    SignupPage.prototype.readTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__terms_terms__["a" /* TermsPage */]);
    };
    SignupPage.prototype.notAgreed = function () {
        this.commonprovider.toastWithOption('Please hit "I agree" button before proceeding.');
    };
    SignupPage.prototype.register = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (formdata.value.password.indexOf(' ') >= 0) {
            this.commonprovider.simpleToast('Space not allowed in password');
        }
        else {
            if (formdata.value.password != formdata.value.cpassword) {
                this.commonprovider.simpleToast('Passwords do not match.');
            }
            else {
                var gender = formdata.value.gender;
                if (gender == undefined) {
                    gender = '';
                }
                var name = formdata.value.name.split(' ');
                var firstname = name[0];
                if (name[1] != undefined) {
                    var lastname = name[1];
                }
                else {
                    this.commonprovider.simpleToast('Please write your full name');
                    return false;
                }
                var postdata = {
                    firstname: firstname,
                    lastname: lastname,
                    phone: formdata.value.number,
                    email: formdata.value.email.toLowerCase(),
                    username: formdata.value.email,
                    password: formdata.value.password,
                    gender: gender,
                    role: 'user',
                    status: '1',
                };
                console.log(postdata);
                var Loader = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    showBackdrop: false,
                    cssClass: 'loader'
                });
                Loader.present().then(function () {
                    _this.http.post(_this.commonprovider.base_url + 'users' + '', postdata, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        Loader.dismiss();
                        if (data.status == true) {
                            _this.commonprovider.simpleToast('Registration successfull.');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
                        }
                        else {
                            _this.commonprovider.simpleToast(data.message);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                });
            }
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\signup\signup.html"*/'<ion-header class="main_header">\n\n  <ion-navbar>\n\n    <ion-title> {{ \'signup\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="signup_box">\n    <form #signupForm="ngForm" novalidate>\n      <ion-list>\n\n        <!-- <ion-label stacked>Name</ion-label> -->\n        <ion-item style="border:1px solid #d7b359 !important;">\n          <ion-input type="text" placeholder="{{ \'name\' | translate}}" [(ngModel)]="data.name" pattern=\'[a-zA-Z ]*\' name="name" #name="ngModel" required></ion-input>\n        </ion-item>\n        <ion-label color="danger" class="alert01">\n          <div *ngIf="name.errors && (name.dirty || name.touched)">\n            <div [hidden]="!name.errors.required">\n              Name is required\n            </div>\n            <div [hidden]="!name.errors.pattern">\n              Invalid name\n            </div>\n          </div>\n        </ion-label>\n        <!-- <ion-label stacked>Phone Number</ion-label> -->\n        <ion-item>\n          <ion-input type="text" placeholder="{{ \'phone_number\' | translate}}" [(ngModel)]="data.number" name="number" pattern=\'[0-9]+\' maxlength=\'10\'\n            #number="ngModel" required></ion-input>\n        </ion-item>\n        <ion-label color="danger" class="alert01">\n          <div *ngIf="number.errors && (number.dirty || number.touched)">\n            <div [hidden]="!number.errors.required">\n              Phone Number is required\n            </div>\n            <div [hidden]="!number.errors.pattern">\n              Invalid phone number\n            </div>\n          </div>\n        </ion-label>\n\n        <!-- <ion-label stacked>Email</ion-label> -->\n        <ion-item>\n          <ion-input type="text" placeholder="{{ \'email\' | translate }}" [(ngModel)]="data.email" required pattern=\'^[A-Za-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\'\n            name=\'email\' #email="ngModel"></ion-input>\n        </ion-item>\n        <ion-label color="danger" class="alert01">\n          <div *ngIf="email.errors && (email.dirty || email.touched)">\n            <div [hidden]="!email.errors.required">\n              E-mail is required\n            </div>\n            <div [hidden]="!email.errors.pattern">\n              Invalid E-mail\n            </div>\n          </div>\n        </ion-label>\n\n        <!-- <ion-label stacked>Password</ion-label> -->\n        <ion-item>\n          <ion-input type="password" placeholder="{{ \'pass\' | translate }}" [(ngModel)]="data.password" name="password" minlength=\'6\' #password="ngModel"\n            required></ion-input>\n        </ion-item>\n        <ion-label color="danger" class="alert01">\n          <div *ngIf="password.errors && (password.dirty || password.touched)">\n            <div [hidden]="!password.errors.required">\n              Password is required\n            </div>\n            <div [hidden]="!password.errors.minlength">\n              Minimum length should be 6\n            </div>\n          </div>\n        </ion-label>\n        <!-- <ion-label stacked>Confirm Password</ion-label> -->\n        <ion-item>\n          <ion-input type="password" placeholder="{{ \'confirm_pass\' | translate}}" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel"\n            required></ion-input>\n        </ion-item>\n        <ion-label color="danger" class="alert01">\n          <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n            <div [hidden]="!cpassword.errors.required">\n              Please confirm your password\n            </div>\n            <div [hidden]="!cpassword.errors.minlength">\n              Minimum length should be 6\n            </div>\n          </div>\n        </ion-label>\n        <div class="male_box">\n            <ion-list radio-group [(ngModel)]="data.gender" name="gender" #gender="ngModel">\n              <ion-item style="border-right:none;">\n                <ion-label>{{ \'male\' | translate }}</ion-label>\n                <ion-radio checked="true" value="male"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>{{ \'female\' | translate }}</ion-label>\n                <ion-radio value="female"></ion-radio>\n              </ion-item>\n            </ion-list>\n         </div>\n        <!--<ion-label color="danger">\n          <div *ngIf="gender.errors && (gender.dirty || gender.touched)">\n            <div [hidden]="!gender.errors.required">\n              Please confirm your password\n            </div>\n            <div [hidden]="!gender.errors.minlength">\n              Minimum length should be 6\n            </div>\n          </div>\n        </ion-label>-->\n      </ion-list>\n\n      <div class="signup_btn">\n        <ion-grid style="padding: 0;">\n          <ion-row>\n            <ion-col col-4> <button type=\'button\' ion-button (click)=\'agree(true)\' class="{{this?.active}}"> {{ \'Iagree\' | translate}}</button></ion-col>\n            <ion-col col-8 (click)="readTerms()"><span>{{ \'terms_n_cond\' | translate}}</span></ion-col>\n\n            <div style="height:2vh;float:left;width:100%;"></div>\n            <button type=\'button\' [hidden]=\'hasAgreed != false\'(click)=\'notAgreed()\' [disabled]=\'!signupForm.valid\' ion-button style="height:45px;border-radius:4px;">{{\'Join\' | translate}}</button>\n            <button type=\'submit\' [hidden]=\'hasAgreed == false\' (click)=\'register(signupForm)\' [disabled]=\'!signupForm.valid\' ion-button style="height:45px;border-radius:4px;">{{\'Join\' | translate}}</button>\n            <div style="height:4vh;float:left;width:100%;"></div>\n\n          </ion-row>\n        </ion-grid>\n      </div>\n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, commonprovider, loadingCtrl, http, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.nav = nav;
        this.lang = localStorage.getItem('lang');
        this.termsCondtions();
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.goback = function () {
        console.log(this.nav.canGoBack());
        if (this.nav.canGoBack()) {
            this.nav.pop();
        }
    };
    TermsPage.prototype.termsCondtions = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.get(_this.commonprovider.base_url + 'termsnconditions', options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                _this.terms = data[0].terms;
                _this.ar_terms = data[0].ar_terms;
            }, function (err) {
                Loader.dismiss();
            });
        });
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\terms\terms.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n    <!-- <button ion-button class="back" (click)="goback();">\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back" ></ion-icon>\n      </button> -->\n\n    <ion-title>{{ \'terms_n_cond\' | translate}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="spacer" style="height:10vh;float:left;width:100%;"></div>\n  <span class="heading" *ngIf=\'lang == "en"\' [innerHTML]=\'this?.terms\'></span>\n  <span class="heading" *ngIf=\'lang == "ar"\' [innerHTML]=\'this?.ar_terms\'></span>\n\n  <div class="email_box">\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\terms\terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__retrivepassword_retrivepassword__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EmailPage = (function () {
    function EmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__retrivepassword_retrivepassword__["a" /* RetrivepasswordPage */]);
    };
    return EmailPage;
}());
EmailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-email',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\email\email.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>Retrive Password</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <div class="spacer" style="height:14vh;float:left;width:100%;"></div>\n    <span class="heading">get a verification code</span>\n    <span class="heading">on my email</span>\n    <span class="heading">XXXXX@XXXXX</span>\n    <span class="heading">that contains 4 digits</span>\n\n    <div class="email_box">\n      <form>\n          <ion-list>\n              \n                <ion-item>\n                  <ion-input type="text" placeholder="Enter Code"></ion-input>\n                </ion-item>\n              \n              </ion-list>\n\n              <button ion-button>Next</button>\n      </form>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\email\email.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], EmailPage);

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, commonprovider, loadingCtrl, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.events = events;
        this.data = '';
        this.user_id = localStorage.getItem("user_id");
        var userdata = JSON.parse(localStorage.getItem('userdata'));
        this.firstname = userdata.firstname;
        console.log(this.user_id);
        this.getUser();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.account = function () {
        this.navCtrl.pop();
    };
    ProfilePage.prototype.getUser = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            id: this.user_id
        };
        var serialised = this.commonprovider.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'getsingleuser', serialised, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.data = {
                    name: data.firstname + ' ' + data.lastname,
                    email: data.email,
                    phone: data.phone,
                    gender: data.gender,
                };
                Loader.dismiss();
            }, function (err) {
                Loader.dismiss();
            });
        });
    };
    ProfilePage.prototype.update = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var gender = formdata.value.gender;
        if (gender == undefined) {
            gender = '';
        }
        var name = formdata.value.name.split(' ');
        var firstname = name[0];
        if (name[1] != undefined) {
            var lastname = name[1];
        }
        else {
            this.commonprovider.simpleToast('Please write your full name');
            return false;
        }
        var postdata = {
            id: this.user_id,
            firstname: firstname,
            lastname: lastname,
            phone: formdata.value.phone,
            email: formdata.value.email,
            username: formdata.value.email,
            gender: formdata.value.gender,
            role: 'user',
            status: '0',
        };
        console.log(postdata);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'edit_user', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.status == true) {
                    _this.commonprovider.simpleToast(data.message);
                    //update userdetails in local storage
                    _this.http.post(_this.commonprovider.base_url + 'getsingleuser', { id: _this.user_id }, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        localStorage.setItem('userdata', JSON.stringify(data));
                        var userdata = JSON.parse(localStorage.getItem('userdata'));
                        _this.firstname = userdata.firstname;
                        _this.events.publish('userdata');
                    }, function (err) {
                    });
                }
                else {
                    _this.commonprovider.simpleToast('Something went wrong. Try again later.');
                }
            }, function (err) {
                console.log(err);
                Loader.dismiss();
                _this.commonprovider.simpleToast('Something went wrong. Try again later.');
            });
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\profile\profile.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n    <ion-title>{{ \'myaccount\' | translate}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="email_box">\n\n    <h2>Hello Beautiful {{this?.firstname}}</h2>\n    <form #signinForm="ngForm" novalidate>\n      <ion-list>\n\n        <div class="icn00">\n          <ion-item>\n            <ion-input type="text" placeholder="Lovely Name" [(ngModel)]="data.name" pattern=\'[a-zA-Z ]*\' name="name" #name="ngModel"\n              required></ion-input>\n          </ion-item>\n          <ion-icon ios="ios-create" md="md-create" class="edit"></ion-icon>\n          <ion-label color="danger">\n            <div *ngIf="name.errors && (name.dirty || name.touched)">\n              <div [hidden]="!name.errors.required">\n                Name is required\n              </div>\n              <div [hidden]="!name.errors.pattern">\n                Invalid name\n              </div>\n            </div>\n          </ion-label>\n        </div>\n\n        <div class="icn00">\n          <ion-item>\n            <ion-input type="text" placeholder="Email" [(ngModel)]="data.email" required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\'\n              name=\'email\' #email="ngModel" [readonly]="true">\n              <ion-icon ios="ios-create" md="md-create" class="edit"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <!--<ion-icon ios="ios-create" md="md-create" class="edit"></ion-icon>-->\n        </div>\n\n        <div class="icn00">\n          <ion-item>\n            <ion-input type="text" placeholder="Phone" [(ngModel)]="data.phone" name="phone" pattern=\'[0-9]+\' maxlength=\'10\' #phone="ngModel"\n              >\n              <ion-icon ios="ios-create" md="md-create" class="edit"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <ion-icon ios="ios-create" md="md-create" class="edit"></ion-icon>\n          <ion-label color="danger">\n            <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n              <div [hidden]="!phone.errors.required">\n                Phone Number is required\n              </div>\n              <div [hidden]="!phone.errors.pattern">\n                Invalid phone number\n              </div>\n            </div>\n          </ion-label>\n        </div>\n        <div class="icn00">\n          <ion-item>\n            <ion-label style="margin-bottom: 0px !important;margin-top: 0;">Gender</ion-label>\n            <ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel">\n              <!--[ngModelOptions]="{standalone: true}"-->\n              <ion-option value="male">Male</ion-option>\n              <ion-option value="female">Female</ion-option>\n            </ion-select>\n          </ion-item>\n        </div>\n      </ion-list>\n\n      <button ion-button type=\'submit\' (click)="update(signinForm)" [disabled]=\'!signinForm.valid\' class="sve"> Save</button>\n\n    </form>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ContactusPage = (function () {
    function ContactusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
    };
    return ContactusPage;
}());
ContactusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contactus',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\contactus\contactus.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n    <ion-title>Contact Us</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="position1">\n  <div class="pick">\n    <img class="main_pick" src="assets/image/pick.png">\n   \n  </div>\n   <div class="user_name">\n      <!--<span><img class="user" src="assets/image/user1.png"></span> -->\n      <h3>Lorem Ipsum</h3></div>\n  </div>\n\n  <div style="height:3vh;float:left;width:100%;"></div>\n\n  <div class="detail">\n    <ul>\n      <li>\n      <h4>MOBILE</h4>\n      <span>+966 (000) 000-0000</span>\n      <ion-icon ios="ios-call" md="md-call" class="icn00"></ion-icon>\n      </li>\n      <!-- <li>\n          <h4>PHONE</h4>\n          <span>+966 (001) 010-1234</span>\n          <ion-icon ios="ios-call" md="md-call" class="icn00"></ion-icon>\n          </li> -->\n          <li>\n              <h4>EMAIL</h4>\n              <span>abc21@gmail.com</span>\n              <ion-icon ios="ios-mail" md="md-mail" class="icn00"></ion-icon>\n              </li>\n    </ul>\n  </div>\n\n  <div class="social_icn">\n    <ul>\n      <!-- <li><a><img src="assets/image/26.png"></a></li> -->\n      <li><a><img src="assets/image/25.png"></a></li>\n      <li><a><img src="assets/image/24.png"></a></li>\n    </ul>\n  </div>\n\n  <div style="height:8vh;float:left;width:100%;"></div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\contactus\contactus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ContactusPage);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutorderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutorderPage = (function () {
    function AboutorderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutorderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutorderPage');
    };
    AboutorderPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
    };
    return AboutorderPage;
}());
AboutorderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aboutorder',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\aboutorder\aboutorder.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n\n      <ion-title>About My Orders</ion-title>\n<ion-buttons end>\n      <button ion-button class="back" style="float: right;">\n          <ion-icon ios="ios-search" md="md-search"></ion-icon>\n        </button>\n</ion-buttons>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <div class="wishlist_box">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/image/1.jpg">\n            </ion-thumbnail>\n            <h2>Balloon 1</h2>\n            <p>In Transation</p>\n            <button ion-button clear item-end class="price">8/31/2017</button>\n          </ion-item>\n      \n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/image/6.jpg">\n            </ion-thumbnail>\n            <h2>Balloon 2</h2>\n            <p>In Transation</p>\n            <button ion-button clear item-end class="price">8/31/2017</button>\n          </ion-item>\n      \n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/image/7.jpg">\n            </ion-thumbnail>\n            <h2>Balloon 3</h2>\n            <p>In Transation</p>\n            <button ion-button clear item-end class="price">8/31/2017</button>\n          </ion-item>\n      \n        </ion-list>\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\aboutorder\aboutorder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], AboutorderPage);

//# sourceMappingURL=aboutorder.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trackorder_trackorder__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.track = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__trackorder_trackorder__["a" /* TrackorderPage */]);
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\notification\notification.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="list_box">\n        \n          <ion-list>\n\n               <button ion-item (click)="track()">\n             Lorem ipsum is dummy content<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n          </button> \n\n            <button ion-item (click)="track()">\n                Lorem ipsum is dummy content<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button>  \n\n        </ion-list>\n        \n        </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\notification\notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrackorderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrackorderPage = (function () {
    function TrackorderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrackorderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackorderPage');
    };
    return TrackorderPage;
}());
TrackorderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trackorder',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\trackorder\trackorder.html"*/'<!-- <ion-header class="main_header">\n  <ion-navbar>\n\n      <ion-buttons class="pick0" start left>\n         \n              <img src="assets/image/order.png">\n          \n        </ion-buttons>\n\n    <ion-title>Track My Order</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="cancel">\n       Cancel\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header> -->\n<ion-header class="main_header">\n    <ion-navbar color="navyb" text="center" hideBackButton >\n     <ion-buttons start left>\n     <div class="picprf">\n        <img src="assets/image/order.png">\n     </div>\n    </ion-buttons>\n     <ion-title>Track My Order</ion-title>\n  <!--      <button ion-button menuToggle left color="lightgrey">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button> -->\n     \n      <ion-buttons end>\n          <button ion-button icon-only class="cancel">\n              Cancel\n             </button>\n      </ion-buttons>\n      \n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n\n  <div class="order">\n    <h6>order number</h6>\n    <p>#145678</p>\n  </div>\n\n  <div class="order_pagination" padding>\n    \n    <div class="box">\n        <ion-grid>\n            <ion-row>\n              <ion-col col-2><span class="circle circle1"></span></ion-col>\n              <ion-col col-3><div class="order-image"> <img src="assets/image/information.png"></div></ion-col>\n              <ion-col col-7>\n                <div class="content1">\n                <h5>Order Placed</h5>\n                <p>We have received your order.</p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n          <ion-grid>\n              <ion-row>\n                <ion-col col-2><span class="circle circle2"></span></ion-col>\n                <ion-col col-3><div class="order-image"> <img src="assets/image/placed.png"></div></ion-col>\n                <ion-col col-7>\n                  <div class="content1">\n                  <h5>Order Confirmed</h5>\n                  <p>We have received your order.</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-2><span class="circle abc circle3"></span></ion-col>\n                  <ion-col col-3><div class="order-image"> <img src="assets/image/placed.png"></div></ion-col>\n                  <ion-col col-7>\n                    <div class="content1 bbb">\n                    <h5>Order Processed</h5>\n                    <p>We have received your order.</p>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-2><span class="circle circle4"></span></ion-col>\n                    <ion-col col-3><div class="order-image"> <img src="assets/image/placed.png"></div></ion-col>\n                    <ion-col col-7>\n                      <div class="content1">\n                      <h5>Order Delivered</h5>\n                      <p>We have received your order.</p>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n           \n           </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\trackorder\trackorder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TrackorderPage);

//# sourceMappingURL=trackorder.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeofferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mjevent_mjevent__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WeofferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WeofferPage = (function () {
    function WeofferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WeofferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WeofferPage');
    };
    WeofferPage.prototype.mjevent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mjevent_mjevent__["a" /* MjeventPage */]);
    };
    WeofferPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
    };
    return WeofferPage;
}());
WeofferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-weoffer',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\weoffer\weoffer.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>MJ\'s Events</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n<div class="offer">\n\n  <form>\n    <textarea name="" id="" cols="30" rows="10" placeholder="Write Message"></textarea>\n    <div class="language_btn">\n        \n            <button ion-button (click)="chat()">Chat with us</button>\n\n    </div>\n  </form>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\weoffer\weoffer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], WeofferPage);

//# sourceMappingURL=weoffer.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowaboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mjevent_mjevent__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the KnowaboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var KnowaboutPage = (function () {
    function KnowaboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KnowaboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KnowaboutPage');
    };
    KnowaboutPage.prototype.mjevent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mjevent_mjevent__["a" /* MjeventPage */]);
    };
    return KnowaboutPage;
}());
KnowaboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-knowabout',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\knowabout\knowabout.html"*/'<ion-header class="main_header">\n\n</ion-header>\n\n\n<ion-content style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="detail_box">\n          <img src="assets/image/1.jpg">\n  </div>\n\n  <div padding>\n   <div class="para">\n  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n   </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\knowabout\knowabout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], KnowaboutPage);

//# sourceMappingURL=knowabout.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Stores/stores.module": [
		430,
		2
	],
	"../pages/about/about.module": [
		468,
		1
	],
	"../pages/aboutorder/aboutorder.module": [
		455,
		40
	],
	"../pages/account/account.module": [
		458,
		39
	],
	"../pages/addressdetail/addressdetail.module": [
		444,
		38
	],
	"../pages/balloondetail/balloondetail.module": [
		447,
		37
	],
	"../pages/balloonprice/balloonprice.module": [
		438,
		36
	],
	"../pages/changepassword/changepassword.module": [
		459,
		35
	],
	"../pages/chat/chat.module": [
		446,
		34
	],
	"../pages/confirmation/confirmation.module": [
		441,
		33
	],
	"../pages/contactus/contactus.module": [
		453,
		32
	],
	"../pages/decoration/decoration.module": [
		429,
		31
	],
	"../pages/email/email.module": [
		450,
		30
	],
	"../pages/enterdetail/enterdetail.module": [
		440,
		29
	],
	"../pages/entertainment/entertainment.module": [
		437,
		28
	],
	"../pages/eventcompanies/eventcompanies.module": [
		434,
		27
	],
	"../pages/history/history.module": [
		454,
		26
	],
	"../pages/individualplanner/individualplanner.module": [
		433,
		25
	],
	"../pages/knowabout/knowabout.module": [
		465,
		24
	],
	"../pages/language/language.module": [
		431,
		23
	],
	"../pages/location/location.module": [
		432,
		22
	],
	"../pages/mjevent/mjevent.module": [
		464,
		21
	],
	"../pages/notification/notification.module": [
		457,
		20
	],
	"../pages/order/order.module": [
		445,
		19
	],
	"../pages/orderreview/orderreview.module": [
		443,
		18
	],
	"../pages/payment/payment.module": [
		442,
		17
	],
	"../pages/phone/phone.module": [
		460,
		16
	],
	"../pages/proeventdetail/proeventdetail.module": [
		467,
		15
	],
	"../pages/profile/profile.module": [
		451,
		14
	],
	"../pages/proplanner/proplanner.module": [
		435,
		13
	],
	"../pages/rating/rating.module": [
		469,
		0
	],
	"../pages/retrivepassword/retrivepassword.module": [
		461,
		12
	],
	"../pages/service/service.module": [
		436,
		11
	],
	"../pages/signin/signin.module": [
		462,
		10
	],
	"../pages/signup/signup.module": [
		449,
		9
	],
	"../pages/start/start.module": [
		452,
		8
	],
	"../pages/terms/terms.module": [
		448,
		7
	],
	"../pages/trackorder/trackorder.module": [
		456,
		6
	],
	"../pages/trendingdetail/trendingdetail.module": [
		466,
		5
	],
	"../pages/viewall/viewall.module": [
		439,
		4
	],
	"../pages/weoffer/weoffer.module": [
		463,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entertainment_entertainment__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__decoration_decoration__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StoresPage = (function () {
    function StoresPage(navCtrl, navParams, http, commonprovider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.isSwitched = false;
        this.pet = 'puppies';
        this.lang = localStorage.getItem('lang');
        var vendor_ids = JSON.parse(localStorage.getItem('vendor_ids'));
        var city = localStorage.getItem('city');
        this.allUsers(city);
        this.vendor_products(vendor_ids);
        //this.allCategories();
    }
    StoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicePage');
    };
    StoresPage.prototype.allUsers = function (city) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get(this.commonprovider.base_url + 'users/all_vendors', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.users = [];
            _this.stores = []; // vendors itself are stores 
            for (var x in data) {
                if (data[x].city) {
                    for (var j in data[x].city) {
                        if (data[x].city[j] == city) {
                            _this.stores.push(data[x]);
                        }
                    }
                }
            }
            console.log(_this.stores);
        }, function (err) {
        });
    };
    StoresPage.prototype.vendor_products = function (vendor_ids) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var id = {
            vendorid: vendor_ids
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'products/vendors_products', id, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                _this.categories = data;
                _this.services = [];
                for (var i in data) {
                    if (data[i].type == "service") {
                        _this.services.push(data[i]);
                    }
                }
                _this.categories_1 = data;
                if (_this.categories_1.length == 0) {
                    _this.commonprovider.simpleToast("Not found");
                }
            }, function (err) {
                Loader.dismiss();
                _this.commonprovider.simpleToast('An error occured. Try again');
            });
        });
    };
    StoresPage.prototype.switch = function () {
        this.isSwitched = true;
    };
    // sortBy(key){
    //   console.log(key)
    //   var data = this.categories_1;
    //   var sorted = [];
    //   for(let i in data){
    //       if(data[i].type == key){
    //           sorted.push(data[i])
    //       }
    //   }
    //   this.categories = sorted;
    // }
    StoresPage.prototype.subcategorypage = function (id, cname, ar_cname, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__entertainment_entertainment__["a" /* EntertainmentPage */], { categoryid: id, name: cname, ar_name: ar_cname, type: type });
    };
    StoresPage.prototype.servicepage = function (id, cname, ar_cname, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServicePage */], { vendorid: id, name: cname, ar_name: ar_cname });
    };
    StoresPage.prototype.decoration1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__decoration_decoration__["a" /* DecorationPage */]);
    };
    StoresPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return StoresPage;
}());
StoresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stores',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\Stores\stores.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n      <ion-title>{{ \'categories\' | translate }}</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n    <div class="location">\n        \n      <!-- <ion-list class="select01">\n        <ion-item>\n          <ion-label style="color:#d7b359;text-align:right;">Sort By:</ion-label>\n          <ion-select [(ngModel)]="gaming" class="gameing">\n            <ion-option value="nes">services</ion-option>\n            <ion-option value="n64">services 2</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list> -->\n\n      <div padding>\n        <ion-segment [(ngModel)]="pet" >\n         \n          <ion-segment-button value="puppies" (click)="switch();">\n            {{ \'Services\' | translate }}\n          </ion-segment-button>\n\n           <ion-segment-button value="kittens" (click)="switch();">\n            {{ \'Stores\' | translate }}\n          </ion-segment-button>\n          \n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="pet">\n      <div class="list_box" *ngSwitchCase="\'kittens\'">\n        <ion-list>\n            <button  *ngFor=\'let category of stores\' ion-item (click)="servicepage(category._id,category.org_name)">\n             <img [src]="category.image" class="service_icn"> \n              <span *ngIf=\'lang == "en"\'>  {{category.org_name}}  </span>\n               <span *ngIf=\'lang == "ar"\'>  {{category.org_name}}  </span>\n             <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button>  \n        </ion-list>\n      </div>\n      <div class="list_box" *ngSwitchCase="\'puppies\'">\n          <ion-list>\n           <ion-list>\n            <button  *ngFor=\'let category of services\' ion-item (click)="subcategorypage(category._id,category.name,category.ar_name,category.type)">\n             <img [src]="category.image" class="service_icn"> \n              <span *ngIf=\'lang == "en"\'>  {{category.name}}  </span>\n               <span *ngIf=\'lang == "ar"\'>  {{category.ar_name}}  </span>\n             <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button>  \n        </ion-list> \n        </ion-list>\n        </div>\n      </div>\n      \n\n</div>\n        \n\n\n  </ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\Stores\stores.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], StoresPage);

//# sourceMappingURL=stores.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalloondetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_order__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BalloondetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BalloondetailPage = (function () {
    function BalloondetailPage(navCtrl, navParams, commonprovider, http, nav, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.http = http;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.product = '';
        this.lang = localStorage.getItem('lang');
        var proId = this.navParams.get("product_id");
        if (proId != null) {
            this.productDetails(proId);
        }
    }
    BalloondetailPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    BalloondetailPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    BalloondetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalloondetailPage');
    };
    BalloondetailPage.prototype.productDetails = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            id: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'products/singleproduct', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.product = data.data;
                    _this.rate = parseInt(_this.product.rating);
                    console.log(_this.rate);
                    _this.stars = _this.commonprovider.printRating(_this.product.rating);
                    if (_this.lang == 'en') {
                        _this.diseases = [
                            {
                                title: "Description",
                                description: _this.product.description
                            },
                        ];
                    }
                    else {
                        _this.diseases = [
                            {
                                title: "وصف",
                                description: _this.product.ar_description
                            },
                        ];
                    }
                }
                else {
                    _this.commonprovider.simpleToast("Could not load products...");
                }
            }, function (err) {
                // this.commonprovider.simpleToast("Oops! Something went wrong!")
                Loader.dismiss();
            });
        });
    };
    BalloondetailPage.prototype.addtoWish = function (prod_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            productid: prod_id,
            userid: localStorage.getItem('user_id'),
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'wishlists/add', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.events.publish('wish');
                    _this.commonprovider.simpleToast("Added to wishlist");
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    BalloondetailPage.prototype.balloonprice = function () {
        this.navCtrl.pop();
        //this.navCtrl.push(BalloonpricePage);
    };
    BalloondetailPage.prototype.order1 = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_order__["a" /* OrderPage */], { product_id: id });
    };
    BalloondetailPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
    };
    return BalloondetailPage;
}());
BalloondetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-balloondetail',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\balloondetail\balloondetail.html"*/'<ion-header class="main_header">\n    <ion-navbar *ngIf=\'this?.product\'>\n  \n    <ion-title *ngIf=\'lang == "en"\'>{{product.name}}</ion-title>\n    <ion-title *ngIf=\'lang == "ar"\'>{{product.ar_name}}</ion-title>\n\n      \n      <ion-buttons end>\n        <button ion-button right class="back" (click)="addtoWish(product._id)">\n        <ion-icon ios="ios-heart-outline" md="md-heart-outline" item-end ></ion-icon>\n      </button>\n      </ion-buttons>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n    <div class="detail_box">\n      <ion-slides pager>\n        \n          <ion-slide>\n            <img [src]="product.image">\n          </ion-slide>\n        \n          <ion-slide>\n            <img src="assets/image/1.jpg">\n          </ion-slide>\n        \n          <ion-slide>\n          <img src="assets/image/1.jpg">\n          </ion-slide>\n        \n        </ion-slides>\n    </div>\n\n    <div padding>\n    <div class="raiting">\n      <ul>\n        <li>\n          <ion-rating [numStars]="5" [readOnly]="true" value="{{rate}}" >\n</ion-rating>\n<!--(clicked)="starClicked($event)"-->\n          <!--<ion-icon ios="ios-star" md="md-star" *ngFor="let star of stars" name="{{star}}"></ion-icon>-->\n        </li>\n      </ul>\n      <!--<ul>\n        <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n        <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n        <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n        <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n        <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n      </ul>-->\n    </div>\n\n    <div class="accordion">\n      <ion-list class="custom_accordion">\n        <ion-item *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n          <h3>\n            {{d.title}}\n            <ion-icon style="float:right; margin: 0;" color="success" item-right [name]="isGroupShown(i) ? \'ios-arrow-up\' : \'ios-arrow-down\'"></ion-icon>\n          </h3>\n          <div class="acco_sec" *ngIf="isGroupShown(i)">\n            <p [innerHTML]=\'d.description\'></p>\n          </div>\n        </ion-item>\n        </ion-list>\n    </div>\n\n   <div class="price">\n     <p>{{ \'vendor\' | translate}} : {{product.vendorname}}</p>\n     <span>{{ \'price\' | translate}} : {{product.price}}SR</span>\n   </div>\n\n   <div class="two_btn">\n      <ion-grid style="padding:0px;">\n          <ion-row>\n            <ion-col col-6><button ion-button  (click)="order1(product._id)">{{ \'ordernow\' | translate}}</button></ion-col>\n            <ion-col col-6><button ion-button  (click)="chat()">{{ \'chat_with_us\' | translate}}</button></ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <div style="height:3vh;float:left;width:100%;"></div>\n\n   </div>\n\n</div>\n   \n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\balloondetail\balloondetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], BalloondetailPage);

//# sourceMappingURL=balloondetail.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactus_contactus__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutorder_aboutorder__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__changepassword_changepassword__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__language_language__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notification_notification__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, nav, events, actionSheetCtrl, camera, commonprovider, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.commonprovider = commonprovider;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.srcImage = null;
        this.imgTosend = null;
        var userdata = JSON.parse(localStorage.getItem('userdata'));
        this.events.subscribe('userdata', function (res) {
            userdata = JSON.parse(localStorage.getItem('userdata'));
        });
        this.firstname = userdata.firstname;
        this.lastname = userdata.lastname;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        // this.srcImage = 'http://i0.kym-cdn.com/photos/images/original/000/164/141/1313714621002.png';
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        // this.Loader.present();
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            _this.imgTosend = imageUri;
                            // this.Loader.dismiss();
                        }, function (err) {
                            alert(JSON.stringify(err));
                            // this.Loader.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //alert("get Picture")
                        // this.Loader.present();
                        var options = {
                            quality: 8,
                            sourceType: 0,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            _this.imgTosend = imageData;
                            //	this.Loader.dismiss();
                        }, function (err) {
                            //this.Loader.dismiss();
                            //alert(JSON.stringify(err));
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //  actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    AccountPage.prototype.changeImage = function () {
    };
    AccountPage.prototype.back = function () {
        this.navCtrl.pop();
        // push(SigninPage);
    };
    AccountPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    AccountPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
    };
    AccountPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__notification_notification__["a" /* NotificationPage */]);
    };
    AccountPage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contactus_contactus__["a" /* ContactusPage */]);
    };
    AccountPage.prototype.aboutorder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aboutorder_aboutorder__["a" /* AboutorderPage */]);
    };
    AccountPage.prototype.history = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__history_history__["a" /* HistoryPage */]);
    };
    AccountPage.prototype.ChangePasswordpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    AccountPage.prototype.logout = function () {
        var email = localStorage.getItem('email');
        var remember = localStorage.getItem('isRemember');
        localStorage.clear();
        if (remember != null) {
            localStorage.setItem('email', email);
            localStorage.setItem('isRemember', remember);
        }
        ;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__language_language__["a" /* LanguagePage */]);
        this.nav.popToRoot();
        // this.navCtrl.push(SigninPage);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\account\account.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n      <ion-title>{{ \'account\' | translate }}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <div class="user">\n        <img *ngIf=\'this?.srcImage == null\' src="assets/image/user.png" (click)=\'CameraAction()\' >\n        <img *ngIf=\'this?.srcImage != null\' [src]="this?.srcImage" (click)=\'CameraAction()\' >\n        <!--<span class="edt"><ion-icon ios="ios-create" md="md-create" (click)=\'CameraAction()\'></ion-icon></span>-->\n        <h2>{{firstname}}</h2>\n\n        <div class="two_box">\n            <ul>\n              <li><a (click)="aboutorder()"><ion-icon ios="ios-clipboard" md="md-clipboard" class="icn"></ion-icon>\n              <span>{{ \'myorders\' | translate}}</span>\n              </a></li>\n              <li><a (click)="notification()"><ion-icon ios="ios-notifications" md="md-notifications" class="icn"><sup class="star0">*</sup></ion-icon>\n                <span> {{ \'notifications\' | translate}} </span>\n                </a></li>\n            </ul>\n          </div>\n      </div>\n      \n      <div class="padding10">\n\n      <div class="list_box">\n          \n            <ion-list>\n\n                 <button ion-item (click)="chat()">\n                <ion-icon ios="ios-chatbubbles" md="md-chatbubbles" class="service_icn"></ion-icon>{{ \'mychat\' | translate}}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button> \n\n\n              <button ion-item (click)="profile()">\n              <ion-icon ios="ios-contact" md="md-contact" class="service_icn"></ion-icon> {{ \'myprofile\' | translate}}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n              </button>  \n          \n            <button ion-item (click)="decoration1()">\n                  <ion-icon ios="ios-pin" md="md-pin" class="service_icn"></ion-icon> {{ \'location\' | translate}}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button>  \n\n            <button ion-item (click)="contact()">\n                <ion-icon ios="ios-call" md="md-call" class="service_icn"></ion-icon>{{ \'contactus\' | translate}}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button> \n\n            <button ion-item (click)="history()">\n                <ion-icon ios="ios-timer-outline" md="md-timer" class="service_icn"></ion-icon>{{ \'history\' | translate}}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n                </button> \n\n                <button ion-item>\n                <ion-icon ios="ios-star-outline" md="md-star" class="service_icn"></ion-icon>Rate This App<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n                </button> \n\n            <button ion-item (click)="ChangePasswordpage()">\n                <ion-icon ios="ios-lock" md="md-lock" class="service_icn"></ion-icon> {{ \'changepass\' | translate}}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button> \n             <button ion-item (click)="logout()">\n                <ion-icon ios="ios-lock" md="md-lock" class="service_icn"></ion-icon> {{ \'logout\' | translate}}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n            </button> \n  \n          </ion-list>\n          \n          </div>\n          </div>\n    \n   \n   \n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_10__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balloondetail_balloondetail__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistPage = (function () {
    function WishlistPage(navCtrl, navParams, commonprovider, http, loadingCtrl, nav, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.events = events;
        this.showOption = '0';
        this.test_to_show = "Edit";
        this.products = [];
        this.lang = localStorage.getItem('lang');
        var userid = localStorage.getItem('user_id');
        this.allProducts(userid);
        this.events.subscribe('wish', function (data) {
            _this.allProducts(userid);
        });
    }
    WishlistPage.prototype.doRefresh = function (refresher) {
        var userid = localStorage.getItem('user_id');
        this.allProducts(userid);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    WishlistPage.prototype.allProducts = function (userid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.get(_this.commonprovider.base_url + 'products/showWishlist', options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                _this.products = [];
                if (data.status == true) {
                    for (var i in data.data) {
                        if (data.data[i].userid == userid) {
                            data.data[i].product_info.wishlistid = data.data[i]._id;
                            _this.products.push(data.data[i].product_info);
                        }
                    }
                    if (_this.products.length == 0) {
                        _this.commonprovider.simpleToast('Your wishlist is empty!');
                    }
                    console.log(_this.products);
                }
                else {
                    _this.commonprovider.simpleToast("Could not load products...");
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    WishlistPage.prototype.edit = function (text) {
        if (text == 'Edit') {
            this.test_to_show = "Done";
            this.showOption = '1';
        }
        else {
            this.test_to_show = "Edit";
            this.showOption = '0';
        }
    };
    WishlistPage.prototype.removeItem = function (wishlistid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var postdata = {
            id: wishlistid
        };
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'wishlists/deleteproduct', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.commonprovider.simpleToast(data.message);
                    var userid = localStorage.getItem('user_id');
                    _this.allProducts(userid);
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    WishlistPage.prototype.balloondetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__balloondetail_balloondetail__["a" /* BalloondetailPage */], { product_id: id });
    };
    return WishlistPage;
}());
WishlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wishlist',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\wishlist\wishlist.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n    <button [hidden]="this.products.length == 0" ion-button class="back" (click)="edit(test_to_show)">\n      {{test_to_show}}\n    </button>\n    \n\n    <ion-title> {{ \'wishlist\' | translate }}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <div class="wishlist_box">\n  <ion-list>\n    <div class="close_box" *ngFor="let prod of products">\n      <ion-icon *ngIf="showOption == \'1\'" class="close" ios="ios-close-circle" md="md-close-circle" (click)="removeItem(prod.wishlistid)"></ion-icon>\n      <ion-item>\n        <ion-thumbnail item-start >\n          <img [src]="prod.image">\n        </ion-thumbnail>\n        <h2 *ngIf=\'lang == "en"\'> {{ prod.name }}</h2>\n        <h2 *ngIf=\'lang == "ar"\'> {{ prod.ar_name }}</h2>\n        <p *ngIf=\'lang == "en"\'>{{ prod.description }}</p>\n        <p *ngIf=\'lang == "ar"\'>{{ prod.ar_description }}</p>\n        <button ion-button clear item-end class="price" (click)="balloondetail(prod._id)">SR {{ prod.price }}</button>\n      </ion-item>\n    </div>\n  </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\wishlist\wishlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_language__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StartPage = (function () {
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.language = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__language_language__["a" /* LanguagePage */]);
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\start\start.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>start</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg2.jpg);background-size: cover;background-repeat: no-repeat;" (click)="language();">\n<div class="spacer" style="height:28vh;float:left;width:100%;"></div>\n\n<div class="logo_box">\n<img src="assets/image/logo.png">\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\start\start.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TrendingdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrendingdetailPage = (function () {
    function TrendingdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrendingdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrendingdetailPage');
    };
    TrendingdetailPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return TrendingdetailPage;
}());
TrendingdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trendingdetail',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\trendingdetail\trendingdetail.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n\n    <ion-title>Trending 1</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="detail_box">\n    <img src="assets/image/1.jpg">\n</div>\n\n<div padding>\n<div class="para">\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\trendingdetail\trendingdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TrendingdetailPage);

//# sourceMappingURL=trendingdetail.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProeventdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventcompanies_eventcompanies__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProeventdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProeventdetailPage = (function () {
    function ProeventdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProeventdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProeventdetailPage');
    };
    ProeventdetailPage.prototype.eventcompanies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__eventcompanies_eventcompanies__["a" /* EventcompaniesPage */]);
    };
    return ProeventdetailPage;
}());
ProeventdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-proeventdetail',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\proeventdetail\proeventdetail.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n  \n    <ion-title>180 Degrees</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="card_box">\n    \n      <ion-card>\n        <ion-card-content>\n            <div class="pick">\n                <img src="assets/image/20.png">\n                </div>\n        </ion-card-content>\n      </ion-card>\n\n      <div class="language_btn">\n        \n            <button ion-button>Know about us</button>\n        \n            <button ion-button>what we offer</button>\n        \n          </div>\n\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\proeventdetail\proeventdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ProeventdetailPage);

//# sourceMappingURL=proeventdetail.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Stores_stores__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proplanner_proplanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__balloondetail_balloondetail__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, navParams, commonprovider, http, loadingCtrl, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this._sanitizer = _sanitizer;
        this.currentdate = '';
        this.myDate = null;
        console.log("updated");
        this.currentdate = this.commonprovider.currentdate();
        this.myDate = this.currentdate;
        console.log(this.currentdate);
        this.trendingPro();
    }
    HomePage.prototype.getDate = function () {
        console.log(this.myDate);
        var days = JSON.stringify(this.commonprovider.days_prior(this.myDate));
        localStorage.setItem('days', days);
    };
    HomePage.prototype.trendingPro = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.get(_this.commonprovider.base_url + 'products/trending', options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.trending = data.data;
                for (var i in _this.trending) {
                    _this.trending[i].image = _this._sanitizer.bypassSecurityTrustUrl(_this.trending[i].image);
                }
                Loader.dismiss();
            }, function (err) {
                Loader.dismiss();
            });
        });
    };
    HomePage.prototype.productDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__balloondetail_balloondetail__["a" /* BalloondetailPage */], { product_id: id });
    };
    HomePage.prototype.service = function () {
        // this.navCtrl.push(ServicePage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Stores_stores__["a" /* StoresPage */]);
    };
    HomePage.prototype.location = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */]);
    };
    HomePage.prototype.proplanner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__proplanner_proplanner__["a" /* ProplannerPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\home\home.html"*/'<ion-header class="main_header">\n\n  <ion-navbar>\n\n    <ion-title>{{ \'HOME\' | translate }}</ion-title>\n\n    <!--<button ion-button end class="back" style="float:right;">\n      <ion-icon ios="ios-search" md="md-search"></ion-icon>\n    </button>-->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-scroll scroll="false" style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n\n\n  <div class="home_box">\n\n    <!-- <ion-slide style="background:url(assets/image/pick.png);"> -->\n\n    <div class="boxs" *ngIf="this?.trending">\n      <span style="color:#fff;text-shadow:0px 1px 6px #000;width:30%;">{{ \'trending\' | translate }}</span>\n      <ion-slides pager>\n\n        <ion-slide *ngFor="let prod of trending" style="background-size:cover;width:100%;">\n          <img [src]="prod.image" (click)="productDetails(prod._id)">\n        </ion-slide>\n\n        <ion-slide style="background-size:cover;width:100%;">\n          <!--background:url(assets/image/pick2.png);-->\n          <img src="assets/image/pick2.png">\n        </ion-slide>\n\n      </ion-slides>\n    </div>\n\n    <div class="boxs" style="background: url(assets/image/27.jpg);width: 100%;height: 100%;float: left;background-position: center;">\n     <div class="overlay"></div>\n      <span style="height:60px;">{{ \'plan_your_event\' | translate }}\n        <form class="date_format">\n         <!-- <input type="date" placeholder="dd/mm/yyyy"> -->\n         <ion-item>\n          <ion-datetime displayFormat="MM/DD/YYYY" max="2050-12-31" placeholder="mm/dd/yyyy" pickerFormat="MMM-DD-YYYY" [(ngModel)]="myDate" min="{{currentdate}}" [ngModelOptions]="{standalone: true}" (ionChange)="getDate()"></ion-datetime>\n        </ion-item>\n        </form>\n      </span>\n    </div>\n\n    <div class="boxs" (click)="service()" style="background: url(assets/image/28.jpg);width: 100%;height: 100%;float: left;background-position: center;">\n      <div class="overlay"></div>\n      <span>{{ \'make_ur_own\' | translate }}</span>\n    </div>\n\n    <div class="boxs" (click)="proplanner()"  style="background: url(assets/image/29.jpg);width: 100%;height: 100%;float: left;background-position: center;">\n      <div class="overlay"></div>\n      <span>{{ \'pro_event_planner\'| translate}}</span>\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_wishlist_wishlist__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addressdetail_addressdetail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_knowabout_knowabout__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_confirmation_confirmation__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_enterdetail_enterdetail__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mjevent_mjevent__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viewall_viewall__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_weoffer_weoffer__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_trendingdetail_trendingdetail__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_proeventdetail_proeventdetail__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_orderreview_orderreview__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_start_start__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_language_language__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_location_location__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Stores_stores__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_service_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_entertainment_entertainment__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_decoration_decoration__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_balloonprice_balloonprice__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_balloondetail_balloondetail__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_order_order__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_proplanner_proplanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_individualplanner_individualplanner__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_eventcompanies_eventcompanies__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_profile_profile__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_signup_signup__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_retrivepassword_retrivepassword__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_email_email__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_phone_phone__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_trackorder_trackorder__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_account_account__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_contactus_contactus__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_history_history__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_terms_terms__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_notification_notification__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_aboutorder_aboutorder__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_changepassword_changepassword__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pipes_eigonic_eigonic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_camera__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_ion_rating_ion_rating__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_enterdetail_enterdetail__["a" /* EnterdetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_addressdetail_addressdetail__["a" /* AddressdetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_orderreview_orderreview__["a" /* OrderreviewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_knowabout_knowabout__["a" /* KnowaboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_viewall_viewall__["a" /* ViewallPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_proeventdetail_proeventdetail__["a" /* ProeventdetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_mjevent_mjevent__["a" /* MjeventPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_weoffer_weoffer__["a" /* WeofferPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_trendingdetail_trendingdetail__["a" /* TrendingdetailPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_language_language__["a" /* LanguagePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_service_service__["a" /* ServicePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Stores_stores__["a" /* StoresPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_entertainment_entertainment__["a" /* EntertainmentPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_decoration_decoration__["a" /* DecorationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_balloonprice_balloonprice__["a" /* BalloonpricePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_balloondetail_balloondetail__["a" /* BalloondetailPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_trackorder_trackorder__["a" /* TrackorderPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_proplanner_proplanner__["a" /* ProplannerPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_individualplanner_individualplanner__["a" /* IndividualplannerPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_eventcompanies_eventcompanies__["a" /* EventcompaniesPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_retrivepassword_retrivepassword__["a" /* RetrivepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_email_email__["a" /* EmailPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_phone_phone__["a" /* PhonePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_aboutorder_aboutorder__["a" /* AboutorderPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_51__pipes_eigonic_eigonic__["a" /* Translator */],
            __WEBPACK_IMPORTED_MODULE_45__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_54__components_ion_rating_ion_rating__["a" /* IonRatingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_enterdetail_enterdetail__["a" /* EnterdetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_50__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/decoration/decoration.module#DecorationPageModule', name: 'DecorationPage', segment: 'decoration', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Stores/stores.module#StoresPageModule', name: 'StoresPage', segment: 'stores', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/individualplanner/individualplanner.module#IndividualplannerPageModule', name: 'IndividualplannerPage', segment: 'individualplanner', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/eventcompanies/eventcompanies.module#EventcompaniesPageModule', name: 'EventcompaniesPage', segment: 'eventcompanies', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/proplanner/proplanner.module#ProplannerPageModule', name: 'ProplannerPage', segment: 'proplanner', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service/service.module#ServicePageModule', name: 'ServicePage', segment: 'service', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/entertainment/entertainment.module#EntertainmentPageModule', name: 'EntertainmentPage', segment: 'entertainment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balloonprice/balloonprice.module#BalloonpricePageModule', name: 'BalloonpricePage', segment: 'balloonprice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewall/viewall.module#ViewallPageModule', name: 'ViewallPage', segment: 'viewall', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enterdetail/enterdetail.module#EnterdetailPageModule', name: 'EnterdetailPage', segment: 'enterdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderreview/orderreview.module#OrderreviewPageModule', name: 'OrderreviewPage', segment: 'orderreview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addressdetail/addressdetail.module#AddressdetailPageModule', name: 'AddressdetailPage', segment: 'addressdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balloondetail/balloondetail.module#BalloondetailPageModule', name: 'BalloondetailPage', segment: 'balloondetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aboutorder/aboutorder.module#AboutorderPageModule', name: 'AboutorderPage', segment: 'aboutorder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trackorder/trackorder.module#TrackorderPageModule', name: 'TrackorderPage', segment: 'trackorder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/phone/phone.module#PhonePageModule', name: 'PhonePage', segment: 'phone', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/retrivepassword/retrivepassword.module#RetrivepasswordPageModule', name: 'RetrivepasswordPage', segment: 'retrivepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/weoffer/weoffer.module#WeofferPageModule', name: 'WeofferPage', segment: 'weoffer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mjevent/mjevent.module#MjeventPageModule', name: 'MjeventPage', segment: 'mjevent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/knowabout/knowabout.module#KnowaboutPageModule', name: 'KnowaboutPage', segment: 'knowabout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trendingdetail/trendingdetail.module#TrendingdetailPageModule', name: 'TrendingdetailPage', segment: 'trendingdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/proeventdetail/proeventdetail.module#ProeventdetailPageModule', name: 'ProeventdetailPage', segment: 'proeventdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rating/rating.module#RaitingPageModule', name: 'RaitingPage', segment: 'rating', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_addressdetail_addressdetail__["a" /* AddressdetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_orderreview_orderreview__["a" /* OrderreviewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_knowabout_knowabout__["a" /* KnowaboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_viewall_viewall__["a" /* ViewallPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_proeventdetail_proeventdetail__["a" /* ProeventdetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_mjevent_mjevent__["a" /* MjeventPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_weoffer_weoffer__["a" /* WeofferPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_trendingdetail_trendingdetail__["a" /* TrendingdetailPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_language_language__["a" /* LanguagePage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_trackorder_trackorder__["a" /* TrackorderPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_service_service__["a" /* ServicePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Stores_stores__["a" /* StoresPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_entertainment_entertainment__["a" /* EntertainmentPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_decoration_decoration__["a" /* DecorationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_balloonprice_balloonprice__["a" /* BalloonpricePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_balloondetail_balloondetail__["a" /* BalloondetailPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_proplanner_proplanner__["a" /* ProplannerPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_individualplanner_individualplanner__["a" /* IndividualplannerPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_eventcompanies_eventcompanies__["a" /* EventcompaniesPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_retrivepassword_retrivepassword__["a" /* RetrivepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_email_email__["a" /* EmailPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_phone_phone__["a" /* PhonePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_aboutorder_aboutorder__["a" /* AboutorderPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_54__components_ion_rating_ion_rating__["a" /* IonRatingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_enterdetail_enterdetail__["a" /* EnterdetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_49__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_52__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_53__ionic_native_camera__["a" /* Camera */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_eigonic_eigonic__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LanguagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LanguagePage = (function () {
    function LanguagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LanguagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LanguagePage');
    };
    LanguagePage.prototype.location = function (lang) {
        console.log(lang);
        localStorage.setItem('lang', lang);
        __WEBPACK_IMPORTED_MODULE_3__pipes_eigonic_eigonic__["a" /* Translator */].switchLang(lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPage */]);
    };
    return LanguagePage;
}());
LanguagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-language',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\language\language.html"*/'<!--\n  Generated template for the LanguagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>language</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="spacer" style="height:15vh;float:left;width:100%;"></div>\n  \n  <div class="logo_box">\n  <img src="assets/image/logo2.png">\n  </div>\n\n  <div class="spacer" style="height:12vh;float:left;width:100%;"></div>\n\n  <div class="language_btn">\n\n    <button (click)="location(\'en\')" ion-button>English</button>\n\n    <button (click)="location(\'ar\')" ion-button> عربى </button>\n    <!--{{ \'ARABIC\' | translate}}-->\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\language\language.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], LanguagePage);

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__retrivepassword_retrivepassword__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, commonprovider, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.isRemember = false;
        this.data = '';
        if (localStorage.getItem('isRemember') != undefined || localStorage.getItem('isRemember') != null) {
            this.isRemember = localStorage.getItem('isRemember');
            console.log();
            this.data = {
                email: localStorage.getItem('email')
            };
        }
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.login = function (formdata) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            email: formdata.value.email.toLowerCase(),
            password: formdata.value.password,
        };
        var serialised = this.commonprovider.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            if (_this.isRemember == true) {
                localStorage.setItem('email', formdata.value.email);
                localStorage.setItem('isRemember', 'true');
            }
            else {
                if (localStorage.getItem('isRemember')) {
                    localStorage.removeItem('isRemember');
                    localStorage.removeItem('email');
                }
            }
            //  http://wedding-dost.us-east-1.elasticbeanstalk.com/api/users/login1
            _this.http.post(_this.commonprovider.base_url + 'users/login', serialised, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.message) {
                    _this.commonprovider.simpleToast(data.message);
                }
                else {
                    var msg = 'Logged in successfully';
                    if (localStorage.getItem('lang') == 'ar') {
                        msg = 'تم تسجيل الدخول بنجاح';
                    }
                    if (data.data.role != 'user') {
                        if (data.data.status == 1) {
                            localStorage.setItem('userdata', JSON.stringify(data.data));
                            localStorage.setItem('user_id', data.data._id);
                            _this.commonprovider.simpleToast(msg);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            _this.commonprovider.toastWithOption('Your account has not been activated yet. Please try again after sometime.');
                        }
                    }
                    else {
                        localStorage.setItem('userdata', JSON.stringify(data.data));
                        localStorage.setItem('user_id', data.data._id);
                        _this.commonprovider.simpleToast(msg);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
            }, function (err) {
                Loader.dismiss();
            });
        });
    };
    SigninPage.prototype.remeberMe = function (status) {
        console.log(status);
        if (status == true) {
            status = false;
        }
        else {
            status = true;
        }
        this.isRemember = status;
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
    };
    SigninPage.prototype.retrivepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__retrivepassword_retrivepassword__["a" /* RetrivepasswordPage */]);
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\signin\signin.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n\n    <ion-title style="width:100%;">{{ \'login\' | translate }}</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n<div style="height:4vh;float: left;width:100%;"></div>\n\n<div class="signin_box">\n  <form  #signinForm="ngForm" novalidate>\n\n    <div class="pin_location">\n        <!-- <ion-icon ios="ios-pin" md="md-pin"></ion-icon> -->\n        <img src="assets/image/lock1.png">\n    </div>\n\n    <ion-list>\n      \n        <ion-item>\n          <ion-input type="text" placeholder="{{ \'email\' | translate }}" [(ngModel)]="data.email" required pattern=\'^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\'\n            name=\'email\' #email="ngModel"></ion-input>\n        </ion-item>\n        <ion-label color="danger">\n          <div *ngIf="email.errors && (email.dirty || email.touched)">\n            <div [hidden]="!email.errors.required">\n              E-mail is required\n            </div>\n            <div [hidden]="!email.errors.pattern">\n              Invalid E-mail\n            </div>\n          </div>\n        </ion-label>\n      \n        <ion-item>\n          <ion-input type="password" placeholder="{{ \'pass\' | translate }}" [(ngModel)]="data.password" name="password" minlength=\'6\' #password="ngModel"></ion-input>\n        </ion-item>\n         <ion-label color="danger">\n          <div *ngIf="password.errors && (password.dirty || password.touched)">\n            <div [hidden]="!password.errors.required">\n              Password is required\n            </div>\n            <div [hidden]="!password.errors.minlength">\n              Minimum length should be 6\n            </div>\n          </div>\n        </ion-label>\n      \n      </ion-list>\n\n      <ion-item>\n        <ion-label>{{ \'remember\' | translate}}</ion-label>\n        <ion-checkbox color="dark" [checked]=\'isRemember\'  (click)=\'remeberMe(isRemember)\'></ion-checkbox>\n      </ion-item>\n\n      <button ion-button  type=\'submit\' (click)=\'login(signinForm)\' [disabled]=\'!signinForm.valid\'>{{\'done\' | translate}}</button>\n      <!--(click)="account()"-->\n     <div class="forgot_box"><a class="forgot_password" (click)="retrivepassword()">{{\'forgot\' | translate}}</a></div>\n\n      <div class="signup_btn">\n        <ion-grid style="padding: 0;">\n          <ion-row>\n            <ion-col col-8><span>{{\'noaccount\' | translate}}</span></ion-col>\n            <ion-col col-4> <button ion-button class="kya_kru_tera" (click)="signup()">{{\'signup\' | translate}}</button></ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n  </form>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 195,
	"./af.js": 195,
	"./ar": 196,
	"./ar-dz": 197,
	"./ar-dz.js": 197,
	"./ar-kw": 198,
	"./ar-kw.js": 198,
	"./ar-ly": 199,
	"./ar-ly.js": 199,
	"./ar-ma": 200,
	"./ar-ma.js": 200,
	"./ar-sa": 201,
	"./ar-sa.js": 201,
	"./ar-tn": 202,
	"./ar-tn.js": 202,
	"./ar.js": 196,
	"./az": 203,
	"./az.js": 203,
	"./be": 204,
	"./be.js": 204,
	"./bg": 205,
	"./bg.js": 205,
	"./bn": 206,
	"./bn.js": 206,
	"./bo": 207,
	"./bo.js": 207,
	"./br": 208,
	"./br.js": 208,
	"./bs": 209,
	"./bs.js": 209,
	"./ca": 210,
	"./ca.js": 210,
	"./cs": 211,
	"./cs.js": 211,
	"./cv": 212,
	"./cv.js": 212,
	"./cy": 213,
	"./cy.js": 213,
	"./da": 214,
	"./da.js": 214,
	"./de": 215,
	"./de-at": 216,
	"./de-at.js": 216,
	"./de-ch": 217,
	"./de-ch.js": 217,
	"./de.js": 215,
	"./dv": 218,
	"./dv.js": 218,
	"./el": 219,
	"./el.js": 219,
	"./en-au": 220,
	"./en-au.js": 220,
	"./en-ca": 221,
	"./en-ca.js": 221,
	"./en-gb": 222,
	"./en-gb.js": 222,
	"./en-ie": 223,
	"./en-ie.js": 223,
	"./en-nz": 224,
	"./en-nz.js": 224,
	"./eo": 225,
	"./eo.js": 225,
	"./es": 226,
	"./es-do": 227,
	"./es-do.js": 227,
	"./es.js": 226,
	"./et": 228,
	"./et.js": 228,
	"./eu": 229,
	"./eu.js": 229,
	"./fa": 230,
	"./fa.js": 230,
	"./fi": 231,
	"./fi.js": 231,
	"./fo": 232,
	"./fo.js": 232,
	"./fr": 233,
	"./fr-ca": 234,
	"./fr-ca.js": 234,
	"./fr-ch": 235,
	"./fr-ch.js": 235,
	"./fr.js": 233,
	"./fy": 236,
	"./fy.js": 236,
	"./gd": 237,
	"./gd.js": 237,
	"./gl": 238,
	"./gl.js": 238,
	"./gom-latn": 239,
	"./gom-latn.js": 239,
	"./he": 240,
	"./he.js": 240,
	"./hi": 241,
	"./hi.js": 241,
	"./hr": 242,
	"./hr.js": 242,
	"./hu": 243,
	"./hu.js": 243,
	"./hy-am": 244,
	"./hy-am.js": 244,
	"./id": 245,
	"./id.js": 245,
	"./is": 246,
	"./is.js": 246,
	"./it": 247,
	"./it.js": 247,
	"./ja": 248,
	"./ja.js": 248,
	"./jv": 249,
	"./jv.js": 249,
	"./ka": 250,
	"./ka.js": 250,
	"./kk": 251,
	"./kk.js": 251,
	"./km": 252,
	"./km.js": 252,
	"./kn": 253,
	"./kn.js": 253,
	"./ko": 254,
	"./ko.js": 254,
	"./ky": 255,
	"./ky.js": 255,
	"./lb": 256,
	"./lb.js": 256,
	"./lo": 257,
	"./lo.js": 257,
	"./lt": 258,
	"./lt.js": 258,
	"./lv": 259,
	"./lv.js": 259,
	"./me": 260,
	"./me.js": 260,
	"./mi": 261,
	"./mi.js": 261,
	"./mk": 262,
	"./mk.js": 262,
	"./ml": 263,
	"./ml.js": 263,
	"./mr": 264,
	"./mr.js": 264,
	"./ms": 265,
	"./ms-my": 266,
	"./ms-my.js": 266,
	"./ms.js": 265,
	"./my": 267,
	"./my.js": 267,
	"./nb": 268,
	"./nb.js": 268,
	"./ne": 269,
	"./ne.js": 269,
	"./nl": 270,
	"./nl-be": 271,
	"./nl-be.js": 271,
	"./nl.js": 270,
	"./nn": 272,
	"./nn.js": 272,
	"./pa-in": 273,
	"./pa-in.js": 273,
	"./pl": 274,
	"./pl.js": 274,
	"./pt": 275,
	"./pt-br": 276,
	"./pt-br.js": 276,
	"./pt.js": 275,
	"./ro": 277,
	"./ro.js": 277,
	"./ru": 278,
	"./ru.js": 278,
	"./sd": 279,
	"./sd.js": 279,
	"./se": 280,
	"./se.js": 280,
	"./si": 281,
	"./si.js": 281,
	"./sk": 282,
	"./sk.js": 282,
	"./sl": 283,
	"./sl.js": 283,
	"./sq": 284,
	"./sq.js": 284,
	"./sr": 285,
	"./sr-cyrl": 286,
	"./sr-cyrl.js": 286,
	"./sr.js": 285,
	"./ss": 287,
	"./ss.js": 287,
	"./sv": 288,
	"./sv.js": 288,
	"./sw": 289,
	"./sw.js": 289,
	"./ta": 290,
	"./ta.js": 290,
	"./te": 291,
	"./te.js": 291,
	"./tet": 292,
	"./tet.js": 292,
	"./th": 293,
	"./th.js": 293,
	"./tl-ph": 294,
	"./tl-ph.js": 294,
	"./tlh": 295,
	"./tlh.js": 295,
	"./tr": 296,
	"./tr.js": 296,
	"./tzl": 297,
	"./tzl.js": 297,
	"./tzm": 298,
	"./tzm-latn": 299,
	"./tzm-latn.js": 299,
	"./tzm.js": 298,
	"./uk": 300,
	"./uk.js": 300,
	"./ur": 301,
	"./ur.js": 301,
	"./uz": 302,
	"./uz-latn": 303,
	"./uz-latn.js": 303,
	"./uz.js": 302,
	"./vi": 304,
	"./vi.js": 304,
	"./x-pseudo": 305,
	"./x-pseudo.js": 305,
	"./yo": 306,
	"./yo.js": 306,
	"./zh-cn": 307,
	"./zh-cn.js": 307,
	"./zh-hk": 308,
	"./zh-hk.js": 308,
	"./zh-tw": 309,
	"./zh-tw.js": 309
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 400;

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_language_language__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_eigonic_eigonic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_langBundle__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    //
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_language_language__["a" /* LanguagePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            var lang = localStorage.getItem('lang');
            if (lang) {
                __WEBPACK_IMPORTED_MODULE_6__pipes_eigonic_eigonic__["a" /* Translator */].init(__WEBPACK_IMPORTED_MODULE_7__app_langBundle__["a" /* LangBundle */].MSG, lang);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6__pipes_eigonic_eigonic__["a" /* Translator */].init(__WEBPACK_IMPORTED_MODULE_7__app_langBundle__["a" /* LangBundle */].MSG, 'ar');
            }
            if (localStorage.getItem('user_id')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangBundle; });
var LangBundle = (function () {
    function LangBundle() {
    }
    return LangBundle;
}());

LangBundle.MSG = {
    "en": {
        HOME: 'Home',
        EXPORT: 'Export',
        REPORTS: 'Reports',
        SETTINGS: 'Settings',
        ARABIC: 'Arabic',
        Choose_your_location: 'Choose your location',
        D_and_K: 'Dammam & Khobar',
        Jubail: 'Jubail',
        use_current_loc: 'USE MY CURRENT LOCATION',
        plan_your_event: 'Plan your event',
        trending: 'Trending',
        make_ur_own: 'Make Your Own',
        pro_event_planner: 'Professional Event Planner',
        categories: 'Categories',
        category: 'Category',
        subcategory: 'Subcategory',
        subcategories: 'Subcategories',
        Products: 'Products',
        Services: 'Services',
        sort: 'Sort By',
        Stores: 'Stores',
        Loginprofile: 'Please login to view your account.',
        Logincart: 'Please login to view your cart.',
        Loginwish: 'Please login to view your wishlist.',
        wishlist: 'Wishlist',
        login: 'Log In',
        email: 'Email',
        pass: 'Password',
        remember: 'Remember me',
        done: 'Done',
        noaccount: "Don't have an account?",
        signup: 'Sign up',
        forgot: 'Forgot your password?',
        account: 'Account',
        myaccount: 'My account',
        myorders: 'My orders',
        notifications: 'Notifications',
        myprofile: 'My Profile',
        location: 'Location',
        mychat: 'My Chat',
        contactus: 'Contact Us',
        history: 'History',
        changepass: 'Change Password',
        logout: 'Logout',
        indiv_planner: 'Individual Planners',
        event_company: 'Event Organizing Companies',
        no_results: 'No results found.',
        description: 'Description',
        ordernow: 'Order Now',
        chat_with_us: 'Chat with us',
        price: 'Price',
        vendor: 'Vendor',
        name: 'Name',
        phone_number: 'Phone Number',
        confirm_pass: 'Confirm Password',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        join: 'Join',
        terms_n_cond: 'Terms & Conditions',
        Iagree: 'I agree'
    },
    "ar": {
        HOME: 'الرئيسية',
        REPORTS: 'التقارير',
        EXPORT: 'Export',
        PROFILE: 'الملف الشخصي',
        SETTINGS: 'الإعدادات',
        ARABIC: 'عربى',
        Choose_your_location: 'ااختر موق',
        D_and_K: 'الدمام و الخبر',
        Jubail: 'الجبيل',
        use_current_loc: 'استخدام موقعي الحالي',
        plan_your_event: 'خطط لحدثك',
        trending: 'الشائع',
        make_ur_own: 'اصنع خاصتك',
        pro_event_planner: 'المهنية مخطط الحدث',
        categories: 'الاقسام',
        category: 'الفئة',
        subcategory: 'فرعية',
        subcategories: 'الفئات الفرعية',
        Products: 'منتجات',
        Services: 'خدمات',
        sort: 'ترتيب حسب',
        Stores: 'مخازن',
        Loginprofile: 'الرجاء تسجيل الدخول لعرض حسابك.',
        Logincart: 'الرجاء تسجيل الدخول لعرض سلة التسوق.',
        Loginwish: 'الرجاء تسجيل الدخول لعرض قائمة الأمنيات.',
        wishlist: 'الأماني',
        login: 'تسجيل الدخول',
        email: 'البريد الإلكتروني',
        pass: 'كلمه السر',
        remember: 'تذكرنى',
        done: 'فعله',
        noaccount: 'ليس لديك حساب؟',
        signup: 'سجل',
        forgot: 'نسيت رقمك السري؟',
        account: 'الحساب',
        myaccount: 'حسابي',
        myorders: 'تتبع طلبي',
        notifications: 'إخطارات',
        myprofile: 'ملفي',
        location: 'موقعك',
        mychat: 'دردشة',
        contactus: 'اتصل بنا',
        history: 'التاريخ',
        changepass: 'تغيير كلمة السر',
        logout: 'الخروج',
        indiv_planner: 'المخططون الأفراد',
        event_company: 'الشركات تنظيم الحدث',
        no_results: 'لا توجد نتائج',
        description: 'وصف',
        ordernow: 'اطلب الان',
        chat_with_us: 'دردش معنا',
        price: "السعر",
        vendor: 'بائع',
        name: 'اسم',
        phone_number: 'رقم الهاتف',
        confirm_pass: 'تأكيد كلمة المرور',
        gender: 'جنس',
        male: 'الذكر',
        female: 'إناثا',
        join: 'انضم',
        terms_n_cond: 'البنود و الظروف',
        Iagree: 'أنا أتفق'
    }
};
//# sourceMappingURL=langBundle.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonRatingComponent = (function () {
    function IonRatingComponent() {
        this.numStars = 5;
        this.readOnly = true;
        this.value = 5;
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.stars = [];
    }
    IonRatingComponent.prototype.ngAfterViewInit = function () {
        this.calc();
    };
    IonRatingComponent.prototype.calc = function () {
        this.stars = [];
        var tmp = this.value;
        for (var i = 0; i < this.numStars; i++, tmp--)
            if (tmp >= 1)
                this.stars.push("star");
            else if (tmp < 1 && tmp > 0)
                this.stars.push("star-half");
            else
                this.stars.push("star-outline");
    };
    IonRatingComponent.prototype.starClicked = function (index) {
        if (!this.readOnly) {
            this.value = index + 1;
            this.calc();
            this.clicked.emit(this.value);
        }
    };
    return IonRatingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRatingComponent.prototype, "numStars", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], IonRatingComponent.prototype, "readOnly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRatingComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], IonRatingComponent.prototype, "clicked", void 0);
IonRatingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ion-rating',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\components\ion-rating\ion-rating.html"*/'<ion-grid no-padding no-margin class="ion-rating-container">\n    <ion-row>\n        <ion-col text-center *ngFor="let star of stars; let i = index" tappable (click)="starClicked(i)">\n            <ion-icon [name]="star"></ion-icon>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\components\ion-rating\ion-rating.html"*/
    }),
    __metadata("design:paramtypes", [])
], IonRatingComponent);

//# sourceMappingURL=ion-rating.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balloondetail_balloondetail__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicePage = (function () {
    function ServicePage(navCtrl, navParams, http, commonprovider, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.isSwitched = false;
        this.pet = 'puppies';
        this.lang = localStorage.getItem('lang');
        this.vendorname = this.navParams.get('name');
        console.log(this.vendorname);
        var vendor_ids = this.navParams.get('vendorid');
        console.log(vendor_ids);
        this.vendor_products(vendor_ids);
        //this.allCategories();
    }
    ServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicePage');
    };
    ServicePage.prototype.vendor_products = function (vendor_ids) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var id = {
            vendorid: vendor_ids
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'products/vendor_id', id, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                _this.products = data;
                // this.stores = [];
                // this.services = [];
                // for(let i in data){
                //     if(data[i].type == "service"){
                //         this.services.push(data[i])
                //     } else if (data[i].type == "product"){
                //        this.stores.push(data[i])
                //     }
                // }
                // this.categories_1 = data;
                if (_this.products.length == 0) {
                    _this.commonprovider.simpleToast("No products found");
                }
            }, function (err) {
                Loader.dismiss();
                _this.commonprovider.simpleToast('An error occured. Try again');
            });
        });
    };
    ServicePage.prototype.addtoWish = function (prod_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            productid: prod_id,
            userid: localStorage.getItem('user_id'),
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'wishlists/add', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.events.publish('wish');
                    _this.commonprovider.simpleToast("Added to wishlist");
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    ServicePage.prototype.balloondetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__balloondetail_balloondetail__["a" /* BalloondetailPage */], { product_id: id });
    };
    ServicePage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return ServicePage;
}());
ServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\service\service.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n    <ion-title *ngIf=\'lang == "en"\'>{{vendorname}}</ion-title>\n    <ion-title *ngIf=\'lang == "ar"\'>{{vendorname}}</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <ion-grid style="padding:0px;">\n        <ion-row>\n          <ion-col col-6  *ngFor=\'let prods of products\'>\n            <!--(click)="balloondetail()"-->\n            <div class="price_box">\n              <img [src]="prods.image" (click)="balloondetail(prods._id)">\n              <ion-icon ios="ios-heart" md="md-heart" class="heart1" (click)="addtoWish(prods._id)"></ion-icon>\n            </div>\n\n            <div class="content1">\n              <h3 *ngIf=\'lang == "en"\'>{{prods.name}}</h3>\n              <h3 *ngIf=\'lang == "ar"\'>{{prods.ar_name}}</h3>\n              <span>{{prods.vendorname}}</span>\n              <h4>SR {{prods.price}}</h4>\n            </div>\n          </ion-col>\n\n          <!--<ion-col col-6>\n              <div class="price_box">\n                  <img src="assets/image/2.jpg">\n                  <ion-icon ios="ios-heart-outline" md="md-heart-outline" class="heart"></ion-icon>\n                </div>\n\n                <div class="content1">\n                    <h3>Balloon 2</h3>\n                    <span>Vendor name</span>\n                    <h4>SR 200</h4>\n                  </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6>\n              <div class="price_box">\n                <img src="assets/image/3.jpg">\n                <ion-icon ios="ios-heart-outline" md="md-heart-outline" class="heart"></ion-icon>\n              </div>\n  \n              <div class="content1">\n                <h3>Balloon 3</h3>\n                <span>Vendor name</span>\n                <h4>SR 750</h4>\n              </div>\n            </ion-col>\n  \n            <ion-col col-6>\n                <div class="price_box">\n                    <img src="assets/image/4.jpg">\n                    <ion-icon ios="ios-heart-outline" md="md-heart-outline" class="heart"></ion-icon>\n                  </div>\n  \n                  <div class="content1">\n                      <h3>Balloon 4</h3>\n                      <span>Vendor name</span>\n                      <h4>SR 520</h4>\n                    </div>\n            </ion-col>-->\n          </ion-row>\n      </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\service\service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], ServicePage);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addressdetail_addressdetail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enterdetail_enterdetail__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ViewallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ViewallPage = (function () {
    function ViewallPage(navCtrl, navParams, commonprovider, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.user_id = localStorage.getItem('user_id');
        //this.view_addrs();
    }
    ViewallPage.prototype.ionViewDidEnter = function () {
        this.view_addrs();
    };
    ViewallPage.prototype.doRefresh = function (refresher) {
        this.view_addrs();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ViewallPage.prototype.addressdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addressdetail_addressdetail__["a" /* AddressdetailPage */]);
    };
    ViewallPage.prototype.view_addrs = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            userid: this.user_id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'address/viewall', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data.data);
                if (data.status == true) {
                    _this.addresses = data.data;
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ViewallPage.prototype.enterdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enterdetail_enterdetail__["a" /* EnterdetailPage */], { edit: 0 });
    };
    ViewallPage.prototype.edit = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enterdetail_enterdetail__["a" /* EnterdetailPage */], { edit: 1, addrs_id: id });
    };
    ViewallPage.prototype.review = function (id) {
        console.log(id);
        // this.navCtrl.push(OrderreviewPage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addressdetail_addressdetail__["a" /* AddressdetailPage */], { addrs_id: id });
    };
    return ViewallPage;
}());
ViewallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewall',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\viewall\viewall.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>Change Address</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list radio-group>\n      \n        <div class="detail" *ngFor="let addrs of addresses">\n            <h3>{{addrs.fname}} {{addrs.lname}}</h3> <button ion-button class="edit" (click)="edit(addrs._id)">Edit</button>\n            <p>{{addrs.address}}</p>\n            <p>{{addrs.street}}, {{addrs.city}}, {{addrs.country}}</p>\n            <p>{{addrs.mobileno}}</p>\n          <ion-item>\n              <ion-radio [value]="addrs._id" (ionSelect)="review(addrs._id)"></ion-radio>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <div class="button0">\n        <ion-grid style="padding:0px;">\n          <ion-row>\n            <ion-col col-12 style="padding-left:0px;"><button ion-button (click)="enterdetail()">Add new address</button></ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\viewall\viewall.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
], ViewallPage);

//# sourceMappingURL=viewall.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enterdetail_enterdetail__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewall_viewall__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orderreview_orderreview__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AddressdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddressdetailPage = (function () {
    function AddressdetailPage(navCtrl, navParams, http, loadingCtrl, commonprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.commonprovider = commonprovider;
        var id = this.navParams.get('addrs_id');
        console.log(id);
        this.fetchDetails(id);
    }
    AddressdetailPage.prototype.fetchDetails = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            addressid: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'address/viewbyid', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status == true) {
                    console.log(data.data);
                    _this.addrs = data.data;
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                console.log(err);
                Loader.dismiss();
                _this.commonprovider.simpleToast('Something went wrong. Please try again');
            });
        });
    };
    AddressdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressdetailPage');
    };
    AddressdetailPage.prototype.cart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    AddressdetailPage.prototype.enterdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enterdetail_enterdetail__["a" /* EnterdetailPage */]);
    };
    AddressdetailPage.prototype.viewall = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewall_viewall__["a" /* ViewallPage */]);
    };
    AddressdetailPage.prototype.orderreview = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__orderreview_orderreview__["a" /* OrderreviewPage */], { addrs_id: id });
    };
    return AddressdetailPage;
}());
AddressdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addressdetail',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\addressdetail\addressdetail.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n    <!--<button ion-button class="back" (click)="cart()">\n      <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n    </button>-->\n\n    <ion-title>Address Detail</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content *ngIf="this?.addrs" padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n<div class="detail">\n  <h3>{{addrs.fname}} {{addrs.lname}}</h3>\n  <p>{{addrs.address}}</p>\n  <p>{{addrs.street}}, {{addrs.city}}, {{addrs.country}}</p>\n  <p>{{addrs.mobileno}}</p>\n</div>\n\n<div class="button0">\n  <ion-grid style="padding:0px;">\n    <ion-row>\n      <ion-col col-6 style="padding-left:0px;"><button ion-button (click)="viewall()">View all</button></ion-col>\n      <ion-col col-6 style="padding-right:0px;" (click)="enterdetail()"><button ion-button>Add new</button></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 style="padding-right:0px;" (click)="orderreview(addrs._id)"><button ion-button>Order Review</button></ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\addressdetail\addressdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */]])
], AddressdetailPage);

//# sourceMappingURL=addressdetail.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balloondetail_balloondetail__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.balloondetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__balloondetail_balloondetail__["a" /* BalloondetailPage */]);
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\chat\chat.html"*/'<ion-header class="main_header">\n    <ion-navbar>  \n      <ion-title>Happy Balloons</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n<div class="chat_box">\n\n  <div class="right_box">\n    <p>hello , i\'d like to order the same product but with differant colors. is it possible?</p>\n  </div>\n  <div class="left_box">\n      <p>of course, what colors do you wish for?</p>\n    </div>\n    <div class="right_box">\n        <p>hello , i\'d like to order the same product but with differant colors. is it possible?</p>\n      </div>\n      <div class="left_box">\n          <p>of course, what colors do you wish for?</p>\n        </div>\n        <div class="right_box">\n            <p>hello , i\'d like to order the same product but with differant colors. is it possible?</p>\n          </div>\n          <div class="left_box">\n              <p>of course, what colors do you wish for?</p>\n            </div>\n            <div class="right_box">\n                <p>hello , i\'d like to order the same product but with differant colors. is it possible?</p>\n              </div>\n              <div class="left_box">\n                  <p>of course, what colors do you wish for?</p>\n                </div>\n\n</div>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n\n<form class="chat_input">\n  <button clear ion-button class="attach"><ion-icon ios="ios-attach" md="md-attach"></ion-icon></button> <ion-input type="text" value=""></ion-input><img src="assets/image/send.png" class="send"><ion-icon ios="ios-mic" md="md-mic" class="mick"></ion-icon>\n</form>\n</ion-toolbar>\n</ion-footer>\n  \n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetrivepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_email__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phone_phone__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RetrivepasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RetrivepasswordPage = (function () {
    function RetrivepasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RetrivepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RetrivepasswordPage');
    };
    RetrivepasswordPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    RetrivepasswordPage.prototype.email = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__email_email__["a" /* EmailPage */]);
    };
    RetrivepasswordPage.prototype.phoneverify = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__phone_phone__["a" /* PhonePage */]);
    };
    return RetrivepasswordPage;
}());
RetrivepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-retrivepassword',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\retrivepassword\retrivepassword.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>Log In</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <div class="spacer" style="height:4vh;float:left;width:100%;"></div>\n<span class="heading">Retrive Password</span>\n    <div class="spacer" style="height:4vh;float:left;width:100%;"></div>\n    <img class="lock" src="assets/image/lock.png">\n      <div class="professional_event_btn">\n    \n        <button (click)="email()" ion-button><ion-icon ios="ios-mail" md="md-mail" class="mail_icn"></ion-icon>Email</button>\n    \n        <button (click)="phoneverify()" ion-button><ion-icon ios="ios-call" md="md-call" class="mail_icn"></ion-icon>Phone</button>\n    \n      </div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\retrivepassword\retrivepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RetrivepasswordPage);

//# sourceMappingURL=retrivepassword.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProplannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__individualplanner_individualplanner__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventcompanies_eventcompanies__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProplannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProplannerPage = (function () {
    function ProplannerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProplannerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProplannerPage');
    };
    ProplannerPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ProplannerPage.prototype.individualplanner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__individualplanner_individualplanner__["a" /* IndividualplannerPage */]);
    };
    ProplannerPage.prototype.eventcompanies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventcompanies_eventcompanies__["a" /* EventcompaniesPage */]);
    };
    return ProplannerPage;
}());
ProplannerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-proplanner',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\proplanner\proplanner.html"*/'<ion-header class="main_header">\n    \n      <ion-navbar>\n    \n        <ion-title>{{ \'pro_event_planner\' | translate}}</ion-title>\n\n      </ion-navbar>\n    \n    </ion-header>\n    \n    <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n    \n      <div class="spacer" style="height:26vh;float:left;width:100%;"></div>\n      \n        <div class="professional_event_btn">\n      \n          <button (click)="individualplanner()" ion-button>{{ \'indiv_planner\' | translate}}</button>\n      \n          <button (click)="eventcompanies()" ion-button>{{\'event_company\' | translate}}</button>\n      \n        </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\proplanner\proplanner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ProplannerPage);

//# sourceMappingURL=proplanner.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewall_viewall__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartPage = (function () {
    function CartPage(navCtrl, navParams, commonprovider, http, nav, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.http = http;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.noProducts = true;
        this.user_id = localStorage.getItem('user_id');
        this.lang = localStorage.getItem('lang');
        this.allProducts(this.user_id);
    }
    CartPage.prototype.doRefresh = function (refresher) {
        this.allProducts(this.user_id);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    CartPage.prototype.allProducts = function (userid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var obj = { userid: userid };
        var serialised = this.commonprovider.serializeObj(obj);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        //
        //  Loader.present().then(() => {
        this.http.post(this.commonprovider.base_url + 'carts/showCart', obj, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            // Loader.dismiss()
            _this.products = [];
            if (data.status == true) {
                _this.products = data.data;
                ////
                var total = 0;
                for (var i = 0; i < _this.products.length; i++) {
                    var product = _this.products[i];
                    total += (product.product_info.price * product.quantity);
                }
                _this.total = total;
                ///
                if (_this.products.length > 0) {
                    _this.noProducts = false;
                }
                else {
                    _this.noProducts = true;
                }
            }
            else {
                _this.commonprovider.simpleToast("Could not load products...");
            }
        }, function (err) {
            _this.commonprovider.simpleToast("Oops! Something went wrong!");
            //  Loader.dismiss()
        });
        // })
    };
    CartPage.prototype.updateQty = function (cartid, quantity) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var obj = {
            _id: cartid,
            qty: quantity
        };
        var serialised = this.commonprovider.serializeObj(obj);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'carts/updateQty', obj, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                _this.allProducts(_this.user_id);
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    CartPage.prototype.incQty = function (index, cartid) {
        this.products[index].quantity = JSON.parse(this.products[index].quantity) + 1;
        var qty = this.products[index].quantity;
        this.updateQty(cartid, qty);
    };
    CartPage.prototype.decQty = function (index, cartid) {
        if (this.products[index].quantity > 1) {
            this.products[index].quantity = JSON.parse(this.products[index].quantity) - 1;
            var qty = this.products[index].quantity;
            this.updateQty(cartid, qty);
        }
    };
    CartPage.prototype.removeItem = function (cartid) {
        var _this = this;
        console.log(cartid);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var obj = {
            cartid: cartid,
        };
        var serialised = this.commonprovider.serializeObj(obj);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'carts/deleteproduct', obj, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.commonprovider.simpleToast(data.message);
                    _this.products = [];
                    _this.allProducts(_this.user_id);
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    CartPage.prototype.saveCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__viewall_viewall__["a" /* ViewallPage */]);
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\cart\cart.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n        <ion-title>Cart</ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <div class="wishlist_box">\n        <div class="wbox" *ngFor="let p of products; let i = index" [attr.data-index]=\'i\'>\n          \n            <ion-thumbnail item-start>\n                <img [src]="products[i].product_info.image">\n            </ion-thumbnail>\n            <!--{{product.product_info | json}}-->\n            <div class="content11">\n                <h2>{{products[i].product_info.name}}</h2>\n                <p style="color:#dab966;margin: 4px 0 4px 0 !important;width:44%;float:left">Price: {{products[i].product_info.price}}SR</p>\n                <span item-end style="font-size: 13px;margin:4px 0;color: #d7b359;width: 36%;float:right;text-align: right;">{{products[i].product_info.price}}SR x {{products[i].quantity}}</span>\n                <h6 style="margin:0 0 10px 0;">{{products[i].product_info.created_at | date}}</h6>\n\n\n                <div class="plus_min">\n                    <span class="min">\n                        <button ion-button small (click)="decQty(i,products[i]._id)"><ion-icon ios="ios-remove" md="md-remove" style="font-size:20px;"></ion-icon></button>\n                    </span>\n                    <span class="quantity_input">\n                        <ion-input type="number" min="1" placeholder="1"  [value]="products[i].quantity"></ion-input>\n                    </span>\n                    <span class="plus">\n                        <button ion-button small (click)="incQty(i,products[i]._id)"><ion-icon ios="ios-add" md="md-add" style="font-size:20px;" ></ion-icon></button>\n                    </span>\n                </div>\n            </div>\n            <button class="close" clear (click)="removeItem(products[i]._id)"><ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon></button>\n        </div>\n        <div class="wbox" *ngIf="noProducts == true" style="text-align:center"> Your cart is empty. </div>\n    </div>\n    <div style="width:100%;float:left;height: 4vh;"></div>\n\n    <div class="center1" *ngIf="noProducts != true">\n        <div class="last_btn">\n            <ion-grid style="padding:0;">\n                <ion-row>\n                    <ion-col col-6 style="padding:0;"><button clear ion-button (click)="saveCart()">Done</button></ion-col>\n                    <ion-col col-6 style="padding:0;"><button clear ion-button class="rr">SR {{total}}</button></ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n\n    <div style="width:100%;float:left;height: 4vh;"></div>\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlist_wishlist__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(nav, alertCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.selectedIndex = 1;
        this.selectedIndex = 1;
        // to disabled tab4Root 
        if (localStorage.getItem('user_id')) {
            this.user_id = localStorage.getItem('user_id');
            this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__account_account__["a" /* AccountPage */];
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__wishlist_wishlist__["a" /* WishlistPage */];
            this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */];
        }
        this.lang = localStorage.getItem('lang');
        if (this.lang == 'en') {
            this.cancel = 'Cancel';
            this.login = 'Login';
        }
        else {
            this.cancel = 'إلغاء';
            this.login = 'تسجيل الدخول';
        }
    }
    TabsPage.prototype.tabIndex = function (event) {
        var buttonId = event.id.split('-')[1];
        console.log(buttonId);
        if (buttonId == 3) {
            if (localStorage.getItem('user_id')) {
                this.user_id = localStorage.getItem('user_id');
                this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__account_account__["a" /* AccountPage */];
            }
            else {
                if (this.lang == 'en') {
                    this.showAlert('Please log in to view your account.');
                }
                else {
                    this.showAlert('الرجاء تسجيل الدخول لعرض حسابك.');
                }
            }
        }
        else if (buttonId == 0) {
            if (localStorage.getItem('user_id')) {
                this.user_id = localStorage.getItem('user_id');
                this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__wishlist_wishlist__["a" /* WishlistPage */];
            }
            else {
                if (this.lang == 'en') {
                    this.showAlert('Please log in to view your wishlist.');
                }
                else {
                    this.showAlert('الرجاء تسجيل الدخول لعرض قائمة الأمنيات.');
                }
            }
        }
        else if (buttonId == 2) {
            if (localStorage.getItem('user_id')) {
                this.user_id = localStorage.getItem('user_id');
                this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */];
            }
            else {
                if (this.lang == 'en') {
                    this.showAlert('Please log in to view your cart.');
                }
                else {
                    this.showAlert('الرجاء تسجيل الدخول لعرض سلة التسوق.');
                }
            }
        }
    };
    TabsPage.prototype.showAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            message: message,
            buttons: [
                {
                    text: this.cancel,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: this.login,
                    handler: function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */]);
                        _this.nav.popToRoot();
                    }
                }
            ]
        });
        alert.present();
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex=\'{{selectedIndex}}\' (ionChange)=\'tabIndex($event)\'>\n  <ion-tab [root]="this?.tab1Root" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="home"></ion-tab>  \n  <ion-tab [root]="tab3Root" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="this?.tab4Root" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalloonpricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balloondetail_balloondetail__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the BalloonpricePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BalloonpricePage = (function () {
    function BalloonpricePage(navCtrl, navParams, commonprovider, http, loadingCtrl, nav, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.events = events;
        this.lang = localStorage.getItem('lang');
        this.subcategory_name = this.navParams.get('name');
        this.subcategory_ar_name = this.navParams.get('ar_name');
        var subcategoryid = this.navParams.get('id');
        console.log(subcategoryid);
        var days = JSON.parse(localStorage.getItem("days"));
        var type = this.navParams.get('type');
        if (days) {
            this.makeYourPlan(subcategoryid, days, type);
        }
        else {
            this.allProducts(subcategoryid, type);
        }
    }
    BalloonpricePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalloonpricePage');
    };
    BalloonpricePage.prototype.makeYourPlan = function (id, days_prior, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            subcategoryid: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'products/bySubcategory', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    var allPros = data.data;
                    var array = [];
                    for (var i in allPros) {
                        console.log(allPros[i].days_prior);
                        console.log(days_prior);
                        if (allPros[i].days_prior != undefined) {
                            console.log(2);
                            if (days_prior > allPros[i].days_prior) {
                                console.log(4);
                                array.push(allPros[i]);
                            }
                            else {
                                console.log(5);
                            }
                        }
                        else {
                            array.push(allPros[i]);
                            console.log(3);
                        }
                    }
                    _this.products = array;
                    console.log(_this.products);
                    if (_this.products.length == 0) {
                        if (type == 'service') {
                            var name = 'services';
                        }
                        else {
                            var name = 'products';
                        }
                        _this.commonprovider.toastWithOption("Sorry. No " + name + " available on your selected date.");
                    }
                }
                else {
                    _this.commonprovider.simpleToast("Could not load" + name + "...");
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    BalloonpricePage.prototype.allProducts = function (id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            subcategoryid: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'products/bySubcategory', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.products = data.data;
                    if (data.data.length == 0) {
                        if (type == 'service') {
                            var name = 'services';
                        }
                        else {
                            var name = 'products';
                        }
                        _this.commonprovider.toastWithOption("Sorry. No " + name + " available on your selected date.");
                        _this.commonprovider.simpleToast("Sorry. No " + name + " available right now.");
                    }
                }
                else {
                    _this.commonprovider.simpleToast("Could not load products...");
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    BalloonpricePage.prototype.addtoWish = function (prod_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            productid: prod_id,
            userid: localStorage.getItem('user_id'),
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'wishlists/add', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.status == true) {
                    _this.events.publish('wish');
                    _this.commonprovider.simpleToast("Added to wishlist");
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                _this.commonprovider.simpleToast("Oops! Something went wrong!");
                Loader.dismiss();
            });
        });
    };
    BalloonpricePage.prototype.decoration = function () {
        this.navCtrl.pop();
        //this.navCtrl.push(EntertainmentPage);
    };
    BalloonpricePage.prototype.balloondetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__balloondetail_balloondetail__["a" /* BalloondetailPage */], { product_id: id });
    };
    return BalloonpricePage;
}());
BalloonpricePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-balloonprice',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\balloonprice\balloonprice.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n    <ion-title *ngIf=\'lang == "en"\'>{{subcategory_name}}</ion-title>\n    <ion-title *ngIf=\'lang == "ar"\'>{{subcategory_ar_name}}</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <ion-grid style="padding:0px;">\n        <ion-row>\n          <ion-col col-6  *ngFor=\'let prods of products\'>\n            <!--(click)="balloondetail()"-->\n            <div class="price_box">\n              <img [src]="prods.image" (click)="balloondetail(prods._id)">\n              <ion-icon ios="ios-heart" md="md-heart" class="heart1" (click)="addtoWish(prods._id)"></ion-icon>\n            </div>\n\n            <div class="content1">\n              <h3 *ngIf=\'lang == "en"\'>{{prods.name}}</h3>\n              <h3 *ngIf=\'lang == "ar"\'>{{prods.ar_name}}</h3>\n              <span>{{prods.vendorname}}</span>\n              <h4>SR {{prods.price}}</h4>\n            </div>\n          </ion-col>\n\n          <!--<ion-col col-6>\n              <div class="price_box">\n                  <img src="assets/image/2.jpg">\n                  <ion-icon ios="ios-heart-outline" md="md-heart-outline" class="heart"></ion-icon>\n                </div>\n\n                <div class="content1">\n                    <h3>Balloon 2</h3>\n                    <span>Vendor name</span>\n                    <h4>SR 200</h4>\n                  </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6>\n              <div class="price_box">\n                <img src="assets/image/3.jpg">\n                <ion-icon ios="ios-heart-outline" md="md-heart-outline" class="heart"></ion-icon>\n              </div>\n  \n              <div class="content1">\n                <h3>Balloon 3</h3>\n                <span>Vendor name</span>\n                <h4>SR 750</h4>\n              </div>\n            </ion-col>\n  \n            <ion-col col-6>\n                <div class="price_box">\n                    <img src="assets/image/4.jpg">\n                    <ion-icon ios="ios-heart-outline" md="md-heart-outline" class="heart"></ion-icon>\n                  </div>\n  \n                  <div class="content1">\n                      <h3>Balloon 4</h3>\n                      <span>Vendor name</span>\n                      <h4>SR 520</h4>\n                    </div>\n            </ion-col>-->\n          </ion-row>\n\n      </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\balloonprice\balloonprice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], BalloonpricePage);

//# sourceMappingURL=balloonprice.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addressdetail_addressdetail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewall_viewall__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EnterdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EnterdetailPage = (function () {
    function EnterdetailPage(navCtrl, navParams, commonprovider, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.title = 'Enter details';
        this.data = '';
        this.user_id = localStorage.getItem('user_id');
        this.edit = this.navParams.get('edit');
        if (this.edit == 1) {
            this.title = 'Edit address';
            this.address_id = this.navParams.get('addrs_id');
            console.log(this.address_id);
            this.fetchDetails(this.address_id);
        }
    }
    EnterdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterdetailPage');
    };
    EnterdetailPage.prototype.fetchDetails = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            addressid: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'address/viewbyid', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status == true) {
                    console.log(data.data);
                    _this.data = data.data;
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                console.log(err);
                Loader.dismiss();
                _this.commonprovider.simpleToast('Something went wrong. Please try again');
            });
        });
    };
    EnterdetailPage.prototype.add_addrs = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        formdata.value.userid = this.user_id; // add user id in formdata
        console.log(formdata.value);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'address/add', formdata.value, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status == true) {
                    _this.commonprovider.simpleToast(data.message);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewall_viewall__["a" /* ViewallPage */]);
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                console.log(err);
                Loader.dismiss();
            });
        });
    };
    EnterdetailPage.prototype.edit_addrs = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        formdata.value.addressid = this.address_id; // add user id in formdata
        console.log(formdata.value);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'address/editaddress', formdata.value, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status == true) {
                    _this.commonprovider.simpleToast(data.message);
                    // this.navCtrl.setRoot(ViewallPage)
                    _this.navCtrl.pop();
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                console.log(err);
                Loader.dismiss();
            });
        });
    };
    EnterdetailPage.prototype.addressdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addressdetail_addressdetail__["a" /* AddressdetailPage */]);
    };
    return EnterdetailPage;
}());
EnterdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enterdetail',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\enterdetail\enterdetail.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n  \n    <ion-title>{{ title }}</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n<div style="height:8vh;float:left;width:100%;"></div>\n\n  <div class="signin_box">\n    <form #addrForm="ngForm" novalidate>\n      <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="First Name" [(ngModel)]=\'data.fname\' name=\'fname\' pattern=\'[a-zA-Z]*\' #fname="ngModel" required></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-input type="text" placeholder="Last Name" [(ngModel)]=\'data.lname\' name=\'lname\' pattern=\'[a-zA-Z]*\' #lname="ngModel" required></ion-input>\n          </ion-item>\n          <ion-item >\n            <ion-input type="text" placeholder="Address"  [(ngModel)]=\'data.address\' name=\'address\' #address="ngModel" required>\n              </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Street"  [(ngModel)]=\'data.street\' name=\'street\' #street="ngModel" required>\n              </ion-input>\n          </ion-item>\n          <ion-item class="location1">\n            <ion-input type="text" placeholder="City"  [(ngModel)]=\'data.city\' name=\'city\' pattern=\'[a-zA-Z ]*\' #city="ngModel" required>\n              <ion-icon ios="ios-navigate" md="md-navigate" class="location" ></ion-icon></ion-input>\n          </ion-item>\n\n          <ion-item class="location1">\n            <ion-input type="text" placeholder="Country" [(ngModel)]=\'data.country\' name=\'country\' #country="ngModel" required>\n              <ion-icon ios="ios-navigate" md="md-navigate" class="location"></ion-icon></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text"  pattern=\'[0-9]+\' maxlength=\'10\' placeholder="Mobile Number" [(ngModel)]=\'data.mobileno\' name=\'mobileno\' #mobileno="ngModel" required></ion-input>\n          </ion-item>\n        \n        </ion-list>\n\n        <div class="button0">\n          <ion-grid style="padding:0px;">\n            <ion-row>\n              <ion-col col-12 style="padding-left:0px;" >\n                <button ion-button *ngIf="edit != 1" [disabled]="!addrForm.valid" (click)="add_addrs(addrForm)">Save</button>\n                <button ion-button *ngIf="edit == 1" [disabled]="!addrForm.valid" (click)="edit_addrs(addrForm)">Update</button>\n             </ion-col>\n              <!--(click)="addressdetail()"-->\n            </ion-row>\n          </ion-grid>\n        </div>\n\n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\enterdetail\enterdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
], EnterdetailPage);

//# sourceMappingURL=enterdetail.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addressdetail_addressdetail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the OrderreviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderreviewPage = (function () {
    function OrderreviewPage(navCtrl, navParams, commonprovider, loadingCtrl, http, places, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.places = places;
        this.geolocation = geolocation;
        var addrs_id = this.navParams.get('addrs_id');
        this.fetchDetails(addrs_id);
        this.user_id = localStorage.getItem('user_id');
        console.log(addrs_id);
        this.allProducts(this.user_id);
    }
    OrderreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderreviewPage');
    };
    OrderreviewPage.prototype.addressdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addressdetail_addressdetail__["a" /* AddressdetailPage */]);
    };
    OrderreviewPage.prototype.payment = function () {
        console.log(this.cart_ids);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */], { total: this.total, addrs_id: this.addrs._id, cart_ids: this.cart_ids });
    };
    OrderreviewPage.prototype.allProducts = function (userid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var obj = { userid: userid };
        var serialised = this.commonprovider.serializeObj(obj);
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        //
        //  Loader.present().then(() => {
        this.http.post(this.commonprovider.base_url + 'carts/showCart', obj, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            // Loader.dismiss()
            _this.products = [];
            if (data.status == true) {
                _this.products = data.data;
                ////
                var total = 0;
                var cart_ids = [];
                for (var i = 0; i < _this.products.length; i++) {
                    var product = _this.products[i];
                    total += (product.product_info.price * product.quantity);
                    cart_ids.push(_this.products[i]._id);
                }
                _this.total = total;
                _this.cart_ids = cart_ids;
                console.log(_this.cart_ids);
            }
            else {
                _this.commonprovider.simpleToast("Could not load products...");
            }
        }, function (err) {
            _this.commonprovider.simpleToast("Oops! Something went wrong!");
            //  Loader.dismiss()
        });
        // })
    };
    OrderreviewPage.prototype.fetchDetails = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            addressid: id
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.post(_this.commonprovider.base_url + 'address/viewbyid', postdata, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status == true) {
                    console.log(data.data);
                    _this.addrs = data.data;
                    localStorage.setItem('address', JSON.stringify(data.data));
                }
                else {
                    _this.commonprovider.simpleToast(data.message);
                }
            }, function (err) {
                console.log(err);
                Loader.dismiss();
                _this.commonprovider.simpleToast('Something went wrong. Please try again');
            });
        });
    };
    return OrderreviewPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], OrderreviewPage.prototype, "mapElement", void 0);
OrderreviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orderreview',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\orderreview\orderreview.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n\n    <ion-title>Order Review</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="date_time">\n    <ion-grid style="padding:0px">\n      <ion-row>\n        <ion-col col-12 style="padding:0px">\n          <div class="time" style="border-right:none;">\n            <h5>Grand Total</h5>\n            <p>SR {{this?.total}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class="wishlist_box">\n    <ion-list>\n      <ion-item *ngFor="let prod of products">\n\n        <ion-thumbnail item-start>\n          <img [src]="prod.product_info.image">\n        </ion-thumbnail>\n        <p class="item11">{{prod.product_info.name}} x {{prod.quantity}}</p>\n        <p class="price">SR {{prod.product_info.price}}</p>\n\n        <div class="event_time">\n          <ion-row>\n            <ion-col col-6 style="padding:0px">\n              <div class="event">\n                <h5>Event Date</h5>\n                <p>{{prod.date}}</p>\n              </div>\n            </ion-col>\n            <ion-col col-6 style="padding:0px">\n              <div class="time">\n                <h5>Time</h5>\n                <p>{{prod.time}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n           <ion-row>\n            <ion-col col-12 style="padding:0px">\n              <div class="event">\n                <h5>Event Address</h5>\n                <p>{{prod.location}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="heading">\n    <h2>Billing Address</h2>\n  </div>\n  <div class="event_address" *ngIf="this?.addrs">\n    <h3>{{addrs.fname}} {{addrs.lname}}</h3>\n    <p>{{addrs.address}}</p>\n    <p>{{addrs.street}}, {{addrs.city}}, {{addrs.country}}</p>\n    <p>{{addrs.mobileno}}</p>\n  </div>\n\n  <div class="button0" padding>\n    <ion-grid style="padding:0px;">\n      <ion-row>\n        <ion-col col-12 style="padding-left:0px;"><button ion-button (click)="payment(addrs._id)">Payment</button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\orderreview\orderreview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]])
], OrderreviewPage);

//# sourceMappingURL=orderreview.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderreview_orderreview__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, commonprovider, loadingCtrl, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.events = events;
        this.method = null;
        this.addrs_id = this.navParams.get('addrs_id');
        this.cart_ids = this.navParams.get('cart_ids');
        this.total = this.navParams.get('total');
        this.user_id = localStorage.getItem('user_id');
        this.allProducts(this.user_id);
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.allProducts = function (userid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var obj = { userid: userid };
        var serialised = this.commonprovider.serializeObj(obj);
        this.http.post(this.commonprovider.base_url + 'carts/showCart', obj, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            // Loader.dismiss()
            _this.products = [];
            if (data.status == true) {
                _this.products = data.data;
            }
        }, function (err) {
        });
    };
    PaymentPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orderreview_orderreview__["a" /* OrderreviewPage */]);
    };
    PaymentPage.prototype.confirmation = function (method) {
        var _this = this;
        console.log(this.addrs_id, this.total, this.user_id);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var billing = JSON.parse(localStorage.getItem('address'));
        // console.log(billing)
        var obj = {
            userid: this.user_id,
            total: this.total,
            billing_address: billing,
            orderitems: this.products,
            method: method
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log(obj);
        if (method == 'cod') {
            Loader.present().then(function () {
                _this.http.post(_this.commonprovider.base_url + 'orders/checkout', obj, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loader.dismiss();
                    if (data.status == true) {
                        _this.commonprovider.simpleToast(data.message);
                        localStorage.setItem('ordernumber', data.ordernumber);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation__["a" /* ConfirmationPage */]);
                        _this.navCtrl.popToRoot();
                    }
                    else {
                        _this.commonprovider.simpleToast(data.message);
                    }
                }, function (err) {
                    Loader.dismiss();
                    _this.commonprovider.simpleToast('Order could not be place. Network error.');
                });
            });
        }
        else {
            this.commonprovider.simpleToast('Please choose Cash on delivery');
        }
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\payment\payment.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>Payment</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <div style="height:16vh;float:left;width:100%;"></div>\n\n    <div class="payment">\n        <ion-list radio-group [(ngModel)]="method" name=\'method\'>\n            <!--<ion-item>\n              <ion-label><ion-icon ios="ios-card" md="md-card" class="icn"></ion-icon>Credit Card</ion-label>\n              <ion-radio checked="true" value="cc"></ion-radio>\n            </ion-item>-->\n            <ion-item>\n              <ion-label><ion-icon ios="ios-cash" md="md-cash" class="icn"></ion-icon>SADAD </ion-label>\n              <ion-radio value="sadad"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label><ion-icon ios="ios-cash" md="md-cash" class="icn"></ion-icon>Cash on delivery</ion-label>\n                <ion-radio value="cod"></ion-radio>\n              </ion-item>\n            </ion-list>\n            </div>\n\n            <div class="button0">\n                <ion-grid style="padding:0px;">\n                  <ion-row>\n                    <ion-col col-12 style="padding-left:0px;"><button ion-button [disabled]="method == null" (click)="confirmation(method)">Next</button></ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n   \n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_language__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, geolocation, http, commonprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.http = http;
        this.commonprovider = commonprovider;
        // this.allUsers();
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.language = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__language_language__["a" /* LanguagePage */]);
    };
    LocationPage.prototype.allUsers = function (city) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get(this.commonprovider.base_url + 'users/all_vendors', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.users = [];
            for (var x in data) {
                if (data[x].city) {
                    for (var j in data[x].city) {
                        if (data[x].city[j] == city) {
                            _this.users.push(data[x]._id);
                        }
                    }
                }
            }
            // console.log(this.users)
            // this.vendor_products(this.users)
            console.log(_this.users);
            localStorage.setItem('vendor_ids', JSON.stringify(_this.users));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
        });
    };
    LocationPage.prototype.home = function (city) {
        if (city == 'jb') {
            city = 'Jubail';
        }
        else if (city == 'dk') {
            city = 'Damman & Khobar';
        }
        localStorage.setItem('city', city);
        this.allUsers(city);
        // this.vendor_products();
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\location\location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="main_header">\n  <ion-navbar>\n\n    <ion-title>{{ \'Choose_your_location\' | translate }}</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n<div class="location">\n\n  <!-- <span>Location <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown" class="down1"></ion-icon></span> -->\n\n  <div style="height:28vh;float:left;width:100%;"></div>\n\n<div class="list_box">\n\n  <ion-list>\n    <button ion-item (click)="home(\'dk\')">\n      {{\'D_and_K\' | translate }}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n    </button>  \n\n    <button ion-item (click)="home(\'jb\')">\n      {{\'Jubail\' | translate }}<ion-icon ios="ios-arrow-forward" md="md-arrow-forward" class="angle1"></ion-icon>\n    </button>  \n  </ion-list>\n\n</div>\n\n\n</div>\n\n</ion-content>\n\n<ion-footer>\n  \n    <div class="footerbar">\n      <button ion-button> {{ \'use_current_loc\' | translate }} <ion-icon ios="ios-pin" md="md-pin" class="location"></ion-icon> </button>\n    </div>\n  \n  \n  </ion-footer>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__retrivepassword_retrivepassword__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PhonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PhonePage = (function () {
    function PhonePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhonePage');
    };
    PhonePage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__retrivepassword_retrivepassword__["a" /* RetrivepasswordPage */]);
    };
    PhonePage.prototype.changepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    return PhonePage;
}());
PhonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-phone',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\phone\phone.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n      <ion-title>Retrive Password</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n    <div class="spacer" style="height:14vh;float:left;width:100%;"></div>\n    <span class="heading">get a verification code</span>\n    <span class="heading">on my phone</span>\n    <span class="heading">XXXXX@XXXXX</span>\n    <span class="heading">that contains 4 digits</span>\n\n    <div class="email_box">\n      <form>\n          <ion-list>\n              \n                <ion-item>\n                  <ion-input type="text" placeholder="Enter Code"></ion-input>\n                </ion-item>\n              \n              </ion-list>\n\n              <button ion-button (click)="changepassword()">Next</button>\n      </form>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\phone\phone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PhonePage);

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_phone__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ChangepasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, http, nav, commonprovider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.nav = nav;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = '';
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.phone = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__phone_phone__["a" /* PhonePage */]);
    };
    ChangepasswordPage.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
    };
    ChangepasswordPage.prototype.Changepassword = function (formdata) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = localStorage.getItem('user_id');
        var postdata = {
            id: user_id,
            password: formdata.value.password,
        };
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        if (formdata.value.password.indexOf(' ') >= 0) {
            this.commonprovider.simpleToast('Space not allowed in password');
        }
        else {
            if (formdata.value.password != formdata.value.cpassword) {
                this.commonprovider.simpleToast('Passwords do not match.');
            }
            else {
                // return false;
                Loader.present().then(function () {
                    _this.http.post(_this.commonprovider.base_url + 'users/changepass', postdata, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        Loader.dismiss();
                        if (data.status == true) {
                            _this.commonprovider.simpleToast("You have got yourself a new password!");
                            _this.logout();
                        }
                        else {
                            _this.commonprovider.simpleToast('An error occurred. Please try again');
                        }
                    }, function (err) {
                        Loader.dismiss();
                    });
                });
            }
        }
    };
    ChangepasswordPage.prototype.logout = function () {
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
        this.nav.popToRoot();
        // this.navCtrl.push(SigninPage);
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassword',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\changepassword\changepassword.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n    <ion-title>Retrive Password</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="spacer" style="height:10vh;float:left;width:100%;"></div>\n  <span class="heading">Change Password</span>\n\n  <div class="email_box">\n    <form #passwordForm="ngForm" novalidate>\n      <ion-list>\n\n        <ion-item>\n          <ion-input type="password" placeholder="New Password" [(ngModel)]="data.password" name="password" minlength=\'6\' #password="ngModel"\n            required></ion-input>\n        </ion-item>\n        <ion-label color="danger">\n          <div *ngIf="password.errors && (password.dirty || password.touched)">\n            <div [hidden]="!password.errors.required">\n              Password is required\n            </div>\n            <div [hidden]="!password.errors.minlength">\n              Minimum length should be 6\n            </div>\n          </div>\n        </ion-label>\n\n\n        <ion-item>\n          <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel"\n            required></ion-input>\n        </ion-item>\n        <ion-label color="danger">\n          <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n            <div [hidden]="!cpassword.errors.required">\n              Please confirm your password\n            </div>\n            <div [hidden]="!cpassword.errors.minlength">\n              Minimum length should be 6\n            </div>\n          </div>\n        </ion-label>\n      </ion-list>\n\n      <button ion-button (click)="Changepassword(passwordForm)" [disabled]=\'!passwordForm.valid\'>Done</button>\n      <!--(click)="account()"-->\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\changepassword\changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualplannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proplanner_proplanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the IndividualplannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IndividualplannerPage = (function () {
    function IndividualplannerPage(navCtrl, navParams, http, commonprovider, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.length = null;
        this.searchterm = {
            search: '',
        };
        this.getIndiv_planner();
    }
    IndividualplannerPage.prototype.ngOnInit = function () {
        this.search = this.formBuilder.group({
            'search': [''],
        });
    };
    IndividualplannerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndividualplannerPage');
    };
    IndividualplannerPage.prototype.proplanner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__proplanner_proplanner__["a" /* ProplannerPage */]);
    };
    IndividualplannerPage.prototype.getIndiv_planner = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.get(_this.commonprovider.base_url + 'users/all_individual', options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.planners = [];
                _this.all_data = data;
                var city = localStorage.getItem("city");
                for (var i in data) {
                    for (var j in data[i].city) {
                        if (data[i].city[j] == city) {
                            _this.planners.push(data[i]);
                        }
                    }
                }
                _this.all_data = _this.planners;
                if (_this.planners.length == 0) {
                    _this.commonprovider.simpleToast("Not available in your selected location.");
                }
                Loader.dismiss();
            }, function (err) {
                Loader.dismiss();
            });
        });
    };
    IndividualplannerPage.prototype.showsearch = function (value) {
        if (value == true) {
            this.searchbars = false;
        }
        else {
            this.searchbars = true;
        }
    };
    IndividualplannerPage.prototype.getItems = function (searchbar) {
        console.log('dd');
        this.length = null;
        console.log(searchbar);
        //this.events = this.eventss;
        this.planners = this.all_data;
        // console.log(searchbar.srcElement.value);
        var q = searchbar;
        if (!q) {
            return;
        }
        this.planners = this.planners.filter(function (v) {
            if (v.org_name && q) {
                // alert(v.org_name.toLowerCase().indexOf(q.toLowerCase()));
                if (v.org_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    return IndividualplannerPage;
}());
IndividualplannerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-individualplanner',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\individualplanner\individualplanner.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title> {{ \'indiv_planner\' | translate}}</ion-title>\n\n      <ion-buttons end>\n      <button ion-button class="back" (click)="showsearch(searchbars)">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n      </ion-buttons>\n\n      \n    </ion-navbar>\n\n     <ion-toolbar class="tabing" *ngIf="searchbars == true;" >\n     <form [formGroup]="search" (ngSubmit)="getItems(searchterm.search)">\n        <ion-searchbar [(ngModel)]="searchterm.search" (ionInput)="getItems(searchterm.search)" formControlName="search"></ion-searchbar>\n    </form>\n  </ion-toolbar>\n\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n  <div class="card_box" *ngIf="this?.planners">\n  \n    <ion-card *ngFor="let users of planners">\n      <ion-card-content>\n          <div class="pick">\n              <img [src]="users.image">\n              </div>\n      <div class="content01"> <span>{{users.org_name}}</span>\n       <div class="raiting">\n          <ul>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <!--<ion-rating [numStars]="5" [readOnly]="true" [value]="1" ></ion-rating>-->\n          </ul>\n        </div>\n      </div>\n      </ion-card-content>\n    </ion-card>\n      <ion-card *ngIf="planners.length == 0" >\n      <ion-card-content>\n          <span style="margin: 20px 0;"> {{\'no_results\' | translate}} </span>\n      </ion-card-content>\n      </ion-card>\n  \n    <!--<ion-card>\n      <ion-card-content>\n          <div class="pick">\n              <img src="assets/image/17.png">\n              </div>\n      <span>Haifa\'s Art</span>\n      <div class="raiting">\n          <ul>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n          </ul>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-content>\n        <div class="pick">\n          <img src="assets/image/18.png">\n          </div>\n          <span>MJ\'s Events</span>\n          <div class="raiting">\n              <ul>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n              </ul>\n            </div>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-content>\n          <div class="pick">\n              <img src="assets/image/19.png">\n              </div>\n       <span>Manal Organizer</span>\n       <div class="raiting">\n          <ul>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n          </ul>\n        </div>\n      </ion-card-content>\n    </ion-card>-->\n  \n    </div>\n  \n  </ion-content>\n  \n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\individualplanner\individualplanner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], IndividualplannerPage);

//# sourceMappingURL=individualplanner.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventcompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proplanner_proplanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EventcompaniesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventcompaniesPage = (function () {
    function EventcompaniesPage(navCtrl, navParams, http, commonprovider, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.commonprovider = commonprovider;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.length = null;
        this.searchterm = {
            search: '',
        };
        this.get_event_comp();
    }
    EventcompaniesPage.prototype.ngOnInit = function () {
        this.search = this.formBuilder.group({
            'search': [''],
        });
    };
    EventcompaniesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventcompaniesPage');
    };
    EventcompaniesPage.prototype.proplanner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__proplanner_proplanner__["a" /* ProplannerPage */]);
    };
    EventcompaniesPage.prototype.get_event_comp = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loader.present().then(function () {
            _this.http.get(_this.commonprovider.base_url + 'users/all_planning_comp', options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.planners = [];
                var city = localStorage.getItem("city");
                for (var i in data) {
                    for (var j in data[i].city) {
                        if (data[i].city[j] == city) {
                            _this.planners.push(data[i]);
                        }
                    }
                }
                _this.all_data = _this.planners;
                if (_this.planners.length == 0) {
                    _this.commonprovider.simpleToast("Not available in your selected location.");
                }
                Loader.dismiss();
            }, function (err) {
                Loader.dismiss();
                _this.commonprovider.simpleToast("Something went wrong. Please try again");
            });
        });
    };
    EventcompaniesPage.prototype.showsearch = function (value) {
        if (value == true) {
            this.searchbar = false;
        }
        else {
            this.searchbar = true;
        }
    };
    EventcompaniesPage.prototype.getItems = function (searchbar) {
        console.log('dd');
        this.length = null;
        console.log(searchbar);
        //this.events = this.eventss;
        this.planners = this.all_data;
        // console.log(searchbar.srcElement.value);
        var q = searchbar;
        if (!q) {
            return;
        }
        this.planners = this.planners.filter(function (v) {
            if (v.org_name && q) {
                if (v.org_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    return EventcompaniesPage;
}());
EventcompaniesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eventcompanies',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\eventcompanies\eventcompanies.html"*/'<ion-header class="main_header">\n    <ion-navbar>\n  \n      <ion-title>{{ \'event_company\' | translate}}</ion-title>\n\n      <ion-buttons end>\n      <button ion-button class="back" (click)="showsearch(searchbar)">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n      </ion-buttons> \n    </ion-navbar>\n\n    <ion-toolbar class="tabing" *ngIf="searchbar == true;" >\n     <form [formGroup]="search" (ngSubmit)="getItems(searchterm.search)">\n        <ion-searchbar [(ngModel)]="searchterm.search" (ionInput)="getItems(searchterm.search)" formControlName="search"></ion-searchbar>\n    </form>\n  </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n  \n      \n\n  <div class="card_box"  *ngIf="this?.planners">\n  \n    <ion-card *ngFor="let user of planners">\n      <ion-card-content>\n          <div class="pick">\n              <img [src]="user.image">\n              </div>\n      <div class="content01"> <span>{{user.org_name}}</span>\n       <div class="raiting">\n          <ul>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n           \n          </ul>\n        </div>\n      </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="planners.length == 0">\n      <ion-card-content>\n          <span style="margin: 20px 0;"> {{\'no_results\' | translate}} </span>\n      </ion-card-content>\n    </ion-card>\n    <!--<ion-card>\n      <ion-card-content>\n          <div class="pick">\n              <img src="assets/image/21.png">\n              </div>\n      <span>Bloom Event Planing</span>\n      <div class="raiting">\n          <ul>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n            <li><ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon></li>\n          </ul>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-content>\n        <div class="pick" style="background:#000;">\n          <img src="assets/image/22.png">\n          </div>\n          <span>Event Concept</span>\n          <div class="raiting">\n              <ul>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n                <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n              </ul>\n            </div>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-content>\n          <div class="pick">\n              <img src="assets/image/23.png">\n              </div>\n       <span>Bench Mark Events</span>\n       <div class="raiting">\n          <ul>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n            <li><ion-icon ios="ios-star" md="md-star"></ion-icon></li>\n          </ul>\n        </div>\n      </ion-card-content>\n    </ion-card>-->\n  \n    </div>\n  \n  </ion-content>\n  \n'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\eventcompanies\eventcompanies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], EventcompaniesPage);

//# sourceMappingURL=eventcompanies.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MjeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__individualplanner_individualplanner__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__knowabout_knowabout__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weoffer_weoffer__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MjeventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MjeventPage = (function () {
    function MjeventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MjeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MjeventPage');
    };
    MjeventPage.prototype.individualplanner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__individualplanner_individualplanner__["a" /* IndividualplannerPage */]);
    };
    MjeventPage.prototype.knowabout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__knowabout_knowabout__["a" /* KnowaboutPage */]);
    };
    MjeventPage.prototype.weoffer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__weoffer_weoffer__["a" /* WeofferPage */]);
    };
    return MjeventPage;
}());
MjeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mjevent',template:/*ion-inline-start:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\mjevent\mjevent.html"*/'<ion-header class="main_header">\n  <ion-navbar>\n\n    <ion-title>MJ\'s Events</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/image/bg.jpg);background-size: cover;background-repeat: no-repeat;">\n\n  <div class="card_box">\n    \n      <ion-card>\n        <ion-card-content>\n            <div class="pick">\n                <img src="assets/image/18.png">\n                </div>\n        </ion-card-content>\n      </ion-card>\n\n      <div class="language_btn">\n        \n            <button ion-button (click)="knowabout()">Know about us</button>\n        \n            <button ion-button (click)="weoffer()">what we offer</button>\n        \n          </div>\n\n      </div>\n\n</ion-content>'/*ion-inline-end:"D:\Honey_new\Ionic2 Apps\Gathering\Gathering APP\Gathering APP\src\pages\mjevent\mjevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], MjeventPage);

//# sourceMappingURL=mjevent.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonProvider = (function () {
    // moment: moment.Moment = moment(new Date(), 'yyyy-MM-dd');
    // base_url = 'http://mynewapp-env.mpa9eqyg3u.eu-central-1.elasticbeanstalk.com/api/';
    function CommonProvider(http, toastCtrl, loadingCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.base_url = 'http://localhost:8000/api/';
        this.dPipe = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DatePipe */]('en-US');
        console.log('Hello CommonProvider Provider');
        // alert('fg');
    }
    CommonProvider.prototype.currentdate = function () {
        var today = this.dPipe.transform(new Date(), 'yyyy-MM-dd');
        return today;
    };
    CommonProvider.prototype.tConvert = function (time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    };
    CommonProvider.prototype.printRating = function (rating) {
        var max_rate = 5;
        var rounded_rating = Math.round(rating);
        var array_stars = new Array(max_rate);
        array_stars.fill('star-outline');
        for (var i = 0; i < rounded_rating; i++) {
            array_stars[i] = 'star';
            if (i === rounded_rating - 1 && rating % 1 !== 0) {
                array_stars[i] = 'star-half';
            }
        }
        return array_stars;
    };
    CommonProvider.prototype.days_prior = function (req_date) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__(req_date).diff(__WEBPACK_IMPORTED_MODULE_5_moment__(this.dPipe.transform(new Date(), 'yyyy-MM-dd')), 'days');
    };
    CommonProvider.prototype.add_days = function (days) {
        var newDate = __WEBPACK_IMPORTED_MODULE_5_moment__().add(days, 'days');
        return this.dPipe.transform(newDate, 'yyyy-MM-dd');
    };
    CommonProvider.prototype.simpleToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    CommonProvider.prototype.toastWithOption = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            showCloseButton: true,
            closeButtonText: 'Close',
            position: 'middle'
        });
        toast.present();
    };
    CommonProvider.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return CommonProvider;
}());
CommonProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */]])
], CommonProvider);

//# sourceMappingURL=common.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map