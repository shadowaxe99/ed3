```javascript
import axios from 'axios';

export const ACCEPT_PARTNERSHIP = 'ACCEPT_PARTNERSHIP';
export const REJECT_PARTNERSHIP = 'REJECT_PARTNERSHIP';

export const acceptPartnership = (partnershipId) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/partnerships/${partnershipId}/accept`);
            dispatch({
                type: ACCEPT_PARTNERSHIP,
                payload: response.data
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export const rejectPartnership = (partnershipId) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/partnerships/${partnershipId}/reject`);
            dispatch({
                type: REJECT_PARTNERSHIP,
                payload: response.data
            });
        } catch (error) {
            console.error(error);
        }
    };
};
```