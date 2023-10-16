```python
from flask import Blueprint, request, jsonify
from backend.services.brand_matching_service import get_matching_brands

brand_matching_controller = Blueprint('brand_matching_controller', __name__)

@brand_matching_controller.route('/brand-matching', methods=['POST'])
def brand_matching():
    data = request.get_json()
    influencer_id = data.get('influencer_id')
    if not influencer_id:
        return jsonify({'error': 'Missing influencer_id'}), 400

    try:
        matching_brands = get_matching_brands(influencer_id)
        return jsonify({'matching_brands': matching_brands}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
```