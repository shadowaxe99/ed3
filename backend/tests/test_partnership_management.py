```python
import pytest
from models.influencer import Influencer
from models.brand import Brand
from models.partnership import Partnership
from services.partnership_management_service import PartnershipManagementService

def test_accept_partnership():
    # Create a test influencer and brand
    influencer = Influencer(name="Test Influencer", preferences={"category": "Fashion"})
    brand = Brand(name="Test Brand", category="Fashion")

    # Create a test partnership
    partnership = Partnership(influencer_id=influencer.id, brand_id=brand.id)

    # Accept the partnership
    PartnershipManagementService.accept_partnership(partnership.id)

    # Check if the partnership is accepted
    assert partnership.status == "accepted"

def test_reject_partnership():
    # Create a test influencer and brand
    influencer = Influencer(name="Test Influencer", preferences={"category": "Fashion"})
    brand = Brand(name="Test Brand", category="Fashion")

    # Create a test partnership
    partnership = Partnership(influencer_id=influencer.id, brand_id=brand.id)

    # Reject the partnership
    PartnershipManagementService.reject_partnership(partnership.id)

    # Check if the partnership is rejected
    assert partnership.status == "rejected"
```