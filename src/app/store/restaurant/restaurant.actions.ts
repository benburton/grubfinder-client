import { Action } from '@ngrx/store';

import { type } from 'app/store/utils/utils';

/**
 * ActionTypes for interactions associated with the Restaurant store
 */
export const ActionTypes = {
  REQUEST_RESTAURANTS: type('[Restaurant] Request Restaurants'),
  REQUEST_RESTAURANTS_SUCCESS: type('[Restaurant] Request Restaurants Success'),
  REQUEST_RESTAURANTS_FAILURE: type('[Restaurant] Request Restaurants Failure')
};

/**
 * Action representing a request for Restaurants from the GrubFinder backend
 */
export class RequestRestaurantsAction implements Action {
  public static type: string = ActionTypes.REQUEST_RESTAURANTS;
  public type: string = RequestRestaurantsAction.type;
  public payload: any = {};
  constructor() { }
}

/**
 * Action to be dispatched when there has been a successful request for Restaurants
 */
export class RequestRestaurantsSuccessAction implements Action {
  public static type: string = ActionTypes.REQUEST_RESTAURANTS_SUCCESS;
  public type: string = RequestRestaurantsSuccessAction.type;
  constructor(public payload: any) { }
}

/**
 * Action to be dispatched when there are errors returned from a request for Restaurants
 */
export class RequestRestaurantsFailureAction implements Action {
  public static type: string = ActionTypes.REQUEST_RESTAURANTS_FAILURE;
  public type: string = RequestRestaurantsFailureAction.type;
  constructor(public payload: any) { }
}

export type Actions
  = RequestRestaurantsAction
  | RequestRestaurantsSuccessAction
  | RequestRestaurantsFailureAction
  ;
