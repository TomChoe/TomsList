const db = require('../config/connection');

module.exports = {
	createUser(user) {
		return db.one(`INSERT INTO users (name, username, email, password)
					   VALUES ($/name/, $/username/, $/email/, $/password/)
					   RETURNING *`, user)
	},

	findUser(username) {
		return db.one('SELECT username, password FROM users WHERE username = $1', username)
	},

	authenticateByUsername(username) {
		return db.one('SELECT * FROM users WHERE username = $/username/ AND password = $/password/', username)
	}
}