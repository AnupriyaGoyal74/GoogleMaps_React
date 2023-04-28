import React from 'react';
import {Provider} from 'react-redux';

import LocationSearching from './screens/LocationSearching';
import store from './store/store';

const App = () => {
  return <LocationSearching />;
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
