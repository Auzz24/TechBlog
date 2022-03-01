const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'njvcnjkbsfnbf vn vmkvmd d vldkv dl vdl llll',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'bdj bvjsdbvdj',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'csjcskcsncsk cnksnksns kdskks ',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'cnjnjkcnsk dsjdkj dka d',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'cnxjckncsk sndks nskd sk',
    user_id: 1,
    post_id: 5
  },
  {
    comment_text: 'jcvbscjkvdk fjfkj fow',
    user_id: 5,
    post_id: 6
  }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
