```javascript
import axios from 'axios';

export const FETCH_MATCHING_BRANDS_REQUEST = 'FETCH_MATCHING_BRANDS_REQUEST';
export const FETCH_MATCHING_BRANDS_SUCCESS = 'FETCH_MATCHING_BRANDS_SUCCESS';
export const FETCH_MATCHING_BRANDS_FAILURE = 'FETCH_MATCHING_BRANDS_FAILURE';

export const fetchMatchingBrandsRequest = () => {
  return {
    type: FETCH_MATCHING_BRANDS_REQUEST
  }
}

export const fetchMatchingBrandsSuccess = (brands) => {
  return {
    type: FETCH_MATCHING_BRANDS_SUCCESS,
    payload: brands
  }
}

export const fetchMatchingBrandsFailure = (error) => {
  return {
    type: FETCH_MATCHING_BRANDS_FAILURE,
    payload: error
  }
}

export const fetchMatchingBrands = (influencerId) => {
  return (dispatch) => {
    dispatch(fetchMatchingBrandsRequest());
    axios.get(`${process.env.REACT_APP_API_URL}/brand_matching/${influencerId}`)
      .then(response => {
        const brands = response.data;
        dispatch(fetchMatchingBrandsSuccess(brands));
      })
      .catch(error => {
        dispatch(fetchMatchingBrandsFailure(error.message));
      });
  }
}
```