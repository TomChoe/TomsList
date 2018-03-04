INSERT INTO categories (catname) VALUES
	('clothing'),
	('electronics'),
	('appliances'),
	('automobiles'),
	('misc');

INSERT INTO users (name, username, email, password) VALUES
	(
		'tom choe',
		'doodeitstom',
		'test@email.com',
		'1234'
	),
	(
		'test',
		'testytest',
		'test@yahoo.com',
		'test'
	);

INSERT INTO usersdata (user_id, cat_id, title, price, content, imgurl, location) VALUES
	(
		1,
		1,
		'For sale',
		50,
		'This is something for sale',
		'http://',
		'07650'
	);