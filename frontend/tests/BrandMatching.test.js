```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BrandMatching from '../components/BrandMatching';

test('BrandMatching component renders with initial state', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrandMatching />
    </Provider>
  );

  expect(getByTestId('brand-list')).toBeInTheDocument();
});

test('BrandMatching component dispatches FETCH_MATCHING_BRANDS action on load', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrandMatching />
    </Provider>
  );

  expect(store.getActions()).toContainEqual({ type: 'FETCH_MATCHING_BRANDS' });
});

test('BrandMatching component displays fetched brands', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrandMatching />
    </Provider>
  );

  // Mock API response
  const mockBrands = [
    { id: 1, name: 'Brand 1' },
    { id: 2, name: 'Brand 2' },
  ];

  // Mock fetchMatchingBrands function
  jest.spyOn(brandMatchingActions, 'fetchMatchingBrands').mockImplementation(() => mockBrands);

  // Wait for brands to be displayed
  await waitFor(() => expect(getByTestId('brand-list')).toContainHTML('<li>Brand 1</li><li>Brand 2</li>'));
});
```