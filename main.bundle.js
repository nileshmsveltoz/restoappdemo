webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/addmenu/addmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addmenu/addmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  addmenu works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/addmenu/addmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddmenuComponent = (function () {
    function AddmenuComponent() {
    }
    AddmenuComponent.prototype.ngOnInit = function () {
    };
    AddmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addmenu',
            template: __webpack_require__("../../../../../src/app/addmenu/addmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addmenu/addmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddmenuComponent);
    return AddmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- <app-nav *ngIf=\"auth.isAuthenticated\"></app-nav> -->\n  <router-outlet></router-outlet>\n  \n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_imageupload__ = __webpack_require__("../../../../ng2-imageupload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__confirmdelete_confirmdelete_component__ = __webpack_require__("../../../../../src/app/confirmdelete/confirmdelete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__addmenu_addmenu_component__ = __webpack_require__("../../../../../src/app/addmenu/addmenu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HomeComponent } from './home/home.component';











var appRoutes = [
    // { path: 'home', component: HomeComponent },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'Menu', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                // HomeComponent,
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__confirmdelete_confirmdelete_component__["a" /* ConfirmdeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__addmenu_addmenu_component__["a" /* AddmenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__["Ng2SearchPipeModule"], __WEBPACK_IMPORTED_MODULE_12_ng2_order_pipe__["Ng2OrderModule"], __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_imageupload__["ImageUploadModule"], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__addmenu_addmenu_component__["a" /* AddmenuComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/confirmdelete/confirmdelete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirmdelete/confirmdelete.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  confirmdelete works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/confirmdelete/confirmdelete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmdeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmdeleteComponent = (function () {
    function ConfirmdeleteComponent() {
    }
    ConfirmdeleteComponent.prototype.ngOnInit = function () {
    };
    ConfirmdeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmdelete',
            template: __webpack_require__("../../../../../src/app/confirmdelete/confirmdelete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/confirmdelete/confirmdelete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmdeleteComponent);
    return ConfirmdeleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Bordered form */\r\n/* form {\r\n    border: 400px solid #f1f1f1;\r\n} */\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n\r\n    width:300px !important;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for login buttons */\r\nbutton {\r\n    background-color: rgb(233, 132, 17);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n   \r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n/*.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #bb514a;\r\n}*/\r\n\r\n/* Add padding to containers */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n \r\nform {\r\n    height: 500px;\r\n\r\n    margin: 0 auto; \r\n    width:400px;\r\n     /*background-image: linear-gradient(rgb(247, 49, 0), yellow);*/\r\n        /*background-image: ( yellow);*/\r\n        background-color: skyblue;\r\n        /*background-image: linear-gradient(skyblue,green);*/\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <form class=\"register-form\" [formGroup]=\"login\">\n\n    <div class=\"container\"> \n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                \n            <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n    <h3 class=\"title\">LOGIN</h3>\n    \n            \n       <!-- <span *ngIf=\"messageemailpwd\" style=\"color:red !important;font: bold 15px Georgia, serif;margin-right: 44%;\">Incorrect Email or Password</span>  -->\n      <br>\n      <br>\n\n      <label>\n        <b>Username</b>\n      </label><br>\n      <input type=\"text\" placeholder=\"Enter Username\" formControlName=\"email\" required=\"\">\n      <span *ngIf=\"messageemail\" style=\"color:red !important;font: bold 15px Georgia, serif;margin-right: 44%;\">Email is required</span><br>\n      <label>\n        <b>Password</b>\n      </label><br>\n      <input type=\"password\" placeholder=\"Enter Password\" formControlName=\"password\" required=\"\">\n      <br>\n      \n      <span *ngIf=\"messagepassword\" style=\"color:red !important;font: bold 15px Georgia, serif;margin-right: 44%;\">password is required</span>\n\n      <button type=\"register\" (click)=\"Login()\">LOGIN</button>\n      <button type=\"button\" class=\"cancelbtn\" (click)=\"cancle()\">CANCLE</button>\n      \n      <input type=\"checkbox\" checked=\"checked\"> Remember me\n</div>\n</div>\n    </div>\n    </div>\n    <div class=\"container\">\n      \n\n      <!--<span class=\"forgot\">\n        <a href=\"#\" class=\"btn btn-link btn-danger\"> Forgot password?</a>\n      </span>-->\n    </div>\n\n  </form>\n</body>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(Router, fb, WebService) {
        this.Router = Router;
        this.fb = fb;
        this.WebService = WebService;
        this.test = new Date();
        this.login = fb.group({
            email: [''],
            password: [''],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var email = this.login.value.email;
        var password = this.login.value.password;
        this.validate(email, password);
        this.WebService.Login(email, password);
        this.loginvalid = localStorage.getItem('loginvalid');
        if (this.loginvalid == "false" && email != "" && password != "") {
            this.messageemailpwd = true;
        }
    };
    LoginComponent.prototype.validate = function (email, password) {
        if (email == "") {
            this.messageemail = true;
        }
        else {
            this.messageemail = false;
        }
        if (password == "") {
            this.messagepassword = true;
        }
        else {
            this.messagepassword = false;
        }
    };
    LoginComponent.prototype.register = function () {
        this.Router.navigate(['/register']);
    };
    LoginComponent.prototype.cancle = function () {
        this.Router.navigate(['login']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n \n</head>\n<body>\n\n<nav class=\"navbar navbar-inverse\">\n  \n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" >Restro </a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a>Home</a></li>\n      <li><a>contact Us</a></li>\n      \n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Help <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Page 1-1</a></li>\n          <li><a href=\"#\">Page 1-2</a></li>\n          <li><a href=\"#\">Page 1-3</a></li>\n        </ul>\n      </li>\n      \n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"auth.isAuthenticated\"><a href=\"login\"> Logout</a></li>\n    </ul>\n  \n</nav>\n  \n\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* header{\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    font-size: 30px;\r\n    border-bottom: 2px solid #eee;\r\n} */\r\n\r\ninput[type=text]  {\r\n    width: auto; \r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n /* form {\r\n    \r\n   \r\n    background-color: rgb(186, 240, 225);\r\n    \r\n} */\r\n\r\n\r\nbody {\r\n    background-color: coral;\r\n    \r\n}\r\n\r\n\r\n.cancle {\r\n    width: 80px;\r\n    padding: 10px 18px;\r\n    background-color: rgb(255, 94, 0);\r\n   \r\n    \r\n}\r\n.submit {\r\n    width: 80px;\r\n    padding: 10px 18px;\r\n    background-color: rgb(255, 94, 0);\r\n   \r\n    \r\n}\r\n.addprofile{\r\n    width: 80px;\r\n    padding: 10px 18px;\r\n    background-color: rgb(255, 94, 0);\r\n\r\n}\r\n\r\n.updateprofile{\r\n    width: 80px;\r\n    padding: 10px 18px;\r\n    background-color: rgb(255, 94, 0);\r\n}\r\n \r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n  }\r\n  \r\n  /* .dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    min-height: 200px;\r\n    width: 90%;\r\n    max-width: 520px;\r\n    background-color: #fff;\r\n    padding: 12px;\r\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n  } */\r\n  \r\n  /* @media (min-width: 768px) {\r\n    .dialog {\r\n      top: 40px;\r\n    }\r\n  } */\r\n  \r\n  /* .dialog__close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #2d2d2d;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    font-size: 1.2em;\r\n  } */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Restro </a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <!-- <li><a href=\"home\">Home</a></li> -->\n      <li>\n        <a>Home</a>\n      </li>\n      <li>\n        <a>contact Us</a>\n      </li>\n\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Help\n          <span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <!--<li>\n            <a>Page 1-1</a>\n          </li>-->\n          <li>\n            <!-- <a href=\"#\">Page 1-2</a> -->\n          </li>\n          <li>\n            <!-- <a href=\"#\">Page 1-3</a> -->\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n\n      <li>\n        <a href=\"login\">\n          <span class=\"glyphicon glyphicon-log-in\"></span> Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- popup box -->\n\n<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Add Menu</button>\n<br>\n<br>\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n        <div class=\"col-sm-10\" style=\" background-color: skyblue;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" >&times;</button>\n        <h1 class=\"modal-title\">Add Menu</h1>\n      </div>\n      <div class=\"modal-body\">\n\n  <input type=\"radio\"  [(ngModel)]=\"radio\"  value=\"Veg\" checked=\"checked\"> Veg \n <input type=\"radio\" [(ngModel)]=\"radio\" value=\"Nonveg\" > NonVeg <br>\n     \n         <br>\n          <br>\n          <label> Select category</label>\n          <select class=\"form-control\" placeholder=\"Select Category\" [(ngModel)]=\"categorytype\" style=\"width:90%\">\n            <option value=\"starter\">starter</option>\n            <option value=\"Soup\">Soup</option>\n            <option value=\"maincourse\">Main Course</option>\n            <option value=\"dessert\">Beverage and Dessert</option>\n          </select>\n          <br>\n          <label>\n            <b>Item Name</b>\n          </label>\n          <br>\n          <input class=\"form-control\" [(ngModel)]=\"name\" type=\"text\" style=\"width:90%\">\n          <br>\n          <label>\n            <b>cost</b>\n          </label>\n          <br>\n          <input class=\"form-control\" [(ngModel)]=\"cost\" type=\"text\" style=\"width:90%\">\n          <br>\n          <label>\n            <b>More Info</b>\n          </label>\n          <br>\n\n          <textarea [(ngModel)]=\"info\" class=\"form-control\" rows=\"4\" cols=\"50\" style=\"width:90%\"></textarea>\n          <br>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label> Upload video</label>\n                <input type=\"file\" class=\"form-control\" [(ngModel)]=\"video\" name=\"video\" ng2FileSelect [uploader]=\"uploader\" (change)=\"getFiles($event)\">\n              </div>\n            </div>\n          </div>\n\n          <!--<div class=\"row\" class=\"container\">\n            <button *ngIf=\"addbtn\" type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\" (click)=\"addprofile()\" class=\"addprofile\">Add</button>\n            \n            <button *ngIf=\"updatebtn\" type=\"button\" class=\"btn btn-sm btn-default\" class=\"addprofile\" disabled>Add</button>\n\n            <button type=\"button\" (click)=\"Cancle()\" class=\"cancle\" data-dismiss=\"modal\">Cancel</button>\n\n\n            <button *ngIf=\"updatebtn\" type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\" (click)=\"updateprofile()\" class=\"updateprofile\">Update</button>\n            <button *ngIf=\"addbtn\" type=\"button\" class=\"btn btn-sm btn-default\" class=\"updateprofile\" disabled>Update</button>\n </div>-->\n <div class=\"row\" class=\"container\">\n            <button  type=\"button\" class=\"btn btn-sm btn-default\"  data-dismiss=\"modal\" (click)=\"submit()\" class=\"addprofile\">Submit</button>\n            \n\n            <button type=\"button\" (click)=\"Cancle()\"  data-dismiss=\"modal\">Cancel</button>\n\n\n </div>\n \n      </div>\n      \n    </div>\n</div>\n  </div>\n</div>\n\n<div class=\"col-sm-12\">\n  <div class=\"col-sm-6\" class=\"container-fluid text-left\">\n    <div class=\"row content\">\n<div class=\"col-sm-6\" class=\"table-responsive\" style=\" background-color: skyblue;\">\n        <table border=\"1\" class=\"table table-striped table-bordered\">\n          <thead>\n            <tr>\n              <th>type of food</th>\n\n              <th>category</th>\n              <th>name</th>\n              <th>cost</th>\n              <th>info</th>\n              <th>video</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of items ; let i=index\">\n              <td>{{item.radio}}</td>\n              <td>{{item.categoryid}}</td>\n              <td>{{item.name}}</td>\n              <td>{{item.cost}}</td>\n              <td>{{item.info}}</td>\n              <td>\n                <a href=\"\">{{item.video}}</a>\n              </td>\n          \n              \n              <button type=\"button\" (click)=\"EditClicked(item)\" class=\"btn btn-sm btn-default\" data-toggle=\"modal\" data-target=\"#myModal\" style=\"background-color: rgb(255, 94, 0);\"> Edit </button>\n             \n             \n              <button type=\"button\" class=\"btn btn-sm btn-default\" data-toggle=\"modal\" data-target=\"#deleteModal\" style=\"background-color: rgb(255, 94, 0);\">Delete</button>\n            \n              <div class=\"modal fade\" id=\"deleteModal\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                      <div class=\"col-sm-12\" style=\" background-color: skyblue;\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      <h4 class=\"modal-title\">Confirmation box</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                      \n                      <p>Are you sure you want to delete this menu item </p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" (click)=\"DeleteClicked(item)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\n                        \n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n\n  <footer class=\"container-fluid text-center\">\n    <b> copyright &copy; Sveltoz Solutions</b>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(Router, fb, WebService) {
        this.Router = Router;
        this.fb = fb;
        this.WebService = WebService;
        this.confirmdelete = false;
        this.profileId = "";
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:5000/upload' });
        this.uploadedFiles = [];
        this.items = [];
        this.itemCount = 0;
        this.addbtn = true;
        this.updatebtn = false;
        // itemResource = new DataTableResource(this.items);
        this.update_profile = false;
        this.resizeOptions = {
            resizeMaxHeight: 900,
            resizeMaxWidth: 567
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.bindprofile();
    };
    ProfileComponent.prototype.submit = function () {
        debugger;
        if (this.profileId == "") {
            this.addprofile();
        }
        else {
            this.updateprofile();
        }
    };
    ProfileComponent.prototype.addprofile = function () {
        debugger;
        var radio = this.radio;
        var name = this.name;
        var cost = this.cost;
        var info = this.info;
        this.uploader.uploadAll();
        var video = this.uploader.queue[0].file.name;
        var categoryid = this.categorytype;
        this.WebService.Addprofile(this.profileId, radio, name, cost, info, video, categoryid);
        alert("profile is added ");
        location.reload();
    };
    ProfileComponent.prototype.bindprofile = function () {
        var _this = this;
        console.log("in add refresh");
        this.WebService.getprofilelist().subscribe(function (profile) {
            _this.items = [];
            for (var i = (profile.length - 1); i >= 0; i--) {
                _this.items.push({ 'id': profile[i]._id, 'radio': profile[i].profile.radio, 'name': profile[i].profile.name, 'cost': profile[i].profile.cost, 'info': profile[i].profile.info, 'video': profile[i].profile.video, 'categoryid': profile[i].profile.categoryid });
            }
            // this.itemResource = new DataTableResource(this.items);
            // this.itemResource.count().then(count => this.itemCount = count);
            _this.reloadItems({ offset: 0, limit: 5 });
        });
    };
    ProfileComponent.prototype.reloadItems = function (params) {
        console.log("in reload");
        // this.itemResource.query(params).then(items => this.items = items);
    };
    ProfileComponent.prototype.change = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadedFiles.push(data);
        }
    };
    ProfileComponent.prototype.DeleteClicked = function (event) {
        var _this = this;
        this.profileId = event.id;
        var obs = this.WebService.deletemenu(this.profileId).flatMap(function (profile) {
            _this.items = [];
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].forkJoin([
                __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].of(profile),
                _this.WebService.getprofilelist()
            ]);
        });
        obs.subscribe(function (result) {
            var interests = result[0];
            var selections = result[1];
            console.log(interests);
            for (var i = (selections.length - 1); i >= 0; i--) {
                _this.items.push({ 'id': selections[i]._id, 'name': selections[i].profile.name, 'cost': selections[i].profile.cost, 'info': selections[i].profile.info, 'video': selections[i].profile.video, 'categoryid': selections[i].profile.categoryid });
            }
            // this.itemResource = new DataTableResource(this.items);
            // this.itemResource.count().then(count => this.itemCount = count);
            _this.reloadItems({ offset: 0, limit: 5 });
            alert("record is deleted");
            location.reload();
        });
    };
    ProfileComponent.prototype.EditClicked = function (event) {
        var _this = this;
        debugger;
        // this.updatebtn = true;
        // this.addbtn = false;
        this.profileId = event.id;
        this.WebService.getProfile(this.profileId).subscribe(function (profiles) {
            debugger;
            _this.radio = profiles.profile.radio;
            _this.name = profiles.profile.name;
            _this.cost = profiles.profile.cost;
            _this.info = profiles.profile.info;
            _this.categorytype = profiles.profile.categoryid;
            _this.uploader.uploadAll();
            var video = profiles.profile.video;
        });
    };
    ProfileComponent.prototype.updateprofile = function () {
        this.update_profile = true;
        var name = this.name;
        var cost = this.cost;
        var info = this.info;
        var video = this.uploader.queue[0].file.name;
        var categoryid = this.categorytype;
        this.WebService.updateprofile(this.profileId, this.radio, name, cost, info, video, categoryid).subscribe(function (result) {
            console.log(result);
        });
        alert("record is updated successfully");
        this.profileId = "";
        location.reload();
    };
    ProfileComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
    };
    ProfileComponent.prototype.logForm = function (event) {
        console.log(this.files);
    };
    ProfileComponent.prototype.Cancle = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "fileInput", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            providers: [
                { provide: 'ORIGIN_URL', useValue: location.origin },
                __WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Full-width inputs */\r\ninput[type=text] {\r\n    width: 100%; \r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n/* Bordered form */\r\n /* form {\r\n    \r\n     border: 400px solid #f1f1f1; \r\n }  */\r\n\r\n/* Set a style for login buttons */\r\nbutton {\r\n    background-color: rgb(233, 132, 17);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #bb514a;\r\n}\r\n\r\n/* Add padding to containers */\r\n.container {\r\n    padding: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <body>\n\n  <form class=\"register-form\" [formGroup]=\"add\">\n    <div class=\"wrapper\">\n\n      <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n\n        <div>\n          <input class=\"form-control\" placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstname\" type=\"text\" required=\"\">\n          <input class=\"form-control\" placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastname\" type=\"text\" required=\"\">\n          <input class=\"form-control\" placeholder=\"Mobile Number\" id=\"mobileno\" formControlName=\"mobileno\" type=\"text\" required=\"\">\n          <input class=\"form-control\" placeholder=\"Email\" id=\"email\" formControlName=\"email\" type=\"text\" required=\"\">\n          <input class=\"form-control\" placeholder=\"Password\" id=\"password\" formControlName=\"password\" type=\"text\" required=\"\">\n\n          <button type=\"register\" (click)=\"newregister()\">Register</button>\n          <br>\n        </div>\n\n        <div class=\"container\" style=\"background-color:#f1f1f1\">\n          <button type=\"button\" class=\"cancelbtn\" (click)=\"cancle()\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</body> -->\n<body>\n    <form class=\"register-form\" [formGroup]=\"add\">\n        <div class=\"wrapper\">\n            <div class=\"page-header\">\n                <div class=\"filter\"></div>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                            <div class=\"card card-register\">\n                                <h3 class=\"title\">Registration</h3>\n\n                               \n                                <input class=\"form-control\" placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstname\" type=\"text\" required=\"\">\n                                <span *ngIf=\"messagefirstname\" style=\"color:red !important;font: bold 15px Georgia, serif;margin-right: 44%;\">FirstName is required</span>\n\n                                <!-- <input type=\"text\"  class=\"form-control\" id=\"firstname\" formcontrolname=\"firstname\" placeholder=\"first name\"> -->\n                               \n                                <input class=\"form-control\" placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastname\" type=\"text\">\n\n                                <!-- <input type=\"text\" class=\"form-control\" id=\"lastname\" formcontrolname=\"lastname\" placeholder=\"Last Name\"> -->\n                               \n                                <input class=\"form-control\" placeholder=\"Mobile Number\" id=\"mobileno\" formControlName=\"mobileno\" type=\"text\">\n\n                                <!-- <input type=\"number\" class=\"form-control\" id=\"mobileno\" formcontrolname=\"mobileno\" placeholder=\"Mobile Number\"> -->\n                               \n                                <input class=\"form-control\" placeholder=\"Email \" id=\"email\" formControlName=\"email\" type=\"text\">\n                                <span *ngIf=\"messageemail\" style=\"color:red !important;font: bold 15px Georgia, serif;margin-right: 44%;\">Email is required</span>\n                                \n                                <!-- <input type=\"text\" class=\"form-control\" id=\"email\" formcontrolname=\"email\" placeholder=\"Email\"> -->\n                               \n                                <input class=\"form-control\" placeholder=\"Password\" id=\"password\" formControlName=\"password\" type=\"text\">\n                                <span *ngIf=\"messagepassword\" style=\"color:red !important;font: bold 15px Georgia, serif;margin-right: 44%;\">Password is required</span>\n                                \n                                <!-- <input type=\"password\" class=\"form-control\" id=\"password\" formcontrolname=\"password\" placeholder=\"Password\"> -->\n\n                                <button class=\"btn btn-danger btn-block btn-round\" (click)=\"newregister()\">Submit</button>\n                               \n                                <button class=\"btn btn-danger btn-block btn-round\" (click)=\"cancle()\">Cancle</button>\n\n\n                            </div>\n                        </div>\n                    </div>\n                  \n                </div>\n            </div>\n        </div>\n    </form>\n</body>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(Router, fb, WebService) {
        this.Router = Router;
        this.fb = fb;
        this.WebService = WebService;
        this.add_registration = false;
        this.valid = false;
        this.add = fb.group({
            firstname: [''],
            lastname: [''],
            mobileno: [''],
            email: [''],
            password: ['']
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.newregister = function () {
        var firstname = this.add.value.firstname;
        var lastname = this.add.value.lastname;
        var mobileno = this.add.value.mobileno;
        var email = this.add.value.email;
        var password = this.add.value.password;
        this.validate(firstname, lastname, mobileno, email, password);
        if (this.valid) {
            this.add_registration = true;
            this.WebService.newregister(firstname, lastname, mobileno, email, password);
            this.Router.navigate(['/login']);
        }
    };
    RegistrationComponent.prototype.validate = function (firstname, lastname, mobileno, email, password) {
        if (firstname == "") {
            this.messagefirstname = true;
            this.valid = false;
        }
        else {
            this.messagefirstname = false;
        }
        if (email == "") {
            this.messageemail = true;
            this.valid = false;
        }
        else {
            this.messageemail = false;
        }
        if (password == "") {
            this.messagepassword = true;
            this.valid = false;
        }
        else {
            this.messagepassword = false;
        }
        if (firstname != "" && lastname != "" && mobileno != "" && email != "" && password != "") {
            this.valid = true;
        }
    };
    RegistrationComponent.prototype.cancle = function () {
        this.Router.navigate(['/login']);
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
            providers: [
                { provide: 'ORIGIN_URL', useValue: location.origin },
                __WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebService = (function () {
    function WebService(http, router) {
        this.http = http;
        this.router = router;
        this.NAME_KEY = 'firstname';
        this.TOKEN_KEY = 'token';
        this.USER_ROLE = "userrole";
        this.loginvalid = "loginvalid";
        // base_url = 'http://localhost:8088/api/';
        this.base_url = 'https://restodemoapi.herokuapp.com/api/';
        //public uploader: FileUploader = new FileUploader({ url: 'http://localhost:8088/upload' });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({ url: 'https://restodemoapi.herokuapp.com/upload' });
    }
    WebService.prototype.newregister = function (firstname, lastname, mobileno, email, password) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        //var url = this.base_url + 'signup';
        data.append('firstname', firstname);
        data.append('lastname', lastname);
        data.append('mobileno', mobileno);
        data.append('email', email);
        data.append('password', password);
        console.log(data);
        this.http.post(this.base_url + 'auth/' + 'register', data).subscribe(function (res) { return res.json(); });
        {
        }
    };
    WebService.prototype.bindprofilelist = function () {
        debugger;
        var url = this.base_url + 'profile-list';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("in get profile");
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    Object.defineProperty(WebService.prototype, "UserRole", {
        get: function () {
            var user = localStorage.getItem(this.USER_ROLE);
            if (user === "Admin") {
                return true;
            }
            else {
                return false;
            }
            // return !!localStorage.getItem(this.USER_ROLE);
        },
        enumerable: true,
        configurable: true
    });
    WebService.prototype.Login = function (email, password) {
        var _this = this;
        localStorage.setItem(this.loginvalid, "false");
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        data.append('email', email);
        data.append('password', password);
        console.log(data);
        this.http.post(this.base_url + 'auth/login', data).subscribe(function (res) {
            _this.authenticate(res);
        });
    };
    WebService.prototype.authenticate = function (res) {
        localStorage.setItem(this.loginvalid, "true");
        var authResponse = res.json();
        if (!authResponse.token) {
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.user.firstname);
        localStorage.setItem(this.USER_ROLE, authResponse.user.role);
        this.router.navigate(['/Menu']);
    };
    Object.defineProperty(WebService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    WebService.prototype.Addprofile = function (profileId, radio, name, cost, info, video, categoryid) {
        var _this = this;
        debugger;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        data.append('radio', radio);
        data.append('name', name);
        data.append('cost', cost);
        data.append('info', info);
        data.append('video', video);
        data.append('categoryid', categoryid);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('token'), 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.base_url + 'add-profile', data, options).subscribe(function (res) {
            _this.authenticate(res);
        });
    };
    WebService.prototype.getprofilelist = function () {
        var url = this.base_url + 'profile-list';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("in get profile");
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    WebService.prototype.deletemenu = function (profileId) {
        var url = this.base_url + 'profiles/' + profileId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(url, options).map(function (res) { return res.json(); });
    };
    WebService.prototype.updateprofile = function (profileId, radio, name, cost, info, video, categoryid) {
        var url = this.base_url + 'profiles/' + profileId;
        console.log(url);
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        data.append('radio', radio);
        data.append('name', name);
        data.append('cost', cost);
        data.append('info', info);
        data.append('video', video);
        data.append('categoryid', categoryid);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('token'), 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(url, data, options).map(function (res) { return res.json(); });
    };
    WebService.prototype.getProfile = function (profileId) {
        debugger;
        var url = this.base_url + 'profiles/' + profileId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': localStorage.getItem('token') });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    WebService.prototype.getcategorylist = function (Authorization) {
        var url = this.base_url + 'category-list?Authorization=';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': Authorization });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        data.append('Authorization', Authorization);
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    WebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], WebService);
    return WebService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map