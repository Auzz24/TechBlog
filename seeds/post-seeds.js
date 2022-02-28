const sequelize = require('../config/connection');
const {Post} = require('../models');

const postdata = [
    {
        title:'Austins GitHub is popping!', 
        post_url:'https://github.com/Auzz24', 
        user_id: 1, 
    },
    {
        title: 'Crypto the new Dollar',
		post_url: 'https://crypto.com',
		id: 4,
    }
];


const seedPost = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedPost;