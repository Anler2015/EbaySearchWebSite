import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebService } from '../service/search-service';
import {LocalCacheService} from '../service/local-cache-service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})

export class ProductsTableComponent implements OnInit {

  @Output() containerShowMode = new EventEmitter<any>();

  products;
  selectedProduct = null;

  allProducts = null;
  curPage = 0;
  pagesNum = 0;
  allPages = [];
  errorState = '';

  wishListId = [];

  constructor(private webService: WebService, private localCacheService: LocalCacheService) {
    this.webService.allProductsJson.subscribe(data => {

      if ( data === null ) {
        // clear
        this.errorState = '';
        this.allProducts = null;
        this.products = null;
        this.pagesNum = 0;
        this.selectedProduct = null;
      } else {
        console.log('show all products');
        console.log(data);
        if ((<any> data).findItemsAdvancedResponse[0].ack[0] === 'Success' ) {
          if ((<any> data).findItemsAdvancedResponse[0].searchResult[0].hasOwnProperty('item') ) {
            this.allProducts = ( <any> data).findItemsAdvancedResponse[0].searchResult[0].item;
            this.pagesNum = Math.ceil(this.allProducts.length / 10);
            for ( let i = 0; i < this.pagesNum; i++) {
              this.allPages.push(i);
            }
            // console.log(this.allpages);
            this.products = this.allProducts.slice(0, 10);
            this.curPage = 0;
            this.errorState = '';
          } else {
            // show no records
            this.errorState = 'No Record';
            this.allProducts = null;
            this.products = null;
            this.pagesNum = 0;
            this.selectedProduct = null;

          }
        } else {
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
        for (let i = 0; i < ( <any> data).length; i++) {
            this.wishListId.push(( < any> data)[i].itemId[0]);
        }
      }
      console.log(this.wishListId);
    });

  }

  ngOnInit(): void {
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
    this.curPage ++;
    this.products = this.allProducts.slice(10 * this.curPage ,10 + 10 * this.curPage);
    // console.log(this.curPage);
  }
  previousPage() {
    this.selectedProduct = null;
    this.curPage --;
    this.products = this.allProducts.slice(10 * this.curPage ,10 + 10 * this.curPage);
    // console.log(this.curPage);
  }

  changePage(page) {
    this.curPage = page;
    this.products = this.allProducts.slice(10 * this.curPage ,10 + 10 * this.curPage);
  }

}
