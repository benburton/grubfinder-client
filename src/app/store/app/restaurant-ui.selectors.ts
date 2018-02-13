import { createSelector } from 'reselect';

import * as inspectionUiSelectors from 'app/store/restaurant-ui/restaurant-ui.selectors';
import { AppState } from 'app/store/app.store';

const getInspectionUiState = (state: AppState) => state.restaurantUi;

export const getSelectedRestaurant = createSelector(getInspectionUiState, inspectionUiSelectors.getSelectedRestaurant);
export const getRestaurantQuery = createSelector(getInspectionUiState, inspectionUiSelectors.getRestaurantQuery);
export const getDescriptions = createSelector(getInspectionUiState, inspectionUiSelectors.getDescriptions);
