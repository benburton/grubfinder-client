import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as restaurantActions from 'app/store/restaurant/restaurant.actions';
import * as restaurantUiActions from 'app/store/restaurant-ui/restaurant-ui.actions';
import * as appSelectors from 'app/store/app';
import { AppState } from 'app/store/app.store';
import { Restaurant } from 'app/models/restaurant.model';

/**
 * Container component to manage interaction between the underlying presentational list and the application state
 */
@Component({
  selector: 'gf-restaurant-list-container',
  template: `
    <div
      infiniteScroll
      [infiniteScrollDistance]="2"
      [infiniteScrollThrottle]="50"
      (scrolled)="scroll()">
      <gf-restaurant-list
        [restaurants]="restaurants$ | async"
        [selectedRestaurant]="selectedRestaurant$ | async"
        (restaurantToggle)="restaurantToggle($event)"
      ></gf-restaurant-list>
    </div>
  `
})
export class RestaurantListContainer implements OnInit {

  public restaurants$: Observable<Array<Restaurant>>;
  public selectedRestaurant$: Observable<Restaurant>;

  constructor(private store: Store<AppState>) { }

  public ngOnInit(): void {
    this.restaurants$ = this.store.select(appSelectors.getRestaurants);
    this.selectedRestaurant$ = this.store.select(appSelectors.getSelectedRestaurant);
    this.store.dispatch(new restaurantActions.RequestRestaurantsAction());
  }

  /**
   * Called when a restaurant has been toggled to be selected/deselected
   *
   * @param {Restaurant} restaurant
   */
  public restaurantToggle(restaurant: Restaurant) {
    this.store.dispatch(new restaurantUiActions.ToggleSelectedRestaurantAction(restaurant));
  }

  /**
   * Called when the underlying component has been scrolled
   */
  public scroll() {
    this.store.dispatch(new restaurantUiActions.PaginateQueryAction());
  }

}
