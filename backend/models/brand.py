```python
from sqlalchemy import Column, Integer, String
from .db import Base

class Brand(Base):
    __tablename__ = 'brands'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    category = Column(String)
    description = Column(String)

    def __init__(self, name, category, description):
        self.name = name
        self.category = category
        self.description = description
```