import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material';

import { RestaurantFilterComponent } from './restaurant-filter.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  declarations: [
    RestaurantFilterComponent
  ],
  exports: [
    RestaurantFilterComponent
  ]
})
export class RestaurantFilterModule { }
