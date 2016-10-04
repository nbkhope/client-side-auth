import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import messagesReducer from './messages_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  messages: messagesReducer,
});

export default rootReducer;
