import { combineReducers } from 'redux-immutablejs';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import todo from './todoReducer';
import car from './carReducer';

export default combineReducers({
  // External import reducers
  loadingBar,

  // App reducers
  todo,
  car,
});
