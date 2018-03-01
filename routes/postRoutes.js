const postRouter = require('express').Router();

const postsController = require('../controllers/postsController');

const catController = require('../controllers/catController');

const users = require('../controllers/usersController');

const views = require('../controllers/viewsController')

postRouter.use(users.isLoggedIn);

postRouter.get('/', postsController.index, views.showPosts);

postRouter.get('/new', catController.index, views.createForm)

postRouter.post('/new', postsController.createPost, views.postCreate);

postRouter.get('/:id', postsController.getPost, views.showPost);

postRouter.get('/:id/edit', catController.index, postsController.getPost, views.updatePost)

postRouter.put('/:id', postsController.updatePost, views.postUpdate, views.show404);

postRouter.delete('/:id', postsController.deletePost, views.postDelete);

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