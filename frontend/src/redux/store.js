```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import brandMatchingReducer from './reducers/brandMatchingReducer';
import partnershipManagementReducer from './reducers/partnershipManagementReducer';

const rootReducer = combineReducers({
  brandMatching: brandMatchingReducer,
  partnershipManagement: partnershipManagementReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
```