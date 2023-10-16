```python
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .db import Base

class Partnership(Base):
    __tablename__ = 'partnerships'

    id = Column(Integer, primary_key=True)
    influencer_id = Column(Integer, ForeignKey('influencers.id'))
    brand_id = Column(Integer, ForeignKey('brands.id'))
    status = Column(String)

    influencer = relationship('Influencer', back_populates='partnerships')
    brand = relationship('Brand', back_populates='partnerships')

    def __init__(self, influencer_id, brand_id, status):
        self.influencer_id = influencer_id
        self.brand_id = brand_id
        self.status = status
```