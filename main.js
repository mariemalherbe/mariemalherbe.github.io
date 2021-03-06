(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-home-page></app-home-page>\n<app-steps></app-steps>\n<app-slider></app-slider>\n<app-fonctionnement></app-fonctionnement>\n<app-contact></app-contact>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\na, button {\n  cursor: pointer;\n  outline: none; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_page_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-page-scroll */ "./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps/steps.component */ "./src/app/steps/steps.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _fonctionnement_fonctionnement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fonctionnement/fonctionnement.component */ "./src/app/fonctionnement/fonctionnement.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _steps_steps_component__WEBPACK_IMPORTED_MODULE_6__["StepsComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
                _fonctionnement_fonctionnement_component__WEBPACK_IMPORTED_MODULE_8__["FonctionnementComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng2_page_scroll__WEBPACK_IMPORTED_MODULE_2__["Ng2PageScrollModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__["NguCarouselModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contact\">\n<div class=\"links\">\n  <a href=\"mailto:contact@uppli.fr\"><button class=\"button_line\">Discover Magnus API</button></a>\n</div>\n\n<div class=\"block_title\">\n    <h1 class=\"title\">Contact</h1>\n    <h2 class=\"subtitle\">Call us maybe !</h2>\n</div>\n\n<div class=\"list_contact\">\n  <ul>\n    <li class=\"social_item\">\n      <img src=\"../assets/imgs/telephone.svg\" alt=\"\">\n        <p>09 72 62 66 91</p>\n    </li>\n    <li class=\"social_item\">\n      <img src=\"../assets/imgs/pin.svg\" alt=\"\">\n        <p>24, avenue Marceau - 75008 Paris</p>\n    </li>\n    <li class=\"social_item\">\n      <img src=\"../assets/imgs/mail.svg\" alt=\"\">\n        <p>contact@uppli.fr</p>\n    </li>\n  </ul>\n\n  <div class=\"social\">\n    <img src=\"../assets/imgs/twitter.svg\" alt=\"\">\n    <p>@Uppli_io</p>\n  </div>\n</div>\n\n\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\na, button {\n  cursor: pointer;\n  outline: none; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\n.contact .links {\n  width: 100vw;\n  height: 290px;\n  background: linear-gradient(#582CFF, #7571F4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-position: center; }\n\n@media screen and (max-width: 1030px) {\n    .contact .links {\n      height: 50vh;\n      flex-direction: column;\n      justify-content: space-around; } }\n\n.contact .links .button_line {\n    width: 240px;\n    height: 65px;\n    background: none;\n    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);\n    color: white;\n    border: 1px solid white;\n    font-family: Helvetica;\n    color: white;\n    font-weight: 200;\n    font-size: 1.25em;\n    border-radius: 32.5px;\n    outline: none;\n    margin-right: 50px; }\n\n@media screen and (max-width: 1030px) {\n      .contact .links .button_line {\n        margin-right: inherit; } }\n\n.contact .links .button_regular {\n    width: 240px;\n    height: 65px;\n    background: white;\n    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);\n    color: #6D5EF7 !important;\n    border: none;\n    font-family: Helvetica;\n    color: white;\n    font-weight: 200;\n    font-size: 1.25em;\n    border-radius: 32.5px;\n    outline: none; }\n\n.contact h2 {\n  width: 50vw; }\n\n.contact h1 {\n  color: #373633; }\n\n.contact .block_title {\n  margin-top: 100px;\n  margin-left: 8vw; }\n\n.contact .list_contact {\n  margin-top: 100px;\n  position: relative;\n  margin-left: 8vw; }\n\n@media screen and (max-width: 1030px) {\n    .contact .list_contact {\n      margin-left: inherit; } }\n\n.contact .list_contact ul {\n    margin-right: 300px; }\n\n@media screen and (max-width: 1030px) {\n      .contact .list_contact ul {\n        margin-right: inherit; } }\n\n.contact .list_contact ul li {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n\n@media screen and (max-width: 1030px) {\n        .contact .list_contact ul li {\n          flex-direction: column;\n          margin-bottom: 25px; } }\n\n.contact .list_contact ul li p {\n        font-size: 1.625em;\n        font-weight: 400; }\n\n@media screen and (max-width: 1030px) {\n          .contact .list_contact ul li p {\n            text-align: center; } }\n\n.contact .list_contact .social {\n    position: absolute;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 25vw;\n    height: 25vw;\n    box-shadow: 0px 1px 100px 0px rgba(96, 246, 213, 0.22);\n    border-radius: 25vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n\n@media screen and (max-width: 1030px) {\n      .contact .list_contact .social {\n        position: relative;\n        width: 85vw;\n        height: 85vw;\n        border-radius: 85vw; } }\n\n.contact .list_contact .social p {\n      font-size: 3em;\n      font-weight: 600;\n      margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        if (document.documentElement.clientWidth > 425) {
            sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.social_item', { delay: 500, duration: 750, origin: 'right' }, 100);
            sr.reveal('.social', { delay: 750, duration: 500, opacity: 0 });
        }
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/fonctionnement/fonctionnement.component.html":
/*!**************************************************************!*\
  !*** ./src/app/fonctionnement/fonctionnement.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"steps\">\n  <div class=\"block_title\">\n    <h1 class=\"title\">How it works ?</h1>\n    <h2 class=\"subtitle\">Since we are very nice, we let you know some secrets about Magnus !</h2>\n  </div>\n\n  <div class=\"block_detail\">\n    <div class=\"block_detail--left\">\n      <img class=\"img\" src=\"../assets/imgs/iphone8.png\" alt=\"\">\n    </div>\n    <div class=\"block_detail--right\">\n      <ul>\n        <li class=\"list_item\">\n            <div>\n                <img src=\"../assets/imgs/signal.svg\" alt=\"\">\n                <span>No signal</span>\n            </div>\n          <p>With magnus you need no Wifi, no Bluetooth, no 4G…\n              And find your way in big indoor spaces !\n          </p>\n        </li>\n        <li class=\"list_item\">\n            <div>\n                <img src=\"../assets/imgs/boussole.svg\" alt=\"\">\n                <span>Geomagnetisme</span>\n            </div>\n            <p>Our solution uses geomagnetisme to locate you without using any signal.\n                It’s safe and economic !\n            </p>\n        </li>\n        <li class=\"list_item\">\n          <div>\n              <img src=\"../assets/imgs/boussole2.svg\" alt=\"\">\n              <span>Collect</span>\n          </div>\n            <p>The Magnus API collects and analyzes environmental data to locate you inside a building. This data can be also matched with strategically positioned Bluetooth beacons for higher precision.\n            </p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/fonctionnement/fonctionnement.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/fonctionnement/fonctionnement.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\na, button {\n  cursor: pointer;\n  outline: none; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh2 {\n  width: 50vw;\n  margin: 1em auto;\n  text-align: center; }\n\nh1 {\n  color: #373633;\n  text-align: center; }\n\n.block_title {\n  margin-top: 100px;\n  margin-left: 8em; }\n\n@media screen and (max-width: 1030px) {\n    .block_title {\n      margin-left: inherit; } }\n\n.block_detail {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw; }\n\n@media screen and (max-width: 1030px) {\n    .block_detail {\n      flex-direction: column; } }\n\n.block_detail--left {\n    width: 40%;\n    height: 100%;\n    align-items: center; }\n\n@media screen and (max-width: 1030px) {\n      .block_detail--left {\n        display: flex;\n        align-items: center;\n        justify-content: center; } }\n\n.block_detail--left img {\n      width: 30vw; }\n\n.block_detail--right {\n    width: 40%; }\n\n@media screen and (max-width: 1030px) {\n      .block_detail--right {\n        width: 85vw; } }\n\n.block_detail--right ul li {\n      margin: 100px 0px; }\n\n@media screen and (max-width: 1030px) {\n        .block_detail--right ul li {\n          margin: inherit;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n          margin-bottom: 25px; } }\n\n.block_detail--right ul li div {\n        display: flex;\n        align-items: center; }\n\n@media screen and (max-width: 1030px) {\n          .block_detail--right ul li div {\n            flex-direction: column; } }\n\n.block_detail--right ul li div span {\n          font-family: Helvetica;\n          font-size: 3em;\n          color: #373633;\n          font-weight: 600;\n          margin-left: 1em; }\n\n@media screen and (max-width: 1030px) {\n            .block_detail--right ul li div span {\n              margin-left: inherit;\n              text-align: center; } }\n\n.block_detail--right ul li p {\n        max-width: 415px;\n        margin-top: 60px;\n        font-weight: 400;\n        line-height: 27px; }\n\n@media screen and (max-width: 1030px) {\n          .block_detail--right ul li p {\n            text-align: center; } }\n"

/***/ }),

/***/ "./src/app/fonctionnement/fonctionnement.component.ts":
/*!************************************************************!*\
  !*** ./src/app/fonctionnement/fonctionnement.component.ts ***!
  \************************************************************/
/*! exports provided: FonctionnementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonctionnementComponent", function() { return FonctionnementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FonctionnementComponent = /** @class */ (function () {
    function FonctionnementComponent() {
    }
    FonctionnementComponent.prototype.ngOnInit = function () {
        if (document.documentElement.clientWidth > 425) {
            sr.reveal('.title', { delay: 100, origin: 'bottom', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.subtitle', { delay: 200, origin: 'bottom', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.list_item', { delay: 500, duration: 750, origin: 'right' }, 100);
            sr.reveal('.img', { delay: 300, scale: 0.5, ease: 'ease-in-out', duration: 1000 });
        }
    };
    FonctionnementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fonctionnement',
            template: __webpack_require__(/*! ./fonctionnement.component.html */ "./src/app/fonctionnement/fonctionnement.component.html"),
            styles: [__webpack_require__(/*! ./fonctionnement.component.scss */ "./src/app/fonctionnement/fonctionnement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FonctionnementComponent);
    return FonctionnementComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"homepage\">\n  <div class=\"side_left\">\n    <div class=\"side_left-content\">\n      <h1 class=\"title\">Magnus</h1>\n      <h3 class=\"subtitle\">Troubles finding your way ? </h3>\n      <p class=\"paragraph\">Magnus API is uppli's solution for indoor navigation and positioning without the need of GPS or any expensive infrastructure.</p>\n      <a pageScroll href=\"#steps\"><button class=\"button\">Discover magnus API</button></a>\n    </div>\n  </div>\n  <img class=\"logo\" src=\"../assets/imgs/pinRoom.svg\" alt=\"\">\n  <div class=\"side_right\">\n    <div class=\"side_right-overlay\"></div>\n    <video id=\"videoMagnus\" loop autoplay playsinline muted>\n      <source src=\"../../assets/video/magnusFinal.mp4\">\n    </video>\n  </div>\n  <button id=\"buttonMagnus\">Play the video</button>\n</section>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\na, button {\n  cursor: pointer;\n  outline: none; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\n.homepage {\n  height: 85vh;\n  min-height: 800px;\n  width: 100vw;\n  position: relative;\n  display: flex; }\n\n@media screen and (max-width: 820px) {\n    .homepage {\n      flex-direction: column;\n      height: auto; } }\n\n.homepage .side_left {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column; }\n\n@media screen and (max-width: 820px) {\n      .homepage .side_left {\n        width: 100%; } }\n\n.homepage .side_left-content {\n      margin: 8vw auto;\n      width: 65%; }\n\n.homepage .side_left-content h1 {\n        margin-bottom: 10pt; }\n\n@media screen and (max-width: 820px) {\n          .homepage .side_left-content h1 {\n            margin-top: 50px; } }\n\n.homepage .side_left-content h3 {\n        margin-bottom: 35pt; }\n\n.homepage .side_left-content button {\n        width: 240px;\n        height: 65px;\n        background: linear-gradient(#582CFF, #7571F4);\n        box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);\n        color: white;\n        border: none;\n        font-family: Helvetica;\n        color: white;\n        font-weight: 200;\n        font-size: 1.25em;\n        border-radius: 32.5px;\n        outline: none;\n        margin-top: 100pt; }\n\n.homepage .logo {\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3; }\n\n@media screen and (max-width: 820px) {\n      .homepage .logo {\n        display: none; } }\n\n.homepage .side_right {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    position: relative; }\n\n@media screen and (max-width: 820px) {\n      .homepage .side_right {\n        width: 100%; } }\n\n.homepage .side_right-overlay {\n      background-color: #373633;\n      z-index: 2;\n      opacity: 0.5;\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 100%; }\n\n.homepage .side_right video {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: contain;\n         object-fit: contain; }\n\n.homepage #buttonMagnus {\n    width: 240px;\n    height: 65px;\n    background: linear-gradient(#582CFF, #7571F4);\n    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);\n    color: white;\n    border: none;\n    font-family: Helvetica;\n    color: white;\n    font-weight: 200;\n    font-size: 1.25em;\n    border-radius: 32.5px;\n    outline: none;\n    margin: 50pt auto;\n    display: none; }\n\n@media screen and (max-width: 425px) {\n      .homepage #buttonMagnus {\n        display: block; } }\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        window.sr = ScrollReveal();
        if (document.documentElement.clientWidth > 425) {
            console.log(document.documentElement.clientWidth > 425);
            sr.reveal('.logo', { origin: 'top', });
            sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.button', { delay: 1000, origin: 'bottom', distance: '200px', ease: 'ease-in-out', duration: 750 });
            sr.reveal('.side_right', { delay: 300, origin: 'bottom', scale: 0.8, ease: 'ease-in-out', duration: 500 });
        }
        var video = document.getElementById('videoMagnus');
        var button = document.getElementById('buttonMagnus');
        button.addEventListener('click', function () {
            video.play();
        }, false);
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section_slider\">\n    <div class=\"block_title\">\n        <h1 class=\"title\">Why use it ?</h1>\n        <h2 class=\"subtitle\">Thanks to its engine, Magnus can tell you where you are and where to go even inside complex buildings without relying on GPS signal or expensive infrastructures,</h2>\n        <h4 class=\"subtitle\">you just need to enjoy the journey !</h4>\n      </div>\n\n   <div class=\"block_testimony\">\n      <ngu-carousel\n      [inputs]=\"carouselBanner\">\n          <ngu-item NguCarouselItem>\n              <div class=\"block_inner\"> \n                    <div class=\"block_inner--left\">\n                      <p class=\"block_place\">Mairie de Paris</p>\n                      <p class=\"block_event\">Hacking de l'hôtel de ville</p>\n                      <p class=\"block_city\">Paris</p>\n                      <p class=\"block_description\">The Mairie the Paris launched in mid-march its special event the « Hacking of hotel de ville ».\n                        …</p>\n                    </div>\n                    <img class=\"block_inner--right\" src=\"../../assets/imgs/hacking.png\" alt=\"\">\n              </div>\n          </ngu-item>\n\n          <ngu-item NguCarouselItem>\n                  <div class=\"block_inner\"> \n                <div class=\"block_inner--left\">\n                  <p class=\"block_place\">Ratp</p>\n                  <p class=\"block_event\">VivaTech 2018</p>\n                  <p class=\"block_city\">Paris - Porte de Versailles</p>\n                  <p class=\"block_description\">We mapped the booth of Ratp at vivatech so visiotrs could see their position on the map and find the startups they wanted to meet !</p>\n                </div>\n                <img class=\"block_inner--right\" src=\"../../assets/imgs/vivatech.jpg\" alt=\"\">\n            </div>\n          </ngu-item>\n              <button NguCarouselPrev class='leftRs'></button>\n              <button NguCarouselNext class='rightRs'></button>\n    </ngu-carousel>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/slider/slider.component.scss":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\na, button {\n  cursor: pointer;\n  outline: none; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  color: #373633; }\n\nh2 {\n  width: 50vw;\n  margin-top: 1em; }\n\n.block_title {\n  margin-left: 8vw;\n  margin-top: 100px; }\n\n.block_testimony {\n  width: 100vw;\n  height: 85vh;\n  min-height: 785px;\n  margin-top: 100px;\n  background: #6D5EF7;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.block_inner {\n  background-color: white;\n  height: 65vh;\n  min-height: 530px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 100px; }\n\n@media screen and (max-width: 820px) {\n    .block_inner {\n      flex-direction: column;\n      margin: inherit;\n      min-height: 650px; } }\n\n.block_inner--left {\n    width: 30%;\n    padding: 30px; }\n\n@media screen and (max-width: 820px) {\n      .block_inner--left {\n        width: 85%; } }\n\n.block_inner--left .block_place {\n      font-size: 1.125em;\n      font-weight: 400; }\n\n.block_inner--left .block_event {\n      font-size: 1.125em; }\n\n.block_inner--left .block_city {\n      font-size: 1.125em;\n      font-weight: 400;\n      color: #57F5D2;\n      margin: 25px 0px; }\n\n.block_inner--right {\n    width: 70%; }\n\n@media screen and (max-width: 820px) {\n      .block_inner--right {\n        width: 85%; } }\n\n.leftRs {\n  position: absolute;\n  bottom: -50px;\n  width: 50px;\n  height: 50px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 40pt;\n  right: 200px; }\n\n@media screen and (max-width: 820px) {\n    .leftRs {\n      right: 85px; } }\n\n.leftRs:hover:after {\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2231px%22 height%3D%2223px%22 viewBox%3D%220 0 31 23%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Earrows copy%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22MagnusLAndingPage%22 transform%3D%22translate(-1256.000000%2C -4349.000000)%22 fill%3D%22%2357F5D2%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22exempleUse%22 transform%3D%22translate(2.000000%2C 3262.000000)%22%3E                %3Cg id%3D%22nav%22 transform%3D%22translate(1106.000000%2C 1087.000000)%22%3E                    %3Cg id%3D%22arrows-copy%22 transform%3D%22translate(164.000000%2C 11.500000) scale(-1%2C 1) translate(-164.000000%2C -11.500000) translate(148.000000%2C 0.000000)%22%3E                        %3Cpath d%3D%22M10.9107297%2C0.976574669 C11.3404612%2C0.5468431 12.0169981%2C0.5468431 12.4467297%2C0.976574669 C12.8619433%2C1.39178828 12.8619433%2C2.0828431 12.4467297%2C2.49708885 L4.65832892%2C10.2854896 L30.3589868%2C10.2854896 C30.9580945%2C10.2854896 31.4497694%2C10.7616786 31.4497694%2C11.3607864 C31.4497694%2C11.9598941 30.9580945%2C12.451569 30.3589868%2C12.451569 L4.65832892%2C12.451569 L12.4467297%2C20.2254518 C12.8619433%2C20.6551834 12.8619433%2C21.347206 12.4467297%2C21.7614518 C12.0169981%2C22.1911834 11.3404612%2C22.1911834 10.9107297%2C21.7614518 L1.2785482%2C12.1292703 C0.863334594%2C11.7140567 0.863334594%2C11.0230019 1.2785482%2C10.6087561 L10.9107297%2C0.976574669 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    transition: all 1s ease-out; }\n\n.leftRs:after {\n    content: '';\n    display: block;\n    width: 32px;\n    height: 22px;\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2232px%22 height%3D%2222px%22 viewBox%3D%220 0 32 22%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Earrows%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22MagnusLAndingPage%22 transform%3D%22translate(-1108.000000%2C -4349.000000)%22 fill%3D%22%23454545%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22exempleUse%22 transform%3D%22translate(2.000000%2C 3262.000000)%22%3E                %3Cg id%3D%22nav%22 transform%3D%22translate(1106.000000%2C 1087.000000)%22%3E                    %3Cg id%3D%22arrows%22%3E                        %3Cpath d%3D%22M10.4385652%2C0.328144824 C10.889688%2C-0.109381608 11.5999016%2C-0.109381608 12.0510244%2C0.328144824 C12.4869065%2C0.750889957 12.4869065%2C1.45447976 12.0510244%2C1.87623947 L3.87493154%2C9.80591334 L30.8549203%2C9.80591334 C31.4838505%2C9.80591334 32%2C10.2907399 32%2C10.9007148 C32%2C11.5106898 31.4838505%2C12.0112831 30.8549203%2C12.0112831 L3.87493154%2C12.0112831 L12.0510244%2C19.9261756 C12.4869065%2C20.3637021 12.4869065%2C21.0682773 12.0510244%2C21.490037 C11.5999016%2C21.9275634 10.889688%2C21.9275634 10.4385652%2C21.490037 L0.326911628%2C11.6831382 C-0.108970543%2C11.2603931 -0.108970543%2C10.5568033 0.326911628%2C10.1350436 L10.4385652%2C0.328144824 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n.rightRs {\n  position: absolute;\n  bottom: -50px;\n  width: 50px;\n  height: 50px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 40pt;\n  right: 100px; }\n\n@media screen and (max-width: 820px) {\n    .rightRs {\n      right: 15px; } }\n\n.rightRs:hover:after {\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2231px%22 height%3D%2223px%22 viewBox%3D%220 0 31 23%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Earrows copy%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22MagnusLAndingPage%22 transform%3D%22translate(-1256.000000%2C -4349.000000)%22 fill%3D%22%2357F5D2%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22exempleUse%22 transform%3D%22translate(2.000000%2C 3262.000000)%22%3E                %3Cg id%3D%22nav%22 transform%3D%22translate(1106.000000%2C 1087.000000)%22%3E                    %3Cg id%3D%22arrows-copy%22 transform%3D%22translate(164.000000%2C 11.500000) scale(-1%2C 1) translate(-164.000000%2C -11.500000) translate(148.000000%2C 0.000000)%22%3E                        %3Cpath d%3D%22M10.9107297%2C0.976574669 C11.3404612%2C0.5468431 12.0169981%2C0.5468431 12.4467297%2C0.976574669 C12.8619433%2C1.39178828 12.8619433%2C2.0828431 12.4467297%2C2.49708885 L4.65832892%2C10.2854896 L30.3589868%2C10.2854896 C30.9580945%2C10.2854896 31.4497694%2C10.7616786 31.4497694%2C11.3607864 C31.4497694%2C11.9598941 30.9580945%2C12.451569 30.3589868%2C12.451569 L4.65832892%2C12.451569 L12.4467297%2C20.2254518 C12.8619433%2C20.6551834 12.8619433%2C21.347206 12.4467297%2C21.7614518 C12.0169981%2C22.1911834 11.3404612%2C22.1911834 10.9107297%2C21.7614518 L1.2785482%2C12.1292703 C0.863334594%2C11.7140567 0.863334594%2C11.0230019 1.2785482%2C10.6087561 L10.9107297%2C0.976574669 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n    -webkit-transform: inherit;\n            transform: inherit;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition: all 1s ease-out; }\n\n.rightRs:after {\n    content: '';\n    display: block;\n    width: 32px;\n    height: 22px;\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2232px%22 height%3D%2222px%22 viewBox%3D%220 0 32 22%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Earrows%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22MagnusLAndingPage%22 transform%3D%22translate(-1108.000000%2C -4349.000000)%22 fill%3D%22%23454545%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22exempleUse%22 transform%3D%22translate(2.000000%2C 3262.000000)%22%3E                %3Cg id%3D%22nav%22 transform%3D%22translate(1106.000000%2C 1087.000000)%22%3E                    %3Cg id%3D%22arrows%22%3E                        %3Cpath d%3D%22M10.4385652%2C0.328144824 C10.889688%2C-0.109381608 11.5999016%2C-0.109381608 12.0510244%2C0.328144824 C12.4869065%2C0.750889957 12.4869065%2C1.45447976 12.0510244%2C1.87623947 L3.87493154%2C9.80591334 L30.8549203%2C9.80591334 C31.4838505%2C9.80591334 32%2C10.2907399 32%2C10.9007148 C32%2C11.5106898 31.4838505%2C12.0112831 30.8549203%2C12.0112831 L3.87493154%2C12.0112831 L12.0510244%2C19.9261756 C12.4869065%2C20.3637021 12.4869065%2C21.0682773 12.0510244%2C21.490037 C11.5999016%2C21.9275634 10.889688%2C21.9275634 10.4385652%2C21.490037 L0.326911628%2C11.6831382 C-0.108970543%2C11.2603931 -0.108970543%2C10.5568033 0.326911628%2C10.1350436 L10.4385652%2C0.328144824 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
        if (document.documentElement.clientWidth > 425) {
            sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.block_testimony', { delay: 300, scale: 0.5, ease: 'ease-in-out', duration: 1000 });
        }
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 750,
            interval: 5000,
            point: {
                visible: false,
            },
            load: 2,
            loop: true,
            touch: true
        };
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/steps/steps.component.html":
/*!********************************************!*\
  !*** ./src/app/steps/steps.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"steps\" id=\"steps\">\n  <div class=\"block_title\">\n    <h1 class=\"title\">What can you do ?</h1>\n    <h2 class=\"subtitle\">Here are all the incredible things our super product can do for you :</h2>\n  </div>\n  <div class=\"block_detail\">\n    <div class=\"block_detail-left\">\n      <div class=\"block_title block_anim\">\n          <p class=\"number\">1</p>\n          <h4>Map your space</h4>\n      </div>\n\n      <div class=\"block_description\">\n        <p class=\"paragraph\">Magnus lets you map your space. Add walls, rooms, and even your hallways if you want to ! </p>\n        <img class=\"img\" src=\"../assets/imgs/capture.png\" alt=\"\">\n      </div>\n    </div>\n\n\n    <div class=\"block_detail-right\">\n        <div class=\"block_title block_anim\">\n            <p class=\"number\">2</p>\n            <h4>Add POIs</h4>\n        </div>\n\n        <div class=\"block_description\">\n          <p class=\"paragraph\">After that, you can add any point of interest you want. Then, let your users go to these points !</p>\n          <img class=\"img\" src=\"../assets/imgs/step2.png\" alt=\"\">\n        </div>\n      </div>\n\n\n      <div class=\"block_detail-left\">\n          <div class=\"block_title block_anim\">\n              <p class=\"number\">3</p>\n              <h4>Get your indoor itinirary</h4>\n          </div>\n\n          <div class=\"block_description\">\n            <p class=\"paragraph\">Thanks to its powerful engine, Magnus geolocalize you into your space and give you the best way to go to the point/room/hallway you selected</p>\n            <img class=\"img\" src=\"../assets/imgs/step3.png\" alt=\"\">\n          </div>\n        </div>\n\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/steps/steps.component.scss":
/*!********************************************!*\
  !*** ./src/app/steps/steps.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\na, button {\n  cursor: pointer;\n  outline: none; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #cacaca;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 85vw !important;\n      line-height: 1.5em;\n      font-size: 1.75em; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  color: #373633;\n  margin-left: 8vw; }\n\nh2 {\n  margin-left: 8vw;\n  width: 50vw;\n  margin-top: 1em; }\n\n.steps {\n  margin-top: 80px; }\n\n.steps .block_detail {\n    margin-top: 80px; }\n\n.steps .block_detail-left {\n      margin-top: 80px; }\n\n.steps .block_detail-left .block_title {\n        margin-left: 8vw;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center; }\n\n.steps .block_detail-left .block_title p {\n          color: white;\n          background: linear-gradient(#582CFF, #7571F4);\n          width: 65px;\n          height: 65px;\n          border-radius: 35px;\n          text-align: center;\n          font-size: 3em;\n          font-weight: bold;\n          margin-right: 0.5em; }\n\n.steps .block_detail-left .block_description {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center; }\n\n@media screen and (max-width: 820px) {\n          .steps .block_detail-left .block_description {\n            display: block;\n            margin-left: 8vw;\n            margin-top: 25px; } }\n\n.steps .block_detail-left .block_description img {\n          width: 50vw; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-left .block_description img {\n              margin: 0 auto;\n              display: block; } }\n\n.steps .block_detail-left .block_description p {\n          width: 20vw;\n          font-size: 1.2em;\n          font-weight: 400;\n          margin-right: 10em;\n          line-height: 2em; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-left .block_description p {\n              width: 100%;\n              margin-bottom: 15px; } }\n\n.steps .block_detail-right {\n      margin-top: 80px; }\n\n.steps .block_detail-right .block_title {\n        margin-right: 8vw;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        flex-direction: row-reverse; }\n\n.steps .block_detail-right .block_title p {\n          color: white;\n          background: linear-gradient(#582CFF, #7571F4);\n          width: 65px;\n          height: 65px;\n          border-radius: 35px;\n          text-align: center;\n          font-size: 3em;\n          font-weight: bold;\n          margin-left: 0.5em; }\n\n.steps .block_detail-right .block_description {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        flex-direction: row-reverse; }\n\n@media screen and (max-width: 820px) {\n          .steps .block_detail-right .block_description {\n            display: block;\n            margin-right: 8vw;\n            margin-top: 25px; } }\n\n.steps .block_detail-right .block_description img {\n          width: 50vw; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-right .block_description img {\n              margin: 0 auto;\n              display: block; } }\n\n.steps .block_detail-right .block_description p {\n          width: 20vw;\n          font-size: 1.2em;\n          font-weight: 400;\n          margin-left: 10em;\n          text-align: right;\n          line-height: 2em; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-right .block_description p {\n              width: 100%;\n              margin-bottom: 15px;\n              margin-left: 0em; } }\n"

/***/ }),

/***/ "./src/app/steps/steps.component.ts":
/*!******************************************!*\
  !*** ./src/app/steps/steps.component.ts ***!
  \******************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepsComponent = /** @class */ (function () {
    function StepsComponent() {
    }
    StepsComponent.prototype.ngOnInit = function () {
        if (document.documentElement.clientWidth > 425) {
            sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.block_anim', { delay: 100, opacity: 0, ease: 'ease-in-out', duration: 500 });
            sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
            sr.reveal('.img', { delay: 300, origin: 'right', distance: '200px', ease: 'ease-in-out', duration: 1000 });
        }
    };
    StepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-steps',
            template: __webpack_require__(/*! ./steps.component.html */ "./src/app/steps/steps.component.html"),
            styles: [__webpack_require__(/*! ./steps.component.scss */ "./src/app/steps/steps.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StepsComponent);
    return StepsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariemalherbe/Desktop/magnus-new/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map