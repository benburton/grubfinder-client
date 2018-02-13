import * as restaurantUiActions from './restaurant-ui.actions';

/**
 * An interface representing the data stored in the Restaurant UI store
 */
export interface RestaurantUiState {
  restaurantQuery: any;
  descriptions: Array<string>;
  selectedRestaurant: any;
}

/**
 * Initial state of the Restuarant UI store
 */
export const initialState: RestaurantUiState = {
  restaurantQuery: {},
  descriptions: [],
  selectedRestaurant: null
};

/**
 * Reducer function which applies an action to the previous store state in order to generate a new state
 */
export function restaurantUiReducer(state: RestaurantUiState = initialState, action: restaurantUiActions.Actions): RestaurantUiState {

  switch(action.type) {
    case restaurantUiActions.SetRestaurantQueryAction.type: {
      return Object.assign({}, state, {
        restaurantQuery: action.payload
      });
    }

    case restaurantUiActions.ToggleSelectedRestaurantAction.type: {
      return Object.assign({}, state, {
        selectedRestaurant: state.selectedRestaurant === action.payload ? null : action.payload
      });
    }

    case restaurantUiActions.ClearSelectedRestaurantAction.type: {
      return Object.assign({}, state, {
        selectedRestaurant: null
      });
    }

    case restaurantUiActions.RequestDescriptionsSuccessAction.type: {
      return Object.assign({}, state, {
        descriptions: action.payload
      });
    }

    default: return state;
  }

}
