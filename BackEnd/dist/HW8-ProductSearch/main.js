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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-search-form></app-search-form>\n<app-result-container></app-result-container>\n\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'HW8-ProductSearch';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-search-form/search-form.component */ "./src/app/product-search-form/search-form.component.ts");
/* harmony import */ var _products_table_products_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products-table/products-table.component */ "./src/app/products-table/products-table.component.ts");
/* harmony import */ var _result_contain_result_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./result-contain/result-container.component */ "./src/app/result-contain/result-container.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wish-list/wish-list.component */ "./src/app/wish-list/wish-list.component.ts");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/search-service */ "./src/app/service/search-service.ts");
/* harmony import */ var _service_local_cache_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/local-cache-service */ "./src/app/service/local-cache-service.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _product_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__["SearchFormComponent"],
            _products_table_products_table_component__WEBPACK_IMPORTED_MODULE_11__["ProductsTableComponent"],
            _result_contain_result_container_component__WEBPACK_IMPORTED_MODULE_12__["ResultContainerComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"],
            _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_14__["WishListComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__["RoundProgressModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]
        ],
        providers: [_service_search_service__WEBPACK_IMPORTED_MODULE_15__["WebService"], _service_local_cache_service__WEBPACK_IMPORTED_MODULE_16__["LocalCacheService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons.red {\n  color: crimson;\n}\n.round-progress {\n  position: relative;\n  width: 36px;\n}\n.round-progress .round-progress-text {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  text-align: center;\n  width: 100%;\n  z-index: 1;\n}\n.material-icons.star{\n  color: yellow;\n}\n.photo-border{\n  border-style:solid;\n  border-width:8px;\n  border-color: black;\n  border-radius: 8px;\n  padding: 1px;\n}\n.google-photo-border{\n  border-style:solid;\n  border-width:8px;\n  border-color: black;\n  padding: 2px;\n  margin: 3px;\n}\n.whole-photo{\n  position: absolute;\n  text-align: center;\n  width: 100%;\n}\n.my-select{\n  margin: 20px;\n}\n.dark {\n  background: #282933;\n}\n.ship-text{\n  color:#b39959;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29ucy5yZWQge1xuICBjb2xvcjogY3JpbXNvbjtcbn1cbi5yb3VuZC1wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM2cHg7XG59XG4ucm91bmQtcHJvZ3Jlc3MgLnJvdW5kLXByb2dyZXNzLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLm1hdGVyaWFsLWljb25zLnN0YXJ7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4ucGhvdG8tYm9yZGVye1xuICBib3JkZXItc3R5bGU6c29saWQ7XG4gIGJvcmRlci13aWR0aDo4cHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMXB4O1xufVxuLmdvb2dsZS1waG90by1ib3JkZXJ7XG4gIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOjhweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDNweDtcbn1cbi53aG9sZS1waG90b3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm15LXNlbGVjdHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLmRhcmsge1xuICBiYWNrZ3JvdW5kOiAjMjgyOTMzO1xufVxuLnNoaXAtdGV4dHtcbiAgY29sb3I6I2IzOTk1OTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"productDetails !== null\">\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"productphotos\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"productphotosModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"productphotosModalLabel\">Product Images</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body \">\n\n          <div id=\"photosCarouselControls\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\" >\n              <div class=\"carousel-item active\" *ngIf=\"productImages.length > 0\" >\n                <img [attr.src]=productImages[0]  class=\"d-block w-100 photo-border\" alt=\"...\" data-toggle=\"modal\" data-target=\"#showPhoto\">\n              </div>\n              <div class=\"carousel-item \" *ngFor=\"let link of productImages.slice(1,productImages.length);index as i\">\n                  <img [attr.src]=link  class=\"d-block w-100 photo-border\" alt=\"...\" data-toggle=\"modal\" data-target=\"#showPhoto\">\n              </div>\n\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#photosCarouselControls\" role=\"button\" data-slide=\"prev\" (click)=\"previousImage()\">\n              <span class=\"carousel-control-prev-icon bg-dark\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#photosCarouselControls\" role=\"button\" data-slide=\"next\" (click)=\"nextImages()\">\n              <span class=\"carousel-control-next-icon bg-dark\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"showPhoto\"  role=\"dialog\" aria-labelledby=\"showPhotoModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl\" role=\"document\">\n      <a [href]=productImages[showImagesIndex] >\n        <img class=\"whole-photo d-block\" alt=\"Responsive image\" [attr.src]=productImages[showImagesIndex]  >\n      </a>\n    </div>\n  </div>\n\n\n  <h5 class=\"d-flex justify-content-center\">{{productDetails.Title}}</h5>\n\n  <div class=\"mb-2 d-flex justify-content-between\">\n    <button class=\"btn btn-light\" (click)=\"back()\">< List</button>\n    <div>\n      <button type=\"button\" class=\"btn btn-light d-sm-inline-flex float-right\" >\n        <i class=\"material-icons md-light\" *ngIf=\"wishListId.indexOf(selectedProductJson.itemId[0]) < 0\" (click)=\"add2WishList(selectedProductJson)\">add_shopping_cart</i>\n        <i class=\"material-icons md-light\" *ngIf=\"wishListId.indexOf(selectedProductJson.itemId[0]) >= 0\" style=\"color:brown;\"  (click)=\"removeItemFromWishList(selectedProductJson.itemId[0])\">remove_shopping_cart</i>\n\n      </button>\n      <a [attr.href]=\"facebook_url\">\n        <img style=\"height: 36px;width: 36px;\" src=\"http://csci571.com/hw/hw8/Images/facebook.png\">\n      </a>\n\n    </div>\n\n  </div>\n\n  <nav>\n    <div class=\"nav nav-tabs justify-content-end \" id=\"nav-tabs\" role=\"tablist\">\n      <a class=\"nav-link btn-light  \" [ngClass]=\"{'btn-dark':activeTab === 'product-tab'}\" id=\"product-tab\" data-toggle=\"tab\" href=\"#product\" role=\"tab\" aria-controls=\"product\" aria-selected=\"true\" (click)=\"setTab($event.target)\" >Product</a>\n      <a class=\"nav-link btn-light\" [ngClass]=\"{'btn-dark':activeTab === 'photos-tab'}\" id=\"photos-tab\" data-toggle=\"tab\" href=\"#photos\" role=\"tab\" aria-controls=\"photos\" aria-selected=\"false\" (click)=\"setTab($event.target)\">Photos</a>\n      <a class=\"nav-link btn-light\" [ngClass]=\"{'btn-dark':activeTab === 'ship-tab'}\" id=\"ship-tab\" data-toggle=\"tab\" href=\"#ship\" role=\"tab\" aria-controls=\"ship\" aria-selected=\"false\" (click)=\"setTab($event.target)\">Shipping</a>\n      <a class=\"nav-link btn-light\" [ngClass]=\"{'btn-dark':activeTab === 'seller-tab'}\" id=\"seller-tab\" data-toggle=\"tab\" href=\"#seller\" role=\"tab\" aria-controls=\"seller\" aria-selected=\"false\" (click)=\"setTab($event.target)\">Seller</a>\n      <a class=\"nav-link btn-light\" [ngClass]=\"{'btn-dark':activeTab === 'similar-products-tab'}\" id=\"similar-products-tab\" data-toggle=\"tab\" href=\"#similar-products\" role=\"tab\" aria-controls=\"similar\" aria-selected=\"false\" (click)=\"setTab($event.target)\">Similar Products</a>\n    </div>\n  </nav>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <!--product info-->\n    <div class=\"tab-pane fade show active\" id=\"product\" role=\"tabpanel\" aria-labelledby=\"product-tab\">\n      <table class=\"table table-borderless  text-white table-striped table-dark\">\n        <tbody>\n          <tr>\n            <td>Product Images</td>\n            <td class=\"text-muted\" data-toggle=\"modal\" data-target=\"#productphotos\">View Product Images Here</td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('Subtitle')\">\n            <td>SubTitle</td>\n            <td>{{productDetails.Subtitle}}</td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('CurrentPrice')\">\n            <td>Price</td>\n            <td>$ {{productDetails.CurrentPrice.Value}}</td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('Location')\">\n            <td>Location</td>\n            <td>{{productDetails.Location}}</td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('ReturnPolicy')\">\n            <td>Return Policy (US)</td>\n            <td *ngIf=\"productDetails.ReturnPolicy.ReturnsAccepted ==='Returns Accepted'\">Returns Accepted within {{productDetails.ReturnPolicy.ReturnsWithin}}</td>\n            <td *ngIf=\"productDetails.ReturnPolicy.ReturnsAccepted !=='Returns Accepted'\">Returns Not Accepted</td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"productDetails.hasOwnProperty('ItemSpecifics')\" >\n        <tr *ngFor=\"let item of productDetails.ItemSpecifics.NameValueList\">\n          <td>{{item.Name}}</td>\n          <td>{{item.Value}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n     <!--google photos-->\n    <div class=\"tab-pane fade\" id=\"photos\" role=\"tabpanel\" aria-labelledby=\"photos-tab\">\n      <div class=\"alert alert-warning\" *ngIf=\"googlePhotos === null || !googlePhotos.hasOwnProperty('items')\">No records.</div>\n      <div class=\"row clearfix\" *ngIf=\"googlePhotos !== null && googlePhotos.hasOwnProperty('items')\">\n        <div class=\"col-md-4 column\">\n          <div *ngIf=\" googlePhotos.items.length >= 1\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[0].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[0].link\">\n            </a>\n          </div>\n          <div *ngIf=\"googlePhotos.items.length >= 4\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[3].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[3].link\">\n            </a>\n          </div>\n        </div>\n        <div class=\"col-md-4 column\">\n          <div *ngIf=\" googlePhotos.items.length >= 2\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[1].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[1].link\">\n            </a>\n          </div>\n          <div *ngIf=\"googlePhotos.items.length >= 5\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[4].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[4].link\">\n            </a>\n          </div>\n          <div *ngIf=\" googlePhotos.items.length >= 7\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[6].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[6].link\">\n            </a>\n          </div>\n        </div>\n        <div class=\"col-md-4 column\">\n          <div *ngIf=\" googlePhotos.items.length >= 3\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[2].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[2].link\">\n            </a>\n          </div>\n          <div *ngIf=\"googlePhotos.items.length >= 6\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[5].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[5].link\">\n            </a>\n          </div>\n          <div *ngIf=\" googlePhotos.items.length >= 8\" class=\"artistPhoto\">\n            <a [attr.href]=\"googlePhotos.items[7].link\" target=\"_blank\">\n              <img class=\"img-fluid img-thumbnail google-photo-border\" alt=\"Responsive image\" [attr.src]=\"googlePhotos.items[7].link\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--ship info-->\n    <div class=\"tab-pane fade\" id=\"ship\" role=\"tabpanel\" aria-labelledby=\"ship-tab\">\n      <table class=\"table table-borderless  text-white table-striped table-dark\">\n        <tbody>\n          <tr *ngIf=\"selectedProductJson !== null && selectedProductJson.shippingInfo[0].hasOwnProperty('shippingServiceCost')\">\n            <td>Shipping Cost</td>\n            <td *ngIf=\"selectedProductJson.shippingInfo[0].shippingServiceCost[0].__value__ == '0.0'\">Free Shipping</td>\n            <td *ngIf=\"selectedProductJson.shippingInfo[0].shippingServiceCost[0].__value__ != '0.0'\">{{selectedProductJson.shippingInfo[0].shippingServiceCost[0].__value__}} USD</td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('ShipToLocations')\">\n            <td>Shipping Locations</td>\n            <td>{{productDetails.ShipToLocations[0]}}</td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('HandlingTime')\">\n            <td>Handling time</td>\n            <td *ngIf=\"productDetails.HandlingTime <= 1\">{{productDetails.HandlingTime}} Day</td>\n            <td *ngIf=\"productDetails.HandlingTime > 1\">{{productDetails.HandlingTime}} Days</td>\n          </tr>\n          <tr *ngIf=\"!productDetails.hasOwnProperty('expeditedShipping')\">\n            <td>Expedited Shipping </td>\n            <td><i class=\"material-icons red\" >done</i></td>\n          </tr>\n          <tr *ngIf=\"!productDetails.hasOwnProperty('oneDayShippingAvailable')\">\n            <td>One Day Shipping</td>\n            <td><i class=\"material-icons red\" >done</i></td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('ReturnPolicy') && productDetails.ReturnPolicy.ReturnsAccepted ==='Returns Accepted'\">\n            <td>Return Accepted</td>\n            <td><i class=\"material-icons red\" >done</i></td>\n          </tr>\n\n\n        </tbody>\n      </table>\n    </div>\n    <!--sell info-->\n    <div class=\"tab-pane fade\" id=\"seller\" role=\"tabpanel\" aria-labelledby=\"seller-tab\">\n      <h3 class=\"text-white bg-dark p-2 d-flex justify-content-center\" style=\"margin: 0\">{{productDetails.Seller.UserID}}</h3>\n\n      <table class=\"table table-borderless  text-white table-striped table-dark\">\n\n        <tbody>\n          <tr *ngIf=\"productDetails.Seller.hasOwnProperty('FeedbackScore')\">\n            <td>FeedbackScore</td>\n            <td>{{productDetails.Seller.FeedbackScore}}</td>\n          </tr>\n          <tr *ngIf=\"productDetails.Seller.hasOwnProperty('PositiveFeedbackPercent')\">\n            <td>Popularity</td>\n            <td>\n              <div class=\"round-progress\">\n                <round-progress [current]=\"productDetails.Seller.PositiveFeedbackPercent\" [max]=\"100\"\n                                [radius]=\"18\" [stroke]=\"2\" [color]=\"'2CCF27'\" [clockwise]=\"false\"></round-progress>\n                <div class=\"round-progress-text\">{{productDetails.Seller.PositiveFeedbackPercent}}</div>\n              </div>\n            </td>\n\n          </tr>\n          <tr *ngIf=\"productDetails.Seller.hasOwnProperty('FeedbackRatingStar')\">\n            <td>Feedback Rating Star</td>\n            <td><i class=\"material-icons star\" >stars</i></td>\n          </tr>\n          <tr *ngIf=\"productDetails.Seller.hasOwnProperty('TopRatedSeller')\">\n            <td>Top Rated</td>\n            <td *ngIf=\"productDetails.Seller.TopRatedSeller === true\"><i class=\"material-icons red\" >done</i></td>\n          </tr>\n          <tr *ngIf=\"productDetails.hasOwnProperty('Storefront')\">\n            <td>Buy Product At</td>\n            <td><a [href]=\"productDetails.Storefront.StoreURL\">store</a></td>\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n    <!--similar products-->\n    <div class=\"tab-pane fade\" id=\"similar-products\" role=\"tabpanel\" aria-labelledby=\"similar-products-tab\">\n      <div class=\"alert alert-warning\" *ngIf=\"similarProducts === null\">No records.</div>\n      <div class=\"container\" *ngIf=\"similarProducts !== null\">\n        <div class=\"row \">\n          <!--sort category-->\n          <div class=\"my-select\">\n            <select class=\"custom-select \" [(ngModel)]=\"sortCategory\" (change)=\"changeOrder()\">\n              <option selected value=\"Default\" >Default</option>\n              <option value=\"Product Name\" >Product Name</option>\n              <option value=\"Days Left\">Days Left</option>\n              <option value=\"Price\">Price</option>\n              <option value=\"Shopping Cost\">Shopping Cost</option>\n            </select>\n          </div>\n          <!--sort order-->\n          <div class=\"my-select\">\n            <select class=\"custom-select \"  [disabled]=\"sortCategory === 'Default'\" [(ngModel)]=\"ascendingOrder\" (change)=\"changeOrder()\">\n              <option selected value=\"0\">Ascending</option>\n              <option value=\"1\">Descending</option>\n            </select>\n          </div>\n\n        </div>\n\n        <div *ngFor=\"let product of showProducts\">\n          <div class=\"card\" >\n            <div class=\"card-body dark\">\n              <div class=\"row\">\n                <div  >\n                  <img style=\"width: 10em;height: 10em;margin: 5px;\"  alt=\"Responsive image\" [attr.src]=\"product.imageURL\" >\n                </div>\n                <div class=\"col\">\n                  <div class=\"text-secondary\">\n                    {{product.title}}\n                  </div>\n                  <div class=\"text-success\">\n                    Price: $ {{product.buyItNowPrice.__value__}}\n                  </div>\n                  <div class=\"ship-text\" >\n                    Shipping Cost: $ {{product.shippingCost.__value__}}\n                  </div>\n                  <div class=\"text-light\">\n                    Days Left: {{getLeftDays(product.timeLeft)}}\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center align-items-center\">\n          <button class=\"btn-dark\" (click)=\"changeShowProductsNum()\">{{showMode}} </button>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search-service */ "./src/app/service/search-service.ts");
/* harmony import */ var _service_local_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/local-cache-service */ "./src/app/service/local-cache-service.ts");




let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(webService, localCacheService) {
        this.webService = webService;
        this.localCacheService = localCacheService;
        this.containerShowMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedProductJson = null;
        this.wishListId = [];
        this.productDetails = null;
        this.activeTab = 'product-tab';
        this.productImages = null;
        this.showImagesIndex = 0;
        this.googlePhotos = null;
        this.similarProducts = null;
        this.defalutOrder = null;
        this.showProducts = null;
        this.showMode = 'Show More';
        this.sortCategory = 'Default';
        this.ascendingOrder = '0';
        this.FACEBOOK_SHARE_LINK = 'https://www.facebook.com/dialog/share?app_id=373197823526860&display=popup&href=';
        this.facebook_url = '';
        this.webService.productsDetailsJson.subscribe(data => {
            console.log(data);
            if (data === null) {
                this.back();
            }
            else {
                this.productDetails = data.Item;
                this.productImages = data.Item.PictureURL;
            }
            this.webService.showProgressBar(false);
        });
        this.webService.googlePhotosJson.subscribe(data => {
            console.log(data);
            this.googlePhotos = data;
        });
        this.webService.similarProductsJson.subscribe(data => {
            this.similarProducts = data.getSimilarItemsResponse.itemRecommendations.item;
            this.showProducts = this.similarProducts.slice(0, 5);
            this.defalutOrder = this.similarProducts.slice(0, 20);
        });
        this.localCacheService.selectedJson.subscribe(data => {
            this.selectedProductJson = data;
            this.facebook_url = this.FACEBOOK_SHARE_LINK + data.viewItemURL[0] +
                '&quote=Buy ' + data.title[0] + ' at $' + data.sellingStatus[0].currentPrice[0].__value__ +
                ' from link below';
        });
        this.localCacheService.wishListProducts.subscribe(data => {
            this.wishListId = [];
            if (data != null) {
                for (let i = 0; i < data.length; i++) {
                    this.wishListId.push(data[i].itemId[0]);
                }
            }
        });
    }
    ngOnInit() {
    }
    setTab(event) {
        this.activeTab = event.id;
    }
    previousImage() {
        if (this.showImagesIndex > 0) {
            this.showImagesIndex--;
        }
        else {
            this.showImagesIndex = this.productImages.length - 1;
        }
        console.log(this.showImagesIndex);
    }
    nextImages() {
        if (this.showImagesIndex < this.productImages.length - 1) {
            this.showImagesIndex++;
        }
        else {
            this.showImagesIndex = 0;
        }
        console.log(this.showImagesIndex);
    }
    getLeftDays(times) {
        let d = times.indexOf('D');
        return times.slice(1, d);
    }
    changeShowProductsNum() {
        if (this.showMode === 'Show More') {
            this.showProducts = this.similarProducts.slice(0, 20);
            this.showMode = 'Show Less';
        }
        else {
            this.showProducts = this.similarProducts.slice(0, 5);
            this.showMode = 'Show More';
        }
    }
    back() {
        this.containerShowMode.emit('back');
        // this.selectedProductJson = null;
        this.wishListId = [];
        this.productDetails = null;
        this.activeTab = 'product-tab';
        this.productImages = null;
        this.showImagesIndex = 0;
        this.googlePhotos = null;
        this.similarProducts = null;
        this.defalutOrder = null;
        this.showProducts = null;
        this.showMode = 'Show More';
        this.sortCategory = 'Default';
        this.ascendingOrder = '0';
    }
    changeOrder() {
        console.log(this.sortCategory + this.ascendingOrder);
        switch (this.sortCategory) {
            case 'Default':
                this.similarProducts = this.defalutOrder.slice(0, 20);
                break;
            case 'Product Name':
                this.similarProducts.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }
                    else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            case 'Days Left':
                this.similarProducts.sort((a, b) => {
                    if (parseInt(this.getLeftDays(a.timeLeft)) < parseInt(this.getLeftDays(b.timeLeft))) {
                        return -1;
                    }
                    else if (parseInt(this.getLeftDays(a.timeLeft)) > parseInt(this.getLeftDays(b.timeLeft))) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            case 'Price':
                this.similarProducts.sort((a, b) => {
                    if (parseInt(a.buyItNowPrice.__value__) < parseInt(b.buyItNowPrice.__value__)) {
                        return -1;
                    }
                    else if (parseInt(a.buyItNowPrice.__value__) > parseInt(b.buyItNowPrice.__value__)) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            case 'Shopping Cost':
                this.similarProducts.sort((a, b) => {
                    if (parseInt(a.shippingCost.__value__) < parseInt(b.shippingCost.__value__)) {
                        return -1;
                    }
                    else if (parseInt(a.shippingCost.__value__) > parseInt(b.shippingCost.__value__)) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
        }
        if (this.ascendingOrder === '1') {
            this.similarProducts.reverse();
        }
        if (this.showMode === 'Show More') {
            this.showProducts = this.similarProducts.slice(0, 5);
        }
        else {
            this.showProducts = this.similarProducts.slice(0, 20);
        }
    }
    add2WishList(product) {
        this.localCacheService.add2WishList(product.itemId[0], product);
    }
    removeItemFromWishList(id) {
        this.localCacheService.removeFromWishList(id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductDetailsComponent.prototype, "containerShowMode", void 0);
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
        styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_search_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _service_local_cache_service__WEBPACK_IMPORTED_MODULE_3__["LocalCacheService"]])
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/product-search-form/search-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-search-form/search-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search-div{\n  background: #282933;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LXNlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLWRpdntcbiAgYmFja2dyb3VuZDogIzI4MjkzMztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/product-search-form/search-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-search-form/search-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container rounded\" id=\"search-div\">\n  <div class=\"row clearfix\">\n    <div class=\"col-md-12 column rounded\">\n      <form class=\"form-horizontal\"  (ngSubmit)=\"onSubmit()\">\n        <!--header-->\n        <p class=\"text-center font-weight-bold text-white\" style=\"font-size: 2em\">Product Search</p>\n        <!--keyword-->\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2\"></div>\n          <label for=\"keyword\" class=\"col-sm-2 control-label text-white\">Keyword<span class=\"required-star text-danger\">*</span></label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" required class=\"col-sm-7 form-control\" id=\"keyword\" name=\"keyword\" placeholder=\"Enter Product Name(eg.iPhone 8)\"\n                   #keyword=\"ngModel\" [ngClass]=\"{'is-invalid': (keyword.dirty || keyword.touched) && keyword.value == ''}\" [(ngModel)]=\"searchForm.keyword\"  />\n            <div class=\"invalid-feedback\">Please enter a keyword.</div>\n          </div>\n\n        </div>\n        <!--category-->\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2\"></div>\n          <label for=\"category\" class=\"col-sm-2 col-form-label text-white\">Category</label>\n          <div class=\"col-sm-2\">\n            <select class=\"custom-select\" name=\"category\" id=\"category\" [(ngModel)]=\"searchForm.category\" >\n              <option *ngFor=\"let cate of categories\" [value]=\"cate.val\">{{cate.name}}</option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <!--condition-->\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2\"></div>\n          <label for=\"category\" class=\"col-sm-2 col-form-label text-white\">Condition</label>\n          <div class=\"col-sm-3\">\n            <div class=\"form-check form-check-inline\">\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"New\" name=\"New\" [(ngModel)]=\"newCondition\" (click)=\"set_condition($event.target)\">\n                <label class=\"form-check-label text-white\" for=\"New\">New</label>\n              </div>\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"Used\" name=\"Used\" value=\"\" [(ngModel)]=\"usedCondition\" (click)=\"set_condition($event.target)\">\n                <label class=\"form-check-label text-white\" for=\"Used\">Used</label>\n              </div>\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"Unspecified\" name=\"Unspecified\" value=\"\" [(ngModel)]=\"unspecifedCondition\" (click)=\"set_condition($event.target)\">\n                <label class=\"form-check-label text-white\" for=\"Unspecified\">Unspecified</label>\n              </div>\n             </div>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <!--shipping-->\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2\"></div>\n          <label for=\"category\" class=\"col-sm-2 col-form-label text-white\">Shipping Options</label>\n          <div class=\"col-sm-8\">\n            <div class=\"form-check form-check-inline \">\n              <div class=\"form-check form-check-inline \">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"local\" name=\"local\" value=\"\" [(ngModel)]=\"searchForm.local\"  >\n                <label class=\"form-check-label text-white\" >Local Pickup</label>\n              </div>\n              <div class=\"form-check form-check-inline \">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"shipping\" name=\"shipping\" value=\"\" [(ngModel)]=\"searchForm.shipping\" >\n                <label class=\"form-check-label text-white\" >Free Shipping</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <!--distance-->\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2\"></div>\n          <label for=\"distance\" class=\"col-sm-2 col-form-label text-white\">Distance(miles)</label>\n          <div class=\"col-sm-2\">\n            <input class=\"form-control\"  type=\"text\" name=\"distance\" id=\"distance\" placeholder=\"10\" value=\"\" [(ngModel)]=\"searchForm.distance\">\n          </div>\n          <div class=\"col-sm-2\">\n          </div>\n        </div>\n\n        <!--location-->\n        <div class=\"row\">\n          <div class=\"col-sm-2\"></div>\n          <legend class=\"col-form-label col-sm-2 text-white\">From<span class=\"required-star text-danger\">*</span></legend>\n          <div class=\"col-sm-8\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"zipmode\"  [value]=\"false\" checked [(ngModel)]=\"isThere\">\n              <label class=\"form-check-label text-white\">Current location</label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"zipmode\" [value]=\"true\" [(ngModel)]=\"isThere\" >\n              <label class=\"form-check-label text-white\">Other. Please specify zip code:</label>\n            </div>\n            <div >\n\n              <input class=\"form-control col-sm-7\" matInput [matAutocomplete]=\"auto\" type=\"text\" name=\"zipcode\" id=\"zipcode\"  value=\"\" [disabled]=\"isThere !== true\"  [(ngModel)]=\"input_zipcode\"\n                     #code=\"ngModel\" [ngClass]=\"{'is-invalid': (code.dirty || code.touched) && !isVaildZipcode(code.value) && isThere }\" (ngModelChange)=\"getAutoCode(code.value)\" >\n              <mat-autocomplete  #auto=\"matAutocomplete\" >\n                <mat-option  *ngFor=\"let zcode of autoCode\" [value]=\"zcode.postalCode\">{{zcode.postalCode}}</mat-option>\n              </mat-autocomplete>\n              <div class=\"invalid-feedback\">Please enter a zip code.</div>\n            </div>\n          </div>\n        </div>\n        <!--buttons-->\n        <span>&nbsp;&nbsp;</span>\n        <div class=\"form-group row\" id=\"search-btn-group\">\n          <div class=\"col-sm-2\"></div>\n          <div class=\"col-sm-6\">\n            <button type=\"submit\" class=\"btn btn-light d-sm-inline-flex\" id=\"search-btn\" [disabled]=\"!getCurZipcode || !isValidation()\"  >\n              <i class=\"material-icons\">search</i>Search</button>\n            <span>&nbsp;&nbsp;</span>\n            <button type=\"button\" class=\"btn btn-light d-sm-inline-flex\" id=\"clear-btn\" (click)=\"clear_all()\">\n              <i class=\"material-icons\" >clear_all</i>Clear</button>\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-search-form/search-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-search-form/search-form.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search-service */ "./src/app/service/search-service.ts");
/* harmony import */ var _search_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-input */ "./src/app/product-search-form/search-input.ts");
/* harmony import */ var _service_local_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/local-cache-service */ "./src/app/service/local-cache-service.ts");





let SearchFormComponent = class SearchFormComponent {
    constructor(webService, localCacheService) {
        this.webService = webService;
        this.localCacheService = localCacheService;
        this.autoCode = [];
        this.cur_zipcode = '';
        this.input_zipcode = '';
        this.isThere = false;
        this.getCurZipcode = false;
        this.categories = [
            { name: 'All Categories',
                val: '' },
            { name: 'Art',
                val: '550' },
            { name: 'Baby',
                val: '2984' },
            { name: 'Books',
                val: '267' },
            { name: 'Clothing, Shoes & Accessories',
                val: '11450' },
            { name: 'Computers/Tablets & Networking',
                val: '58058' },
            { name: 'Health & Beauty',
                val: '26395' },
            { name: 'Music',
                val: '11233' },
            { name: 'Video Games & Consoles',
                val: '1249' },
        ];
        this.checkbox = ['New', 'Used', 'Unspecified'];
        this.newCondition = false;
        this.usedCondition = false;
        this.unspecifedCondition = false;
        this.searchForm = _search_input__WEBPACK_IMPORTED_MODULE_3__["SearchInput"];
        this.regExp = /^\d{5}$/;
        this.webService.autoCompleteJson.subscribe(data => {
            if (data.hasOwnProperty('postalCodes')) {
                this.autoCode = data.postalCodes;
            }
            else {
                this.autoCode = [];
            }
        });
    }
    ngOnInit() {
        this.webService.getCurZipCode().subscribe(data => {
            this.cur_zipcode = data['zip'];
            console.log('cur zip :' + this.cur_zipcode);
            this.getCurZipcode = true;
        });
    }
    getZipcode() {
        if (this.isThere) {
            this.searchForm.zipcode = this.input_zipcode;
        }
        else {
            this.searchForm.zipcode = this.cur_zipcode;
        }
    }
    set_condition(element) {
        if (element.checked) {
            let idx = this.checkbox.indexOf(element.id);
            this.searchForm.condition.push(this.checkbox[idx]);
        }
        else {
            let idx = this.searchForm.condition.indexOf(element.id);
            this.searchForm.condition.splice(idx, 1);
        }
        console.log(this.searchForm.condition);
    }
    onSubmit() {
        this.getZipcode();
        // console.log(this.searchForm);
        // this.searchForm.keyword = 'iphone';
        this.webService.searchProduct(this.searchForm);
        this.webService.back2ResultsTable();
        this.webService.showProgressBar(true);
        this.localCacheService.updateWishList();
    }
    clear_all() {
        this.searchForm.keyword = '';
        this.searchForm.distance = '';
        this.input_zipcode = '';
        this.searchForm.category = '';
        this.searchForm.condition = [];
        this.searchForm.local = false;
        this.searchForm.shipping = false;
        this.isThere = false;
        this.newCondition = false;
        this.usedCondition = false;
        this.unspecifedCondition = false;
        this.webService.clearAllTable();
    }
    isVaildZipcode(code) {
        if (this.regExp.test(this.input_zipcode)) {
            return true;
        }
        else {
            return false;
        }
    }
    isValidation() {
        if (this.searchForm.keyword === null || this.searchForm.keyword === '' || this.searchForm.keyword.trim() === '') {
            return false;
        }
        if (this.isThere) {
            if (this.input_zipcode == null || this.input_zipcode === '' || !this.regExp.test(this.input_zipcode)) {
                return false;
            }
        }
        return true;
    }
    getAutoCode(startcode) {
        //console.log('send to get auto code' + startcode);
        if (startcode !== '') {
            this.webService.getAutoCompletes(startcode);
        }
    }
};
SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-form',
        template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/product-search-form/search-form.component.html"),
        styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/product-search-form/search-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_search_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _service_local_cache_service__WEBPACK_IMPORTED_MODULE_4__["LocalCacheService"]])
], SearchFormComponent);



/***/ }),

/***/ "./src/app/product-search-form/search-input.ts":
/*!*****************************************************!*\
  !*** ./src/app/product-search-form/search-input.ts ***!
  \*****************************************************/
/*! exports provided: SearchInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return SearchInput; });
const SearchInput = {
    keyword: '',
    category: '',
    distance: '',
    zipcode: '',
    local: false,
    shipping: false,
    condition: []
};


/***/ }),

/***/ "./src/app/products-table/products-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/products-table/products-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dark1 {\n  background: #282933;\n}\n#dark2 {\n  background: #394145;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMtdGFibGUvcHJvZHVjdHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMtdGFibGUvcHJvZHVjdHMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkYXJrMSB7XG4gIGJhY2tncm91bmQ6ICMyODI5MzM7XG59XG4jZGFyazIge1xuICBiYWNrZ3JvdW5kOiAjMzk0MTQ1O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/products-table/products-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/products-table/products-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n\n  <div>\n    <div class=\"alert alert-warning\" *ngIf=\"errorState === 'No Record'\">No records.</div>\n    <div class=\"alert alert-danger\" *ngIf=\"errorState === 'Failed'\">Failed to get search result.</div>\n  </div>\n\n\n  <div *ngIf=\"allProducts !== null \">\n\n    <div class=\"row float-right mb-2\">\n      <button class=\"btn btn-light\" [disabled]=\"selectedProduct === null\" (click)=\"getProductDetails(selectedProduct.itemId[0])\">Details  ></button>\n    </div>\n\n    <div  class=\"table-responsive \">\n      <table class=\"table table-borderless  text-white table-striped table-dark\">\n        <thead id=\"dark1\">\n          <tr>\n            <th >#</th>\n            <th>Image</th>\n            <th>Title</th>\n            <th>Price</th>\n            <th>Shipping</th>\n            <th>Zip</th>\n            <th>Seller</th>\n            <th>Wish List</th>\n          </tr>\n        </thead>\n        <tbody >\n        <tr *ngFor=\"let product of products; index as i\" [class.table-dark]=\" product === selectedProduct\" (click)=\"selectProduct(product)\">\n          <td>{{i+1+curPage*10}}</td>\n          <td class=\"img-responsive center-block\">\n            <img *ngIf=\"product.hasOwnProperty('galleryURL')\" style=\"width: 10em;height: 10em;margin: 5px;\" src= {{product.galleryURL[0]}}>\n            <p *ngIf=\"!product.hasOwnProperty('galleryURL')\">N/A</p>\n          </td>\n          <td class=\"text-primary\" (click)=\"getProductDetails(product.itemId[0]);selectProduct(product)\">\n            <div *ngIf=\"product.title[0].length <= 35\">{{product.title[0]}}</div>\n            <div *ngIf=\"product.title[0].length > 35\" data-toggle=\"tooltip\" data-placement=\"bottom\"\n                 title={{product.title[0]}}>{{product.title[0].slice(0, 35)}}...</div>\n          </td>\n          <td>{{product.sellingStatus[0].currentPrice[0].__value__}} USD</td>\n          <td>\n            <div *ngIf=\"product.shippingInfo[0].hasOwnProperty('shippingServiceCost')\">\n              <div *ngIf=\"product.shippingInfo[0].shippingServiceCost[0].__value__ == '0.0'\">Free Shipping</div>\n              <div *ngIf=\"product.shippingInfo[0].shippingServiceCost[0].__value__ != '0.0'\">{{product.shippingInfo[0].shippingServiceCost[0].__value__}} USD</div>\n            </div>\n            <div *ngIf=\"!product.shippingInfo[0].hasOwnProperty('shippingServiceCost')\">N/A</div>\n          </td>\n          <td>\n            <p *ngIf=\"product.hasOwnProperty('postalCode')\" >{{product.postalCode}}</p>\n            <p *ngIf=\"!product.hasOwnProperty('postalCode')\">N/A</p>\n          </td>\n          <td>\n            <p *ngIf=\"product.hasOwnProperty('sellerInfo')\" >{{product.sellerInfo[0].sellerUserName[0]}}</p>\n            <p *ngIf=\"!product.hasOwnProperty('sellerInfo')\">N/A</p>\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn btn-light d-sm-inline-flex\" >\n              <i class=\"material-icons md-light\" *ngIf=\"wishListId.indexOf(product.itemId[0]) < 0\" (click)=\"add2WishList(product)\">add_shopping_cart</i>\n              <i class=\"material-icons md-light\" *ngIf=\"wishListId.indexOf(product.itemId[0]) >= 0\" style=\"color:brown;\"  (click)=\"removeItemFromWishList(product.itemId[0])\">remove_shopping_cart</i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"btn-toolbar d-flex justify-content-center\" >\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"previousPage()\" [disabled]=\"curPage === 0\" > << Previous</button>\n        <div class=\"btn-group mr-2 \" role=\"group\" >\n          <button type=\"button\" class=\"btn btn-light\" [ngClass]=\"{'btn-dark':curPage === 0}\" (click)=\"changePage(0)\">1</button>\n          <button type=\"button\" class=\"btn btn-light\" *ngIf=\"pagesNum>=2\" [ngClass]=\"{'btn-dark':curPage === 1}\" (click)=\"changePage(1)\">2</button>\n          <button type=\"button\" class=\"btn btn-light\" *ngIf=\"pagesNum>=3\" [ngClass]=\"{'btn-dark':curPage === 2}\" (click)=\"changePage(2)\">3</button>\n          <button type=\"button\" class=\"btn btn-light\" *ngIf=\"pagesNum>=4\" [ngClass]=\"{'btn-dark':curPage === 3}\" (click)=\"changePage(3)\">4</button>\n          <button type=\"button\" class=\"btn btn-light\" *ngIf=\"pagesNum>=5\" [ngClass]=\"{'btn-dark':curPage === 4}\" (click)=\"changePage(4)\">5</button>\n        </div>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"nextPage()\" [disabled]=\"curPage === pagesNum-1 \" >Next >> </button>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products-table/products-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/products-table/products-table.component.ts ***!
  \************************************************************/
/*! exports provided: ProductsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsTableComponent", function() { return ProductsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search-service */ "./src/app/service/search-service.ts");
/* harmony import */ var _service_local_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/local-cache-service */ "./src/app/service/local-cache-service.ts");




let ProductsTableComponent = class ProductsTableComponent {
    constructor(webService, localCacheService) {
        this.webService = webService;
        this.localCacheService = localCacheService;
        this.containerShowMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedProduct = null;
        this.allProducts = null;
        this.curPage = 0;
        this.pagesNum = 0;
        this.allPages = [];
        this.errorState = '';
        this.wishListId = [];
        this.webService.allProductsJson.subscribe(data => {
            if (data === null) {
                // clear
                this.errorState = '';
                this.allProducts = null;
                this.products = null;
                this.pagesNum = 0;
                this.selectedProduct = null;
            }
            else {
                console.log('show all products');
                console.log(data);
                if (data.findItemsAdvancedResponse[0].ack[0] === 'Success') {
                    if (data.findItemsAdvancedResponse[0].searchResult[0].hasOwnProperty('item')) {
                        this.allProducts = data.findItemsAdvancedResponse[0].searchResult[0].item;
                        this.pagesNum = Math.ceil(this.allProducts.length / 10);
                        for (let i = 0; i < this.pagesNum; i++) {
                            this.allPages.push(i);
                        }
                        // console.log(this.allpages);
                        this.products = this.allProducts.slice(0, 10);
                        this.curPage = 0;
                        this.errorState = '';
                    }
                    else {
                        // show no records
                        this.errorState = 'No Record';
                        this.allProducts = null;
                        this.products = null;
                        this.pagesNum = 0;
                        this.selectedProduct = null;
                    }
                }
                else {
                    // show Error;
                    this.errorState = 'Failed';
                    this.allProducts = null;
                    this.products = null;
                    this.pagesNum = 0;
                    this.selectedProduct = null;
                }
            }
            this.webService.showProgressBar(false);
        });
        this.localCacheService.wishListProducts.subscribe(data => {
            console.log('wishListProducts');
            this.wishListId = [];
            if (data != null) {
                for (let i = 0; i < data.length; i++) {
                    this.wishListId.push(data[i].itemId[0]);
                }
            }
            console.log(this.wishListId);
        });
    }
    ngOnInit() {
    }
    add2WishList(product) {
        this.localCacheService.add2WishList(product.itemId[0], product);
    }
    removeItemFromWishList(id) {
        this.localCacheService.removeFromWishList(id);
    }
    getProductDetails(productId) {
        this.webService.searchProductDetails(productId);
        this.containerShowMode.emit('details');
        this.webService.showProgressBar(true);
        this.localCacheService.updateWishList();
    }
    selectProduct(product) {
        this.selectedProduct = product;
        this.localCacheService.changeSelectedProduct(product);
        // console.log( "select product id :" + this.selectedProduct);
    }
    nextPage() {
        this.selectedProduct = null;
        this.curPage++;
        this.products = this.allProducts.slice(10 * this.curPage, 10 + 10 * this.curPage);
        // console.log(this.curPage);
    }
    previousPage() {
        this.selectedProduct = null;
        this.curPage--;
        this.products = this.allProducts.slice(10 * this.curPage, 10 + 10 * this.curPage);
        // console.log(this.curPage);
    }
    changePage(page) {
        this.curPage = page;
        this.products = this.allProducts.slice(10 * this.curPage, 10 + 10 * this.curPage);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductsTableComponent.prototype, "containerShowMode", void 0);
ProductsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-table',
        template: __webpack_require__(/*! ./products-table.component.html */ "./src/app/products-table/products-table.component.html"),
        styles: [__webpack_require__(/*! ./products-table.component.css */ "./src/app/products-table/products-table.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_search_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _service_local_cache_service__WEBPACK_IMPORTED_MODULE_3__["LocalCacheService"]])
], ProductsTableComponent);



/***/ }),

/***/ "./src/app/result-contain/result-container.component.css":
/*!***************************************************************!*\
  !*** ./src/app/result-contain/result-container.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-div{\n  height: 5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0LWNvbnRhaW4vcmVzdWx0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0LWNvbnRhaW4vcmVzdWx0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1kaXZ7XG4gIGhlaWdodDogNWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/result-contain/result-container.component.html":
/*!****************************************************************!*\
  !*** ./src/app/result-contain/result-container.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"d-flex justify-content-center  align-items-center button-div\">\n    <div class=\"btn-group mr-2 \" role=\"group\" >\n      <button type=\"button\" class=\"btn btn-light\" [ngClass]=\"{'btn-dark':mode === 'products' }\" (click)=\"showProductsTable()\">Results</button>\n      <button type=\"button\" class=\"btn btn-light\" [ngClass]=\"{'btn-dark':mode === 'wish-list'}\" (click)=\"showWishListTab()\">Wish List</button>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"progress\" *ngIf=\"showProgressBar\">\n      <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\"\n           style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container\" [@showTabMode]=\"animation\" >\n    <app-products-table (containerShowMode)=\"setContent($event)\" [class.d-none]=\"!showTable\"  ></app-products-table>\n    <app-wish-list  (containerShowMode)=\"setContent($event)\" [class.d-none]=\"!showWishList\" ></app-wish-list>\n    <app-product-details (containerShowMode)=\"setContent($event)\" [class.d-none]=\"!showProductDetails\" ></app-product-details>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/result-contain/result-container.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/result-contain/result-container.component.ts ***!
  \**************************************************************/
/*! exports provided: ResultContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultContainerComponent", function() { return ResultContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_local_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/local-cache-service */ "./src/app/service/local-cache-service.ts");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/search-service */ "./src/app/service/search-service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let ResultContainerComponent = class ResultContainerComponent {
    constructor(webService, localCacheService) {
        this.webService = webService;
        this.localCacheService = localCacheService;
        this.showTable = true;
        this.showWishList = false;
        this.showProductDetails = false;
        this.mode = 'products';
        this.animation = 'products';
        this.showProgressBar = false;
        this.webService.back2ResultsTableFlag.subscribe(data => {
            this.showProductsTable();
        });
        this.webService.showProgressBarFlag.subscribe(data => {
            this.showProgressBar = data;
        });
    }
    ngOnInit() {
    }
    showWishListTab() {
        this.showTable = false;
        this.showWishList = true;
        this.showProductDetails = false;
        this.mode = 'wish-list';
        this.animation = 'wish-list';
        this.localCacheService.updateWishList();
        this.webService.clearProductDetails();
    }
    showProductsTable() {
        this.showTable = true;
        this.showWishList = false;
        this.showProductDetails = false;
        this.mode = 'products';
        this.animation = 'products';
        this.webService.clearProductDetails();
    }
    setContent(event) {
        if (event === 'details') {
            this.animation = event;
            this.showTable = false;
            this.showWishList = false;
            this.showProductDetails = true;
        }
        else if (event === 'back') {
            this.showProductDetails = false;
            if (this.mode === 'products') {
                this.animation = 'products';
                this.showTable = true;
                this.showWishList = false;
            }
            else {
                this.animation = 'wish-list';
                this.showTable = false;
                this.showWishList = true;
            }
        }
    }
};
ResultContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result-container',
        template: __webpack_require__(/*! ./result-container.component.html */ "./src/app/result-contain/result-container.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('showTabMode', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('details => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => details', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0%)' }))
                ]),
            ])
        ],
        styles: [__webpack_require__(/*! ./result-container.component.css */ "./src/app/result-contain/result-container.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_search_service__WEBPACK_IMPORTED_MODULE_3__["WebService"], _service_local_cache_service__WEBPACK_IMPORTED_MODULE_2__["LocalCacheService"]])
], ResultContainerComponent);



/***/ }),

/***/ "./src/app/service/local-cache-service.ts":
/*!************************************************!*\
  !*** ./src/app/service/local-cache-service.ts ***!
  \************************************************/
/*! exports provided: LocalCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalCacheService", function() { return LocalCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LocalCacheService = class LocalCacheService {
    constructor() {
        this.wishListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.wishListProducts = this.wishListSubject.asObservable();
        this.selectJsonSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedJson = this.selectJsonSubject.asObservable();
    }
    add2WishList(id, info) {
        localStorage.setItem(id, JSON.stringify(info));
        this.updateWishList();
    }
    removeFromWishList(id) {
        localStorage.removeItem(id);
        this.updateWishList();
    }
    updateWishList() {
        if (localStorage.length === 0) {
            this.wishListSubject.next(null);
        }
        else {
            let wishList = [];
            for (let i = 0; i < localStorage.length; i++) {
                wishList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            this.wishListSubject.next(wishList);
        }
    }
    changeSelectedProduct(product) {
        this.selectJsonSubject.next(product);
    }
};
LocalCacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], LocalCacheService);



/***/ }),

/***/ "./src/app/service/search-service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/search-service.ts ***!
  \*******************************************/
/*! exports provided: WebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function() { return WebService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let WebService = class WebService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = 'http://571hw8-jiahuige.us-east-2.elasticbeanstalk.com/';
        this.allProductsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.allProductsJson = this.allProductsSubject.asObservable();
        this.productsDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.productsDetailsJson = this.productsDetailsSubject.asObservable();
        this.googlePhotosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.googlePhotosJson = this.googlePhotosSubject.asObservable();
        this.similarProductsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.similarProductsJson = this.similarProductsSubject.asObservable();
        this.autoCompleteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.autoCompleteJson = this.autoCompleteSubject.asObservable();
        this.back2ResultsTableFlagSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.back2ResultsTableFlag = this.back2ResultsTableFlagSubject.asObservable();
        this.showProgressBarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showProgressBarFlag = this.showProgressBarSubject.asObservable();
    }
    //   search all products
    searchProduct(searchFormInput) {
        if (searchFormInput.distance === '') {
            searchFormInput.distance = '10';
        }
        return this.httpClient.get(this.BASE_URL + '/searchProduct/' + JSON.stringify(searchFormInput)).subscribe(data => {
            this.allProductsResultJson = data;
            // console.log( 'search result ：' );
            // console.log( this.allProductsResultJson );
            this.allProductsSubject.next(this.allProductsResultJson);
        }, err => {
            console.log('search fail ：');
            console.log(err);
        });
    }
    // get product details
    searchProductDetails(productId) {
        return this.httpClient.get(this.BASE_URL + '/productDetails/' + productId).subscribe(data => {
            this.productsDetailsResultJson = data;
            this.productsDetailsSubject.next(this.productsDetailsResultJson);
            this.getGooglePhotos(data.Item.Title);
            this.getSimilarProducts(data.Item.ItemID);
        }, err => {
            console.log('get product details fail ：');
            console.log(err);
        });
    }
    // get cur zip code
    getCurZipCode() {
        return this.httpClient.get('http://ip-api.com/json');
    }
    // google photos
    getGooglePhotos(productTitle) {
        return this.httpClient.get(this.BASE_URL + '/googlePhotos/' + productTitle).subscribe(data => {
            console.log('get google photos');
            this.googlePhotosResultJson = data;
            this.googlePhotosSubject.next(this.googlePhotosResultJson);
        }, error1 => {
            this.googlePhotosSubject.next(null);
            console.log('get product photos fail ：');
        });
    }
    // get similar product
    getSimilarProducts(itemId) {
        return this.httpClient.get(this.BASE_URL + '/similarProducts/' + itemId).subscribe(data => {
            console.log(data);
            this.similarProductsResultJson = data;
            this.similarProductsSubject.next(this.similarProductsResultJson);
        }, err => {
            console.log('get similar products fail ：');
        });
    }
    // clear products table and product details
    clearAllTable() {
        this.allProductsSubject.next(null);
        this.productsDetailsSubject.next(null);
    }
    clearProductDetails() {
        this.productsDetailsSubject.next(null);
    }
    // autocompletes
    getAutoCompletes(startCode) {
        return this.httpClient.get(this.BASE_URL + '/autoComplete/' + startCode).subscribe(data => {
            console.log('got auto code');
            console.log(data);
            this.autoCompleteResultJson = data;
            this.autoCompleteSubject.next(this.autoCompleteResultJson);
        }, err => {
        });
    }
    back2ResultsTable() {
        this.back2ResultsTableFlagSubject.next(true);
    }
    showProgressBar(flag) {
        this.showProgressBarSubject.next(flag);
    }
};
WebService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], WebService);



/***/ }),

/***/ "./src/app/wish-list/wish-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/wish-list/wish-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <div class=\"alert alert-warning\" *ngIf=\"myWishList === null\">No records.</div>\n  </div>\n  <div class=\"container\" *ngIf=\"myWishList !== null\">\n    <div class=\"row float-right mb-2\">\n      <button class=\"btn btn-light\" [disabled]=\"selectedProduct === null\" (click)=\"getProductDetails(selectedProduct.itemId[0])\">Details  ></button>\n    </div>\n\n    <div class=\"table-responsive \">\n      <table class=\"table table-borderless  text-white table-striped table-dark\">\n        <thead id=\"dark1\">\n        <tr>\n          <th >#</th>\n          <th>Image</th>\n          <th>Title</th>\n          <th>Price</th>\n          <th>Shipping</th>\n          <th>Zip</th>\n          <th>Seller</th>\n          <th>Wish List</th>\n        </tr>\n        </thead>\n        <tbody >\n        <tr *ngFor=\"let product of myWishList; index as i\" [class.table-dark]=\" product === selectedProduct\" (click)=\"selectProduct(product)\">\n          <td>{{i+1}}</td>\n          <td class=\"img-responsive center-block\">\n            <img *ngIf=\"product.hasOwnProperty('galleryURL')\" style=\"width: 10em;height: 10em;margin: 5px;\" src= {{product.galleryURL[0]}}>\n            <p *ngIf=\"!product.hasOwnProperty('galleryURL')\">N/A</p>\n          </td>\n          <td class=\"text-primary\" (click)=\"getProductDetails(product.itemId[0]);selectProduct(product)\">\n            <div *ngIf=\"product.title[0].length <= 35\">{{product.title[0]}}</div>\n            <div *ngIf=\"product.title[0].length > 35\" data-toggle=\"tooltip\" data-placement=\"bottom\"\n                 title={{product.title[0]}}>{{product.title[0].slice(0, 35)}}...</div>\n          </td>\n          <td>{{product.sellingStatus[0].currentPrice[0].__value__}} USD</td>\n          <td>\n            <div *ngIf=\"product.shippingInfo[0].hasOwnProperty('shippingServiceCost')\">\n              <div *ngIf=\"product.shippingInfo[0].shippingServiceCost[0].__value__ == '0.0'\">Free Shipping</div>\n              <div *ngIf=\"product.shippingInfo[0].shippingServiceCost[0].__value__ != '0.0'\">{{product.shippingInfo[0].shippingServiceCost[0].__value__}} USD</div>\n            </div>\n            <div *ngIf=\"!product.shippingInfo[0].hasOwnProperty('shippingServiceCost')\">N/A</div>\n          </td>\n          <td>\n            <p *ngIf=\"product.hasOwnProperty('postalCode')\" >{{product.postalCode}}</p>\n            <p *ngIf=\"!product.hasOwnProperty('postalCode')\">N/A</p>\n          </td>\n          <td>\n            <p *ngIf=\"product.hasOwnProperty('sellerInfo')\" >{{product.sellerInfo[0].sellerUserName[0]}}</p>\n            <p *ngIf=\"!product.hasOwnProperty('sellerInfo')\">N/A</p>\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn btn-light d-sm-inline-flex\" (click)=\"removeItemFromWishList(product.itemId[0])\" >\n              <i class=\"material-icons md-light\" style=\"color:brown;\" >remove_shopping_cart</i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/wish-list/wish-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wish-list/wish-list.component.ts ***!
  \**************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search-service */ "./src/app/service/search-service.ts");
/* harmony import */ var _service_local_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/local-cache-service */ "./src/app/service/local-cache-service.ts");




let WishListComponent = class WishListComponent {
    constructor(webService, localCacheService) {
        this.webService = webService;
        this.localCacheService = localCacheService;
        this.containerShowMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedProduct = null;
        this.myWishList = null;
        this.localCacheService.wishListProducts.subscribe(data => {
            this.myWishList = data;
        });
    }
    ngOnInit() {
    }
    getProductDetails(productId) {
        this.webService.searchProductDetails(productId);
        this.containerShowMode.emit('details');
        this.webService.showProgressBar(true);
        this.localCacheService.updateWishList();
    }
    removeItemFromWishList(id) {
        this.localCacheService.removeFromWishList(id);
    }
    selectProduct(product) {
        this.selectedProduct = product;
        this.localCacheService.changeSelectedProduct(product);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WishListComponent.prototype, "containerShowMode", void 0);
WishListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wish-list',
        template: __webpack_require__(/*! ./wish-list.component.html */ "./src/app/wish-list/wish-list.component.html")
        // styleUrls: ['./wish-list.component.css']
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_search_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _service_local_cache_service__WEBPACK_IMPORTED_MODULE_3__["LocalCacheService"]])
], WishListComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gejiahui/WebstormProjects/HW8-ProductSearch/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map