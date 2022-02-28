const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage',{
		title: 'Crypto the new Dollar',
		post_url: 'https://crypto.com',
		id: 4,
		created_at: new Date(),
		user: {
			username: 'ashBrownie'
  }
});
});

module.exports = router; 