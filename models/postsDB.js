const db = require('../config/connection');

module.exports = {
	findAll() {
		return db.any('SELECT title FROM usersdata')
	},

	findPostId(id) {
		return db.one(`SELECT * FROM usersdata
					   WHERE id = $1`, id)
	}
}