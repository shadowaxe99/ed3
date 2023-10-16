```python
import psycopg2
from psycopg2 import pool
from config import DATABASE_URL

class Database:
    __connection_pool = None

    @staticmethod
    def initialise():
        Database.__connection_pool = pool.SimpleConnectionPool(1, 10, DATABASE_URL)

    @staticmethod
    def get_connection():
        return Database.__connection_pool.getconn()

    @staticmethod
    def return_connection(connection):
        Database.__connection_pool.putconn(connection)

    @staticmethod
    def close_all_connections():
        Database.__connection_pool.closeall()

if __name__ == '__main__':
    Database.initialise()
```