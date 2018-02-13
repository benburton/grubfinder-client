import { stateSetter } from './utils/state-setter';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { appReducers, AppState } from './app.store';

const DEV_REDUCERS = [stateSetter, storeFreeze];

export function metaReducers(): MetaReducer<any>[] {
  return [...DEV_REDUCERS];
}

export const reducers: ActionReducerMap<AppState> = appReducers;
