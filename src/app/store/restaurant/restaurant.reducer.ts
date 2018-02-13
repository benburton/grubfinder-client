import * as inspectionActions from './restaurant.actions';

/**
 * An interface representing the data stored in the Restaurant store
 */
export interface RestaurantState {
  restaurants: Array<object>;
  stats: object;
}

/**
 * Initial state of the Restaurant store
 */
export const initialState: RestaurantState = {
  restaurants: [],
  stats: null
};

/**
 * Reducer function which applies an action to the previous store state in order to generate a new state
 */
export function restaurantReducer(state: RestaurantState = initialState, action: inspectionActions.Actions): RestaurantState {

  switch(action.type) {

    case inspectionActions.RequestRestaurantsSuccessAction.type: {
      const { stats, restaurants, append } = action.payload;
      return Object.assign({}, state, {
        restaurants: append ? [...state.restaurants, ...restaurants] : restaurants,
        stats: stats
      });
    }

    default: return state;
  }

}
