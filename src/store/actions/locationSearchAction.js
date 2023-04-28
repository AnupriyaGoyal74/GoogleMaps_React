import {
  ENTERED_LOCATION,
  LOCATIONS_FETCH,
  RECENT_SEARCHES,
  SELECTED_LOACATION,
} from '../types';

export const onChangeEnteredLocation = value => {
  return {
    type: ENTERED_LOCATION,
    payload: value,
  };
};

export const getLocations = () => {
  return {
    type: LOCATIONS_FETCH,
  };
};

export const saveRecentSearches = searchedItem => {
  return {
    type: RECENT_SEARCHES,
    payload: searchedItem,
  };
};

export const saveSelectedLocation = searchedItem => {
  return {
    type: SELECTED_LOACATION,
    payload: searchedItem,
  };
};
