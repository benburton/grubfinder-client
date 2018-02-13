import { createSelector } from 'reselect';

import * as restaurantSelectors from 'app/store/restaurant/restaurant.selectors';
import { AppState } from 'app/store/app.store';

const getRestaurantState = (state: AppState) => state.restaurant;

export const getRestaurants = createSelector(getRestaurantState, restaurantSelectors.getRestaurants);
export const getInspectionStats = createSelector(getRestaurantState, restaurantSelectors.getRestaurantStats);
