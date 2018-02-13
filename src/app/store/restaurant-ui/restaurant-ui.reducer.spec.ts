import { initialState, restaurantUiReducer, RestaurantUiState } from './restaurant-ui.reducer';
import { RequestDescriptionsSuccessAction, SetRestaurantQueryAction, ToggleSelectedRestaurantAction } from './restaurant-ui.actions';
import { RestaurantQuery } from '../../models/restaurant-query.model';
import { Restaurant } from '../../models/restaurant.model';

describe('restaurantUiReducer', () => {
  const state: RestaurantUiState = initialState;

  describe('SetRestaurantQueryAction', () => {
    const query: RestaurantQuery = new RestaurantQuery({});
    const action = new SetRestaurantQueryAction(query);

    it('sets state.restaurantQuery to action payload', () => {
      expect(restaurantUiReducer(state, action).restaurantQuery).toEqual(query);
    });
  });

  describe('ToggleSelectedRestaurantAction', () => {
    const restaurant: Restaurant = new Restaurant({
      inspections: [], grades: []
    });
    const action = new ToggleSelectedRestaurantAction(restaurant);

    it('sets state.selectedRestaurant to action payload', () => {
      expect(restaurantUiReducer(state, action).selectedRestaurant).toEqual(restaurant);
    });
  });

  describe('RequestDescriptionsSuccessAction', () => {
    const descriptions: Array<string> = ['these', 'are', 'descriptions'];
    const action = new RequestDescriptionsSuccessAction(descriptions);

    it('sets state.descriptions to action payload', () => {
      expect(restaurantUiReducer(state, action).descriptions).toEqual(descriptions);
    });
  });


});
