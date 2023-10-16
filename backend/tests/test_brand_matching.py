```python
import pytest
from models.influencer import Influencer
from models.brand import Brand
from services.brand_matching_service import getMatchingBrands

def setup_module(module):
    # Setup for the tests
    global influencer
    global brand1, brand2, brand3

    influencer = Influencer("Influencer1", "Fashion")
    brand1 = Brand("Brand1", "Fashion")
    brand2 = Brand("Brand2", "Fashion")
    brand3 = Brand("Brand3", "Tech")

def test_get_matching_brands():
    # Test the getMatchingBrands function
    matching_brands = getMatchingBrands(influencer)

    assert brand1 in matching_brands
    assert brand2 in matching_brands
    assert brand3 not in matching_brands

def teardown_module(module):
    # Teardown for the tests
    del influencer
    del brand1, brand2, brand3
```