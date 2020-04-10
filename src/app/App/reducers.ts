import { SIMPLE_ACTION, SimpleAction } from './actions';
import { AppState } from 'config/types';

export default (state = '', action: SimpleAction): AppState['simpleReducer'] => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return action.payload;
    default:
      return state;
  }
};
