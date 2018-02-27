const db = require('../config/connection');

module.exports = {
	getAll() {
		return db.any('SELECT * FROM categories')
	}
};