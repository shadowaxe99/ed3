```python
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    DATABASE_URL = os.getenv('DATABASE_URL')
    REACT_APP_API_URL = os.getenv('REACT_APP_API_URL')
```