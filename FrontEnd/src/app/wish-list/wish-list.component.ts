import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { WebService } from '../service/search-service';
import { LocalCacheService } from '../service/local-cache-service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html'
  // styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  @Output() containerShowMode = new EventEmitter<any>();

  selectedProduct = null;
  myWishList = null;

  constructor( private webService: WebService, private localCacheService: LocalCacheService) {
    this.localCacheService.wishListProducts.subscribe(data => {
      this.myWishList = data;
    });

  }

  ngOnInit(): void {
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

}
