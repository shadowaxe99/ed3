```javascript
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { acceptPartnership, rejectPartnership } from '../redux/actions/partnershipManagementActions';

const PartnershipManagement = () => {
  const dispatch = useDispatch();
  const { partnerships, loading, error } = useSelector(state => state.partnershipManagementReducer);

  useEffect(() => {
    if (!partnerships.length) {
      // Fetch partnerships here if not already fetched
    }
  }, [partnerships]);

  const handleAccept = (partnershipId) => {
    dispatch(acceptPartnership(partnershipId));
  };

  const handleReject = (partnershipId) => {
    dispatch(rejectPartnership(partnershipId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="partnership-list">
      {partnerships.map(partnership => (
        <div key={partnership.id}>
          <h2>{partnership.brand.name}</h2>
          <p>{partnership.brand.description}</p>
          <button id="accept-button" onClick={() => handleAccept(partnership.id)}>Accept</button>
          <button id="reject-button" onClick={() => handleReject(partnership.id)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default PartnershipManagement;
```