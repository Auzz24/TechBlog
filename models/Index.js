// const Post = require('./Post');
const User = require('./User');
const Post = require('./Posts');

// User.hasMany(Post, {
//     foreignKey: 'user_id'
//   });

//   Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });

  module.exports = { User, Post};