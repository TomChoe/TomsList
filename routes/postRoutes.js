const postRouter = require('express').Router();

const postsController = require('../controllers/postsController');

const catController = require('../controllers/catController');

const views = require('../controllers/viewsController')

postRouter.get('/', postsController.index, views.showPosts);

postRouter.post('/new', postsController.createPost, views.createForm);

postRouter.get('/:id', postsController.getPost, views.showPost);

postRouter.put('/:id/edit', postsController.updatePost, views.updatePost);

postRouter.delete('/:id', postsController.deletePost);


/*postRouter.get('/:id/edit', catController.index, views.showPost)
postRouter.get('/new', catController.index, views.createForm);

postRouter.route('/:id')
	.get(postsController.getPost)
	.put(postsController.updatePost)
	.delete(postsController.deletePost);

postRouter.route('/')
	.get(postsController.index, views.showPosts)
	.post(postsController.createPost, views.postCreate); */

module.exports = postRouter;