const db = require('../config/connection');

module.exports = {
	findAll() {
		return db.any('SELECT * FROM usersdata ORDER BY id')
	},

	findPostId(id) {
		return db.one(`SELECT *
					   FROM usersdata
					   WHERE id = $1`, id)
	},

	findPostsByCat(catId) {
		return db.any(`SELECT * FROM categories
					   JOIN usersdata
					   ON usersdata.cat_id = categories.id
					   WHERE categories.id = $1`, catId)
	},

	findPostsByUser(user) {
		return db.any(`SELECT * FROM users
					   JOIN usersdata
					   ON usersdata.user_id = users.id
					   WHERE users.id = $1`, user)
	},

	savePost(post) {
		return db.one(`INSERT INTO usersdata (user_id, cat_id, title, price, content, imgurl, location)
					   VALUES ($/user_id/, $/cat_id/, $/title/, $/price/, $/content/, $/imgurl/, $/location/)
					   RETURNING *`, post);
	},

	update(post) {
		return db.one(`UPDATE usersdata SET
					   cat_id = $/cat_id/,
					   title = $/title/,
					   price = $/price/,
					   content = $/content/,
					   imgurl = $/imgurl/,
					   location = $/location/
					   WHERE id = $/id/
					   RETURNING *`, post)
	},

	delete(id) {
		return db.none('DELETE FROM usersdata WHERE id =$1', id)
	}
}