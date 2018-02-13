import { Restaurant } from 'app/models/restaurant.model';
import { RestaurantStats } from 'app/models/restaurant-stats.model';

import { RestaurantState } from './restaurant.reducer';

/**
 * Returns an Array of Restaurant models from the Restaurant store
 */
export const getRestaurants: (RestaurantState) => Array<Restaurant> =
  (state: RestaurantState) => state.restaurants.map(inspection => new Restaurant(inspection));

/**
 * Returns a Restaurant stats object from the Restaurant store
 */
export const getRestaurantStats: (RestaurantState) => RestaurantStats =
  (state: RestaurantState) => state.stats === null ? undefined : new RestaurantStats(state.stats);
