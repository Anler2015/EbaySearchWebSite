import { Component, OnInit,Input } from '@angular/core';
import {LocalCacheService} from '../service/local-cache-service';
import {WebService} from '../service/search-service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.css'],
  animations:[
    trigger('showTabMode', [

      transition('details => *', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition('* => details', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition('* => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),


    ])
  ]
})
export class ResultContainerComponent implements OnInit {

  showTable = true;
  showWishList = false;
  showProductDetails = false;
  mode = 'products';
  animation = 'products';

  showProgressBar = false;

  constructor(private webService: WebService, private localCacheService: LocalCacheService){
    this.webService.back2ResultsTableFlag.subscribe( data => {
      this.showProductsTable();
    });
    this.webService.showProgressBarFlag.subscribe( data => {
      this.showProgressBar = <boolean> data;
    });
  }

  ngOnInit(): void {
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
    } else if (event === 'back') {
      this.showProductDetails = false;
      if (this.mode === 'products') {
        this.animation = 'products';
        this.showTable = true;
        this.showWishList = false;
      } else {
        this.animation = 'wish-list';
        this.showTable = false;
        this.showWishList = true;
      }

    }

  }



}
