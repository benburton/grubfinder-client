import { Action } from '@ngrx/store';

import { type } from 'app/store/utils/utils';
import { RestaurantQuery } from 'app/models/restaurant-query.model';
import { Restaurant } from 'app/models/restaurant.model';

/**
 * ActionTypes for interactions associated with the Restaurant UI store
 */
export const ActionTypes = {
  REQUEST_DESCRIPTIONS: type('[Restaurant UI] Request Descriptions'),
  REQUEST_DESCRIPTIONS_SUCCESS: type('[Restaurant UI] Request Descriptions Success'),
  REQUEST_DESCRIPTIONS_FAILURE: type('[Restaurant UI] Request Descriptions Failure'),
  TOGGLE_SELECTED_RESTAURANT: type('[Restaurant UI] Set Selected Restaurant'),
  CLEAR_SELECTED_RESTAURANT: type('[Restaurautn UI] Clear Selected Restaurant'),
  SET_RESTAURANT_QUERY: type('[Restaurant UI] Set Restaurant Query'),
  PAGINATE_QUERY: type('[Restaurant UI] Paginate Query')
};

/**
 * Action representing a request for cuisine descriptions from the GrubFinder backend
 */
export class RequestDescriptionsAction implements Action {
  public static type: string = ActionTypes.REQUEST_DESCRIPTIONS;
  public type: string = RequestDescriptionsAction.type;
  public payload: any = {};
  constructor() { }
}

/**
 * Action to be dispatched when there has been a success for request for cuisine descriptions
 */
export class RequestDescriptionsSuccessAction implements Action {
  public static type: string = ActionTypes.REQUEST_DESCRIPTIONS_SUCCESS;
  public type: string = RequestDescriptionsSuccessAction.type;
  constructor(public payload: Array<string>) { }
}


/**
 * Action to be dispatched when there are errors returned from a request for cuisine descriptions
 */
export class RequestDescriptionsFailureAction implements Action {
  public static type: string = ActionTypes.REQUEST_DESCRIPTIONS_FAILURE;
  public type: string = RequestDescriptionsFailureAction.type;
  constructor(public payload: string) { }
}

/**
 * Action dispatched when the currently selected Restaurant is toggled selected/deselected
 */
export class ToggleSelectedRestaurantAction implements Action {
  public static type: string = ActionTypes.TOGGLE_SELECTED_RESTAURANT;
  public type: string = ToggleSelectedRestaurantAction.type;
  constructor(public payload: Restaurant) { }
}

/**
 * Action that occurs when the currently selected Restaurant is to be deselected
 */
export class ClearSelectedRestaurantAction implements Action {
  public static type: string = ActionTypes.CLEAR_SELECTED_RESTAURANT;
  public type: string = ClearSelectedRestaurantAction.type;
  public payload: any = {};
  constructor() { }
}

/**
 * Action to update the RestaurantQuery object
 */
export class SetRestaurantQueryAction implements Action {
  public static type: string = ActionTypes.SET_RESTAURANT_QUERY;
  public type: string = SetRestaurantQueryAction.type;
  constructor(public payload: RestaurantQuery) { }
}

/**
 * Action to paginate the current query
 */
export class PaginateQueryAction implements Action {
  public static type: string = ActionTypes.PAGINATE_QUERY;
  public type: string = PaginateQueryAction.type;
  public payload: any = {};
  constructor() { }
}

export type Actions
  = RequestDescriptionsAction
  | RequestDescriptionsSuccessAction
  | RequestDescriptionsFailureAction
  | ToggleSelectedRestaurantAction
  | ClearSelectedRestaurantAction
  | SetRestaurantQueryAction
  | PaginateQueryAction
  ;

