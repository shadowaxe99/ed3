```javascript
import {
  FETCH_PARTNERSHIPS_PENDING,
  FETCH_PARTNERSHIPS_SUCCESS,
  FETCH_PARTNERSHIPS_ERROR,
  ACCEPT_PARTNERSHIP,
  REJECT_PARTNERSHIP
} from '../actions/partnershipManagementActions';

const initialState = {
  pending: false,
  partnerships: [],
  error: null
}

export default function partnershipManagementReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PARTNERSHIPS_PENDING: 
      return {
        ...state,
        pending: true
      }
    case FETCH_PARTNERSHIPS_SUCCESS:
      return {
        ...state,
        pending: false,
        partnerships: action.partnerships
      }
    case FETCH_PARTNERSHIPS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case ACCEPT_PARTNERSHIP:
      return {
        ...state,
        partnerships: state.partnerships.map(partnership =>
          partnership.id === action.id ? { ...partnership, status: 'accepted' } : partnership
        )
      }
    case REJECT_PARTNERSHIP:
      return {
        ...state,
        partnerships: state.partnerships.map(partnership =>
          partnership.id === action.id ? { ...partnership, status: 'rejected' } : partnership
        )
      }
    default: 
      return state;
  }
}

export const getPartnerships = state => state.partnerships;
export const getPartnershipsPending = state => state.pending;
export const getPartnershipsError = state => state.error;
```