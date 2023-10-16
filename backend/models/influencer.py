```python
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from db import Base

class Influencer(Base):
    __tablename__ = 'influencers'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    profile = Column(Text, nullable=False)
    preferences = Column(Text, nullable=True)
    brand_affiliations = relationship("Partnership", back_populates="influencer")

    def __init__(self, name, profile, preferences=None):
        self.name = name
        self.profile = profile
        self.preferences = preferences

    def __repr__(self):
        return f"Influencer(id={self.id}, name={self.name}, profile={self.profile}, preferences={self.preferences})"
```