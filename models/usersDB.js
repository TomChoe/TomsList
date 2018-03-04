const db = require('../config/connection');

module.exports = {
	createUser(user) {
		return db.one(`INSERT INTO users (name, username, email, password)
					   VALUES ($/name/, $/username/, $/email/, $/password/)
					   RETURNING *`, user)
	},

	findUserEmail(user) {
		return db.one(`SELECT username, email FROM users
					   JOIN usersdata
					   ON usersdata.user_id = users.id
					   WHERE usersdata.id = $1`, user)
	},

	authenticateByUsername(username) {
		return db.one('SELECT * FROM users WHERE username = $/username/ AND password = $/password/', username)
	}
}