const db = require('../config/connection');

module.exports = {
	createUser(user) {
		return db.one(`INSERT INTO users (name, username, password)
					   VALUES ($[name], $[username], $[password])
					   RETURNING *`, user)
	},

	findUser(user) {
		return db.any('SELECT * FROM users')
	}
}