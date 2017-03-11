import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    fromJS(initialState),
    applyMiddleware(
      thunk,
      loadingBarMiddleware({ promiseTypeSuffixes: [ 'REQUEST', 'SUCCESS', 'FAILURE' ] }),
    ),
  );
}
