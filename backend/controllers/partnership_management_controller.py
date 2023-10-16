```python
from flask import Blueprint, request, jsonify
from ..services.partnership_management_service import acceptPartnership, rejectPartnership

partnership_management_controller = Blueprint('partnership_management_controller', __name__)

@partnership_management_controller.route('/partnership/accept', methods=['POST'])
def accept_partnership():
    data = request.get_json()
    influencer_id = data.get('influencer_id')
    brand_id = data.get('brand_id')
    result = acceptPartnership(influencer_id, brand_id)
    return jsonify(result), 200

@partnership_management_controller.route('/partnership/reject', methods=['POST'])
def reject_partnership():
    data = request.get_json()
    influencer_id = data.get('influencer_id')
    brand_id = data.get('brand_id')
    result = rejectPartnership(influencer_id, brand_id)
    return jsonify(result), 200
```