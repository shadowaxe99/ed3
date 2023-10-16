```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import PartnershipManagement from '../components/PartnershipManagement';

test('renders PartnershipManagement component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <PartnershipManagement />
    </Provider>
  );
  const partnershipManagementElement = getByTestId('partnership-management');
  expect(partnershipManagementElement).toBeInTheDocument();
});

test('accepts partnership when accept button is clicked', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <PartnershipManagement />
    </Provider>
  );
  const acceptButton = getByTestId('accept-button');
  fireEvent.click(acceptButton);
  expect(store.getState().partnershipManagementReducer.partnerships).toContainEqual({ status: 'accepted' });
});

test('rejects partnership when reject button is clicked', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <PartnershipManagement />
    </Provider>
  );
  const rejectButton = getByTestId('reject-button');
  fireEvent.click(rejectButton);
  expect(store.getState().partnershipManagementReducer.partnerships).toContainEqual({ status: 'rejected' });
});
```