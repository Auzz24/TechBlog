const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');


router.get('/', (req, res) => {
  console.log(req.session);
  Post.findAll({
  //   attributes: [
  //     'title',
  //     'post_url',
  //     'id',
  //     'created_at'
  //   ],
  //   include:[
  //     {
  //     model: User,
  //     attributes:['username']
  //   }
  // ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));

    res.render('homepage', { posts });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router; 