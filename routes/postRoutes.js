const postRouter = require('express').Router();

const postsController = require('../controllers/postsController');

const catController = require('../controllers/catController');

const users = require('../controllers/usersController');

const views = require('../controllers/viewsController')

postRouter.use(users.isLoggedIn);

postRouter.get('/', postsController.index, views.showPosts);

postRouter.get('/categories/:id', catController.index, postsController.getPostsByCat, views.showPostsByCat)

postRouter.get('/logout', users.logOut);

postRouter.get('/profile', postsController.getUserPosts, views.showProfile);

postRouter.get('/new', catController.index, views.createForm)

postRouter.post('/new', postsController.createPost, views.postCreate);

postRouter.get('/:id', postsController.getPost, views.showPost);

postRouter.get('/:id/edit', catController.index, postsController.getPost, views.updatePost)

postRouter.put('/:id', postsController.updatePost, views.postUpdate, views.show404);

postRouter.delete('/:id', postsController.deletePost, views.postDelete);

module.exports = postRouter;