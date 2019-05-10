import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {WebService} from '../service/search-service';
import {LocalCacheService} from '../service/local-cache-service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  @Output() containerShowMode = new EventEmitter<any>();
  selectedProductJson = null;
  wishListId = [];

  productDetails = null;
  activeTab = 'product-tab';
  productImages = null;
  showImagesIndex = 0;

  googlePhotos = null;
  similarProducts = null;
  defalutOrder = null;
  showProducts = null;
  showMode = 'Show More';

  sortCategory = 'Default';
  ascendingOrder = '0';

  FACEBOOK_SHARE_LINK = 'https://www.facebook.com/dialog/share?app_id=373197823526860&display=popup&href=';
  facebook_url = '';

  constructor(private webService: WebService, private localCacheService: LocalCacheService) {
    this.webService.productsDetailsJson.subscribe(data => {
      console.log(data);
      if (data === null) {
        this.back();
      } else {
        this.productDetails = (<any> data).Item;
        this.productImages = (<any> data).Item.PictureURL;
      }
      this.webService.showProgressBar(false);
    });
    this.webService.googlePhotosJson.subscribe(data => {
      console.log(data);
      this.googlePhotos = data;
    });
    this.webService.similarProductsJson.subscribe(data => {
      this.similarProducts = (<any> data).getSimilarItemsResponse.itemRecommendations.item;
      this.showProducts = this.similarProducts.slice(0, 5);
      this.defalutOrder = this.similarProducts.slice(0, 20);
    });
    this.localCacheService.selectedJson.subscribe(data => {
      this.selectedProductJson = data;
      this.facebook_url = this.FACEBOOK_SHARE_LINK + encodeURI((<any> data).viewItemURL[0] +
        '&quote=Buy ' + (<any> data).title[0] + ' at $' + (<any> data).sellingStatus[0].currentPrice[0].__value__ +
        ' from link below' + '&redirect_uri=http://571hw8-jiahuige.us-east-2.elasticbeanstalk.com');
      console.log('facebook:' + this.facebook_url);
    });

    this.localCacheService.wishListProducts.subscribe(data => {
      this.wishListId = [];
      if (data != null) {
        for (let i = 0; i < ( <any> data).length; i++) {
          this.wishListId.push(( < any> data)[i].itemId[0]);
        }
      }

    });

  }
  ngOnInit(): void {

  }

  setTab(event) {
    this.activeTab = event.id;
  }
  previousImage() {
    if (this.showImagesIndex > 0) {
      this.showImagesIndex--;

    } else {
      this.showImagesIndex = this.productImages.length - 1;
    }
    console.log(this.showImagesIndex);
  }
  nextImages(){
    if (this.showImagesIndex < this.productImages.length - 1) {
      this.showImagesIndex ++;

    } else {
      this.showImagesIndex = 0;
    }
    console.log(this.showImagesIndex);

  }

  getLeftDays(times) {
    let d = times.indexOf('D');
    return times.slice(1, d);
  }

  changeShowProductsNum() {
    if (this.showMode === 'Show More'){
      this.showProducts = this.similarProducts.slice(0, 20);
      this.showMode = 'Show Less';
    } else {
      this.showProducts = this.similarProducts.slice(0, 5);
      this.showMode = 'Show More';
    }

  }

  back() {
    this.containerShowMode.emit('back' );
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
    switch (this.sortCategory ) {
      case 'Default':
        this.similarProducts = this.defalutOrder.slice(0, 20);
        break;
      case 'Product Name':
        this.similarProducts.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      case 'Days Left':
        this.similarProducts.sort((a, b) => {
          if (parseInt(this.getLeftDays(a.timeLeft)) < parseInt(this.getLeftDays(b.timeLeft))) {
            return -1;
          } else if (parseInt(this.getLeftDays(a.timeLeft)) > parseInt(this.getLeftDays(b.timeLeft))) {
            return 1;
          } else {
            return 0;
          }

        });
        break;
      case 'Price':
        this.similarProducts.sort((a, b) => {
          if (parseInt(a.buyItNowPrice.__value__) < parseInt(b.buyItNowPrice.__value__)) {
            return -1;
          } else if (parseInt(a.buyItNowPrice.__value__) > parseInt(b.buyItNowPrice.__value__)) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      case 'Shopping Cost':
        this.similarProducts.sort((a, b) => {
          if (parseInt(a.shippingCost.__value__) < parseInt(b.shippingCost.__value__)) {
            return -1;
          } else if (parseInt(a.shippingCost.__value__) > parseInt(b.shippingCost.__value__)) {
            return 1;
          } else {
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

    } else {
      this.showProducts = this.similarProducts.slice(0, 20);
    }
  }

  add2WishList(product) {
    this.localCacheService.add2WishList(product.itemId[0], product);
  }
  removeItemFromWishList(id) {
    this.localCacheService.removeFromWishList(id);
  }

}
