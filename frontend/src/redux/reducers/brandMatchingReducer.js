```javascript
import {
  FETCH_MATCHING_BRANDS_REQUEST,
  FETCH_MATCHING_BRANDS_SUCCESS,
  FETCH_MATCHING_BRANDS_FAILURE
} from '../actions/brandMatchingActions';

const initialState = {
  loading: false,
  brands: [],
  error: ''
};

const brandMatchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MATCHING_BRANDS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_MATCHING_BRANDS_SUCCESS:
      return {
        loading: false,
        brands: action.payload,
        error: ''
      };
    case FETCH_MATCHING_BRANDS_FAILURE:
      return {
        loading: false,
        brands: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default brandMatchingReducer;
```