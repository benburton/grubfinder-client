import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RestaurantApiService } from './restaurant-api.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    RestaurantApiService
  ]
})
export class RestaurantApiModule { }
