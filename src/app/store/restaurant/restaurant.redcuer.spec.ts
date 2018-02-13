import { Restaurant } from 'app/models/restaurant.model';

import { initialState, restaurantReducer, RestaurantState } from './restaurant.reducer';
import { RequestRestaurantsSuccessAction } from './restaurant.actions';

describe('restaurantReducer', () => {
  let state: RestaurantState;

  beforeEach(() => {
    state = initialState;
  });

  describe('RequestRestaurantsSuccessAction', () => {
    let payload = {
      restaurants: [new Restaurant({ inspections: [], grades: [] })],
      stats: { these: 'are', some: 'stats'}
    };
    let action: RequestRestaurantsSuccessAction;

    beforeEach(() => {
      payload = Object.assign({}, payload, {
        append: false
      });
      action = new RequestRestaurantsSuccessAction(payload);
    });

    it('sets state.restaurants to payload.restaurants', () => {
      expect(restaurantReducer(state, action).restaurants).toEqual(payload.restaurants);
    });

    it('sets state.stats to payload.stats', () => {
      expect(restaurantReducer(state, action).stats).toEqual(payload.stats);
    });

    describe('append in payload is true', () => {
      const existingRestaurants = ['d', 'e', 'f'].map(camis => new Restaurant({ camis, inspections: [], grades: []}));

      beforeEach(() => {
        state = Object.assign({}, state, {
          restaurants: existingRestaurants
        });
        payload = Object.assign({}, payload, {
          append: true
        });
        action = new RequestRestaurantsSuccessAction(payload);
      });

      it('appends payload.restaurants to state.restaurants', () => {
        expect(restaurantReducer(state, action).restaurants).toEqual([...existingRestaurants, ...payload.restaurants]);
      });
    });
  });
});
