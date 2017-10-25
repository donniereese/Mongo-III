const posts     = require('../controllers/postControllers');
const users     = require('../controllers/userControllers');
const comments  = require('../controllers/commentControllers');

module.exports = (app) => {
  // POST login for `user`
  app.route('/login')
  .post(users.login);

  // POST new `user`
  app.route('/new-user')
  .post(users.signup);

  // POST new `post`
  app.route('/new-post')
  .post(posts.newPost);

  // GET `posts` array
  app.route('/posts')
  .get(posts.getPosts);

  // GET `posts` by id
  app.route('/posts/:id')
  .get(posts.getById)
  // PUT `post` update by id
  .put(posts.updateById);

  /* * * * * * * * Extra Credit * * * * * * * */
  // GET `commetns` from `post` id
  app.route('/posts/:id/comments')
  .get(comments.getCommentsByPostId)
  .post(comments.newCommentForPostId);

  //You're Done!
};
