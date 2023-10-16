```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BrandMatching from './components/BrandMatching';
import PartnershipManagement from './components/PartnershipManagement';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrandMatching />
        <PartnershipManagement />
      </div>
    </Provider>
  );
}

export default App;
```