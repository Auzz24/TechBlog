const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'auzz24',
    email: 'auzz24@cbc.ca',
    password: 'password123'
  },
  {
    username: 'Ronboi',
    email: 'ron@sogou.com',
    password: 'password123'
  },
  {
    username: 'ijj5565',
    email: 'jman@last.fm',
    password: 'password123'
  },
  {
    username: 'msindependent',
    email: 'missey3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'jmr3525',
    email: 'jmr@imdb.com',
    password: 'password123'
  },
  {
    username: 'jmr3847',
    email: 'jmrfefewf@imdb.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;