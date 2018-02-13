import { ActionReducer } from '@ngrx/store';

export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    return reducer(state, action);
  };
}
