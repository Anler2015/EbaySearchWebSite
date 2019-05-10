import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './product-search-form/search-form.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ResultContainerComponent} from './result-contain/result-container.component';
import { ProductDetailsComponent} from './product-details/product-details.component';
import { WishListComponent} from './wish-list/wish-list.component';

import { WebService } from './service/search-service';
import { LocalCacheService} from './service/local-cache-service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ProductsTableComponent,
    ResultContainerComponent,
    ProductDetailsComponent,
    WishListComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RoundProgressModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [WebService, LocalCacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
