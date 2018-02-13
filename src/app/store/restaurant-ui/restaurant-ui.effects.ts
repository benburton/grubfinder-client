import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';

import * as appSelectors from 'app/store/app';
import * as restaurantActions from 'app/store/restaurant/restaurant.actions';
import { AppState } from 'app/store/app.store';
import { RestaurantQuery } from 'app/models/restaurant-query.model';
import { RestaurantApiService } from 'app/services/restaurant-api/restaurant-api.service';

import * as restaurantUiActions from './restaurant-ui.actions';

/**
 * Side effects that occur from Actions from the Restaurant UI store
 */
@Injectable()
export class RestaurantUiEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private restaurantApiService: RestaurantApiService
  ) { }

  /**
   * When a request for cuisine descriptions is dispatched, the RestaurantApiService is called, subsequently
   * dispatching success/failure Actions based on the API response.
   */
  @Effect()
  fetchDescriptions$: Observable<Action> = this.actions$
    .ofType(restaurantUiActions.RequestDescriptionsAction.type)
    .switchMap(() => this.restaurantApiService.descriptions()
      .switchMap((result: any) => Observable.of(new restaurantUiActions.RequestDescriptionsSuccessAction(result)))
      .catch(err => Observable.of(new restaurantUiActions.RequestDescriptionsFailureAction(err)))
    );

  /**
   * When the Restaurants are updated in the store, if the currently selected Restaurant in the UI is no longer in
   * the frontend data, remove it from view
   */
  @Effect()
  resetSelection$: Observable<Action> = this.actions$
    .ofType(restaurantActions.RequestRestaurantsSuccessAction.type)
    .withLatestFrom(
      this.store$.select(appSelectors.getSelectedRestaurant),
      this.store$.select(appSelectors.getRestaurants)
    )
    .switchMap(([action, selectedRestaurant, restaurants]) =>
      restaurants.find(r => r.equals(selectedRestaurant)) === undefined ?
        Observable.of(new restaurantUiActions.ClearSelectedRestaurantAction()) :
        Observable.empty()
    );

  /**
   * When the Restaurant Query is updated in the UI, we make a request for Restaurants
   */
  @Effect()
  queryUpdated$: Observable<Action> = this.actions$
    .ofType(restaurantUiActions.SetRestaurantQueryAction.type)
    .switchMap(() => Observable.of(new restaurantActions.RequestRestaurantsAction()));

  /**
   * When a pagniation action is requested, set the query object to be updated with a paginated state
   */
  @Effect()
  paginateQuery$: Observable<Action> = this.actions$
    .ofType(restaurantUiActions.PaginateQueryAction.type)
    .withLatestFrom((this.store$.select(appSelectors.getRestaurantQuery)))
    .map(([action, query]) => query)
    .switchMap((query: RestaurantQuery) => {
      return Observable.of(new restaurantUiActions.SetRestaurantQueryAction(query.paginate()));
    });

}
