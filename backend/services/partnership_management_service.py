```python
from models.partnership import Partnership
from models.influencer import Influencer
from models.brand import Brand
from db import db_session

class PartnershipManagementService:
    @staticmethod
    def accept_partnership(influencer_id, brand_id):
        partnership = Partnership(influencer_id=influencer_id, brand_id=brand_id)
        db_session.add(partnership)
        db_session.commit()

    @staticmethod
    def reject_partnership(influencer_id, brand_id):
        partnership = db_session.query(Partnership).filter_by(influencer_id=influencer_id, brand_id=brand_id).first()
        if partnership:
            db_session.delete(partnership)
            db_session.commit()

    @staticmethod
    def get_partnerships(influencer_id):
        partnerships = db_session.query(Partnership).filter_by(influencer_id=influencer_id).all()
        return [partnership.brand_id for partnership in partnerships]
```