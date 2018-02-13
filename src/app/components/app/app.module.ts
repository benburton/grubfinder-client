import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

import { metaReducers, reducers } from 'app/store';
import { RestaurantListModule } from 'app/components/restaurant-list/restaurant-list.module';
import { RestaurantApiModule } from 'app/services/restaurant-api/restaurant-api.module';
import { RestaurantFilterModule } from 'app/components/restaurant-filter/restaurant-filter.module';
import { InspectionDetailsModule } from 'app/components/inspection-details/inspection-details.module';
import { RestaurantStatsModule } from 'app/components/restaurant-stats/restaurant-stats.module';
import { RestaurantEffects } from 'app/store/restaurant/restaurant.effects';
import { RestaurantUiEffects } from 'app/store/restaurant-ui/restaurant-ui.effects';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    RestaurantListModule,
    RestaurantFilterModule,
    InspectionDetailsModule,
    RestaurantStatsModule,
    RestaurantApiModule,
    StoreModule.forRoot(reducers, {
      metaReducers: metaReducers()
    }),
    EffectsModule.forRoot([
      RestaurantEffects,
      RestaurantUiEffects
    ])
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
