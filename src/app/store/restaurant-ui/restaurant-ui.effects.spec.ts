import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';

import 'rxjs/add/observable/throw';

import { AppState } from '../app.store';
import { RestaurantApiService } from '../../services/restaurant-api/restaurant-api.service';
import { Restaurant } from '../../models/restaurant.model';
import { RequestRestaurantsAction, RequestRestaurantsSuccessAction } from '../restaurant/restaurant.actions';
import { RestaurantQuery } from '../../models/restaurant-query.model';

import { RestaurantUiEffects } from './restaurant-ui.effects';
import { restaurantReducer, RestaurantState } from '../restaurant/restaurant.reducer';
import { restaurantUiReducer, RestaurantUiState } from './restaurant-ui.reducer';
import {
  ClearSelectedRestaurantAction, PaginateQueryAction, RequestDescriptionsAction, RequestDescriptionsFailureAction,
  RequestDescriptionsSuccessAction, SetRestaurantQueryAction, ToggleSelectedRestaurantAction
} from './restaurant-ui.actions';


describe('RestaurantUiEffects', () => {
  let actions: ReplaySubject<any>;
  let restaurantUiEffects: RestaurantUiEffects;
  let store: Store<AppState>;

  const restaurants = ['1', '2', '3'].map(camis => new Restaurant({ camis, grades: [], inspections: [] }));
  const otherRestaurant = new Restaurant({ camist: '4', grades: [], inspections: [] });
  const mockRestaurantApiService = new RestaurantApiService(undefined);
  const query = new RestaurantQuery({});

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions),
        RestaurantUiEffects, {
          provide: RestaurantApiService, useValue: mockRestaurantApiService
        }
      ],
      imports: [
        StoreModule.forRoot({
          restaurant: restaurantReducer,
          restaurantUi: restaurantUiReducer
        }, {
          initialState: {
            restaurant: { restaurants, stats: null } as RestaurantState,
            restaurantUi: { restaurantQuery: query } as RestaurantUiState
          }
        })
      ]
    });

    restaurantUiEffects = testBed.get(RestaurantUiEffects);
    store = testBed.get(Store);
    testBed.compileComponents();
  });

  describe('fetchDescriptions$', () => {
    describe('API returns a value', () => {
      const apiResult = [ 'look', 'at', 'these', 'descriptions' ];

      beforeEach(() => {
        spyOn(mockRestaurantApiService, 'descriptions').and.returnValue(Observable.of(apiResult));
        actions = new ReplaySubject(1);
        actions.next(new RequestDescriptionsAction());
      });

      it('dispatches a RequestDescriptionsSuccessAction with the result', () => {
        restaurantUiEffects.fetchDescriptions$.subscribe(result => {
          expect(mockRestaurantApiService.descriptions).toHaveBeenCalled();
          expect(result).toEqual(new RequestDescriptionsSuccessAction(apiResult));
        });
      });
    });

    describe('when API throws an exception', () => {
      const error = 'The server is on fire!';

      beforeEach(() => {
        spyOn(mockRestaurantApiService, 'descriptions').and.returnValue(Observable.throw(error));
      });

      it('dispatches a RequestDescriptionsFailureAction with the error', () => {
        restaurantUiEffects.fetchDescriptions$.subscribe(result => {
          expect(mockRestaurantApiService.descriptions).toHaveBeenCalled();
          expect(result).toEqual(new RequestDescriptionsFailureAction(error));
        });
      });
    });
  });

  describe('resetSelection$', () => {

    describe('selectedRestaurant is not in store', () => {
      beforeEach(() => {
        actions = new ReplaySubject(1);
        actions.next(new ToggleSelectedRestaurantAction(otherRestaurant));
        actions.next(new RequestRestaurantsSuccessAction({ restaurants, stats: {}, append: false }));
      });

      it('dispatches a ClearSelectedRestaurantAction', () => {
        restaurantUiEffects.resetSelection$.subscribe(result => {
          expect(result).toEqual(new ClearSelectedRestaurantAction());
        });
      });
    });
  });

  describe('queryUpdated$', () => {
    beforeEach(() => {
      actions = new ReplaySubject(1);
      actions.next(new SetRestaurantQueryAction(query));
    });

    it('dispatches a RequestRestaurantsAction', () => {
      restaurantUiEffects.queryUpdated$.subscribe(result => {
        expect(result).toEqual(new RequestRestaurantsAction());
      });
    });

  });

  describe('paginateQuery$', () => {
    beforeEach(() => {
      actions = new ReplaySubject(1);
      actions.next(new PaginateQueryAction());
    });

    it('dispatches a SetRestaurantQueryAction with paginated query', () => {
      restaurantUiEffects.paginateQuery$.subscribe(result => {
        expect(result).toEqual(new SetRestaurantQueryAction(query.paginate()));
      });
    });
  });

});
