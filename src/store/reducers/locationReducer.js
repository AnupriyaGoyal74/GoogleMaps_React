import {
  LOCATIONS_FETCH,
  ENTERED_LOCATION,
  RECENT_SEARCHES,
  SELECTED_LOACATION,
} from '../types';
import {locationData} from '../../Resources/mockData';

const INITIAL_STATE = {
  locationsData: [],
  enteredLocation: '',
  recentSearches: [],
  selectedLocation: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATIONS_FETCH:
      return {...state, locationsData: locationData};
    case ENTERED_LOCATION:
      return {...state, enteredLocation: action.payload};
    case RECENT_SEARCHES:
      return {
        ...state,
        recentSearches: [...state.recentSearches, action.payload],
      };
    case SELECTED_LOACATION:
      return {
        ...state,
        selectedLocation: action.payload,
      };
    default:
      return state;
  }
};
