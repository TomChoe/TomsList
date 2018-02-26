const postRouter = require('express').Router();

const postsController = require('../controllers/postsController');

const views = require('../controllers/viewsController')

postRouter.get('/', postsController.index, views.showPosts);

//postRouter.post('/:', postsController.create)

postRouter.get('/:id', postsController.getPost);



module.exports = postRouter;