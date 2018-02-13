import { Restaurant } from 'app/models/restaurant.model';
import { RestaurantQuery } from 'app/models/restaurant-query.model';

import { RestaurantUiState } from './restaurant-ui.reducer';

/**
 * Returns the presently selected Restuarant in the UI
 */
export const getSelectedRestaurant: (state: RestaurantUiState) => Restaurant =
  (state: RestaurantUiState) => state.selectedRestaurant ? new Restaurant(state.selectedRestaurant) : null;

/**
 * Returns the current RestaurantQuery
 */
export const getRestaurantQuery: (state: RestaurantUiState) => RestaurantQuery =
  (state: RestaurantUiState) => new RestaurantQuery(state.restaurantQuery);

/**
 * Returns cuisine descriptions from the Restaurant UI store
 */
export const getDescriptions: (state: RestaurantUiState) => Array<string> =
  (state: RestaurantUiState) => state.descriptions;
