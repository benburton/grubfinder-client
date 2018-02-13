import { NgModule } from '@angular/core';
import { RestaurantStatsComponent } from './restaurant-stats.component';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  declarations: [
    RestaurantStatsComponent
  ],
  exports: [
    RestaurantStatsComponent
  ]
})
export class RestaurantStatsModule { }
