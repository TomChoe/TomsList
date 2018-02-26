DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS usersdata;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	username VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE usersdata (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	cat_id INTEGER REFERENCES categories(id),
	price INTEGER,
	content TEXT,
	location
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	catname VARCHAR(255)
);

CREATE INDEX ON users (username);
CREATE INDEX ON usersdata (user_id);
