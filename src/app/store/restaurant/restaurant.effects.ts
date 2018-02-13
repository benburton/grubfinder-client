import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import * as restaurantActions from './restaurant.actions';
import * as appSelectors from 'app/store/app';
import { AppState } from 'app/store/app.store';
import { RestaurantApiService } from 'app/services/restaurant-api/restaurant-api.service';
import { RestaurantQuery } from 'app/models/restaurant-query.model';

/**
 * Side effects that occur from Actions from the Restaurant store
 */
@Injectable()
export class RestaurantEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private restaurantApiService: RestaurantApiService
  ) { }

  /**
   * When a request for Restaurants is dispatched, the current query is pulled from the Restaurant UI store and
   * sent to the RestaurantApiService to be dispatched to the GrubFinder backend.
   */
  @Effect()
  fetchRestaurants$: Observable<Action> = this.actions$
    .ofType(restaurantActions.RequestRestaurantsAction.type)
    .withLatestFrom(this.store$.select(appSelectors.getRestaurantQuery))
    .map(([action, query]) => query)
    .switchMap((query: RestaurantQuery) =>
      this.restaurantApiService.list(query)
        .switchMap((result: any) => Observable.of(new restaurantActions.RequestRestaurantsSuccessAction(result)))
        .catch(err => Observable.of(new restaurantActions.RequestRestaurantsFailureAction(err)))
    );

}
