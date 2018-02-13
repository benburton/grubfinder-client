import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as appSelectors from 'app/store/app';
import * as restaurantUiActions from 'app/store/restaurant-ui/restaurant-ui.actions';
import { AppState } from 'app/store/app.store';
import { Restaurant } from 'app/models/restaurant.model';
import { RestaurantQuery } from 'app/models/restaurant-query.model';
import { RestaurantStats } from 'app/models/restaurant-stats.model';

/**
 * Main component for the GrubFinder application
 */
@Component({
  selector: 'gf-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {

  public restaurantQuery$: Observable<RestaurantQuery>;
  public selectedRestaurant$: Observable<Restaurant>;
  public descriptions$: Observable<Array<string>>;
  public stats$: Observable<RestaurantStats>;

  constructor(
    private store: Store<AppState>
  ) {
    this.restaurantQuery$ = this.store.select(appSelectors.getRestaurantQuery);
    this.selectedRestaurant$ = this.store.select(appSelectors.getSelectedRestaurant);
    this.descriptions$ = this.store.select(appSelectors.getDescriptions);
    this.stats$ = this.store.select(appSelectors.getInspectionStats);
    this.store.dispatch(new restaurantUiActions.RequestDescriptionsAction());
  }

  public filterChange(query: RestaurantQuery): void {
    this.store.dispatch(new restaurantUiActions.SetRestaurantQueryAction(query.reset()));
  }

}
