import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import { ApplicationState } from 'config/types';

export default function configureStore(initialState = {}): Store<ApplicationState> {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
}
