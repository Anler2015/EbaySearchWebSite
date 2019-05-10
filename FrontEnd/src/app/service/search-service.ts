import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  constructor(private httpClient: HttpClient) {}
  // private  BASE_URL = 'http://571hw8-jiahuige.us-east-2.elasticbeanstalk.com';
  private  BASE_URL = 'http://localhost:8081';
  private allProductsResultJson;
  private allProductsSubject = new Subject();
  allProductsJson = this.allProductsSubject.asObservable();

  private productsDetailsResultJson;
  private productsDetailsSubject = new Subject();
  productsDetailsJson = this.productsDetailsSubject.asObservable();

  private googlePhotosResultJson;
  private googlePhotosSubject = new Subject();
  googlePhotosJson = this.googlePhotosSubject.asObservable();

  private similarProductsResultJson;
  private similarProductsSubject = new Subject();
  similarProductsJson = this.similarProductsSubject.asObservable();

  private autoCompleteResultJson;
  private autoCompleteSubject = new Subject();
  autoCompleteJson = this.autoCompleteSubject.asObservable();


  private back2ResultsTableFlagSubject = new Subject();
  back2ResultsTableFlag = this.back2ResultsTableFlagSubject.asObservable();

  private showProgressBarSubject = new Subject();
  showProgressBarFlag = this.showProgressBarSubject.asObservable();

  //   search all products
  searchProduct(searchFormInput){
    if (searchFormInput.distance === '') {
      searchFormInput.distance = '10';
    }

    return this.httpClient.get(this.BASE_URL + '/searchProduct/' + JSON.stringify(searchFormInput) ).subscribe(data => {

      this.allProductsResultJson = data;
      // console.log( 'search result ：' );
      // console.log( this.allProductsResultJson );
      this.allProductsSubject.next(this.allProductsResultJson );
    }, err => {
      console.log( 'search fail ：' );
      console.log(err);
    });
  }

  // get product details
  searchProductDetails(productId) {
    return this.httpClient.get(this.BASE_URL + '/productDetails/' + productId).subscribe(data => {
      this.productsDetailsResultJson = data;
      this.productsDetailsSubject.next(this.productsDetailsResultJson);
      this.getGooglePhotos((<any>data).Item.Title);
      this.getSimilarProducts((<any>data).Item.ItemID);
  }, err => {
  console.log( 'get product details fail ：' );
  console.log(err);
});
  }

  // get cur zip code
  getCurZipCode() {
    return this.httpClient.get('http://ip-api.com/json');
  }

  // google photos
  getGooglePhotos(productTitle) {
    console.log(encodeURI(productTitle));
    return this.httpClient.get(this.BASE_URL + '/googlePhotos/' + encodeURIComponent(productTitle)).subscribe(data =>{
      console.log('get google photos');
      this.googlePhotosResultJson = data;
      this.googlePhotosSubject.next(this.googlePhotosResultJson );
    }, error1 => {
      this.googlePhotosSubject.next(null );
      console.log( 'get product photos fail ：' );
    });
  }


  // get similar product
  getSimilarProducts(itemId) {
    return this.httpClient.get(this.BASE_URL + '/similarProducts/' + itemId).subscribe(data => {
      console.log(data);
      this.similarProductsResultJson = data;
      this.similarProductsSubject.next(this.similarProductsResultJson);
    }, err => {
      console.log( 'get similar products fail ：' );
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

    return this.httpClient.get(this.BASE_URL + '/autoComplete/' + startCode).subscribe( data =>{
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

}
