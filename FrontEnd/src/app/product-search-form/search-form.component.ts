import { Component, OnInit } from '@angular/core';
import { WebService } from '../service/search-service';
import { SearchInput } from './search-input';
import {LocalCacheService} from '../service/local-cache-service';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {
  constructor(private webService: WebService, private localCacheService: LocalCacheService) {
    this.webService.autoCompleteJson.subscribe(data => {
      if ((<any>data).hasOwnProperty('postalCodes')) {
        this.autoCode = (<any>data).postalCodes;
      } else {
        this.autoCode = [];
      }

    });
  }

  autoCode = [];


  cur_zipcode = '';
  input_zipcode = '';
  isThere = false;
  getCurZipcode = false;
  categories = [
    {name: 'All Categories',
      val: ''},
    {name: 'Art',
      val: '550'},
    {name: 'Baby',
      val: '2984'},
    {name: 'Books',
      val: '267'},
    {name: 'Clothing, Shoes & Accessories',
      val: '11450'},
    {name: 'Computers/Tablets & Networking',
      val: '58058'},
    {name: 'Health & Beauty',
      val: '26395'},
    {name: 'Music',
      val: '11233'},
    {name: 'Video Games & Consoles',
      val: '1249'},
  ];
  checkbox = ['New', 'Used', 'Unspecified'];


  newCondition = false;
  usedCondition = false;
  unspecifedCondition = false;
  searchForm = SearchInput;

  ngOnInit() {

    this.webService.getCurZipCode().subscribe(data => {
      this.cur_zipcode = data['zip'];
      console.log('cur zip :' + this.cur_zipcode );
      this.getCurZipcode = true;
    });
  }
  getZipcode() {
    if (this.isThere) {
      this.searchForm.zipcode = this.input_zipcode;
    } else {
      this.searchForm.zipcode = this.cur_zipcode;
    }
  }

  set_condition(element){
    if (element.checked){
      let idx = this.checkbox.indexOf(element.id);
      this.searchForm.condition.push(this.checkbox[idx]);
    } else {
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

  regExp = /^\d{5}$/;
  isVaildZipcode(code) {
    if (this.regExp.test(this.input_zipcode)) {
      return true;
    } else {
      return false;
    }
  }

  isValidation() {
    if ( this.searchForm.keyword === null || this.searchForm.keyword === '' || this.searchForm.keyword.trim() === '') {
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
}
