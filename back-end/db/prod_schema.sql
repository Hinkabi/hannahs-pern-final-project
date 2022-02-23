DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    image TEXT,
    description TEXT,
    color TEXT,
    price INTEGER,
    rating INTEGER,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN
    
);