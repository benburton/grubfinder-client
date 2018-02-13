import { ActionReducerMap } from '@ngrx/store';

import { RestaurantState, restaurantReducer } from './restaurant/restaurant.reducer';
import { RestaurantUiState, restaurantUiReducer } from './restaurant-ui/restaurant-ui.reducer';

/**
 * Application state is an aggregation of the Restaurant state and the Restaurant UI state
 */
export interface AppState {
  restaurant: RestaurantState;
  restaurantUi: RestaurantUiState;
}

/**
 * Reducers mapped to their stores in global state
 */
export const appReducers: ActionReducerMap<AppState> = {
  restaurant: restaurantReducer,
  restaurantUi: restaurantUiReducer
};
