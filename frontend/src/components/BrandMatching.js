```javascript
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatchingBrands } from '../redux/actions/brandMatchingActions';

const BrandMatching = () => {
  const dispatch = useDispatch();
  const brandMatching = useSelector(state => state.brandMatching);
  const { loading, error, brands } = brandMatching;

  useEffect(() => {
    dispatch(fetchMatchingBrands());
  }, [dispatch]);

  return (
    <div id="brand-list">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        brands.map(brand => (
          <div key={brand.id}>
            <h2>{brand.name}</h2>
            <p>{brand.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BrandMatching;
```