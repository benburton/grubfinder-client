import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { GradeBadgeModule } from 'app/components/grade-badge/grade-badge.module';

import { RestaurantListContainer } from './restaurant-list.container';
import { RestaurantListComponent } from './restaurant-list.component';

@NgModule({
  declarations: [
    RestaurantListContainer,
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    GradeBadgeModule,
    InfiniteScrollModule
  ],
  exports: [
    RestaurantListContainer
  ],
  providers: [
  ]
})
export class RestaurantListModule { }

