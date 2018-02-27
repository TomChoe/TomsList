const db = require('../config/connection');

module.exports = {
	createUser(user) {
		return db.one(`INSERT INTO users (name, username, email, password)
					   VALUES ($/name/, $/username/, $/email/, $/password/)
					   RETURNING *`, user)
	},

	findUsers(user) {
		return db.any('SELECT * FROM users')
	}
}