```python
from flask import Flask, request, jsonify
from models.influencer import Influencer
from models.brand import Brand
from models.partnership import Partnership
from controllers.brand_matching_controller import BrandMatchingController
from controllers.partnership_management_controller import PartnershipManagementController
from db import db

app = Flask(__name__)
app.config.from_object('config')

db.init_app(app)

@app.route('/brand-matching', methods=['POST'])
def brand_matching():
    data = request.get_json()
    influencer = Influencer(**data)
    controller = BrandMatchingController(influencer)
    matching_brands = controller.get_matching_brands()
    return jsonify(matching_brands), 200

@app.route('/partnership-management', methods=['POST'])
def partnership_management():
    data = request.get_json()
    influencer = Influencer(**data['influencer'])
    brand = Brand(**data['brand'])
    partnership = Partnership(influencer, brand)
    controller = PartnershipManagementController(partnership)
    if data['action'] == 'accept':
        controller.accept_partnership()
    elif data['action'] == 'reject':
        controller.reject_partnership()
    return jsonify({'message': 'Success'}), 200

if __name__ == '__main__':
    app.run(debug=True)
```