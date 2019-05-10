import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalCacheService {

  private wishListSubject = new Subject();
  wishListProducts = this.wishListSubject.asObservable();

  private selectJsonSubject = new Subject();
  selectedJson = this.selectJsonSubject.asObservable();

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
    } else {
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
}

