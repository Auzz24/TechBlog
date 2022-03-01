const sequelize = require('../config/connection');
const {Post} = require('../models');

const postdata = [
    {
        title:'Austins GitHub is popping!', 
        post_url:'https://github.com/Auzz24', 
        user_id: 1, 
    },
    {
        title:'Austins GitHub is popping!', 
        post_url:'https://github.com/Auzz24', 
        user_id: 2, 
    },
    {
        title:'Austins GitHub is popping!', 
        post_url:'https://github.com/Auzz24', 
        user_id: 3, 
    },
    {
        title:'Austins GitHub is popping!', 
        post_url:'https://github.com/Auzz24', 
        user_id: 4, 
    },
    {
        title:'Austins GitHub is popping!', 
        post_url:'https://github.com/Auzz24', 
        user_id: 5, 
    },
    {
        title: 'Crypto the new Dollar',
        post_url: 'https://crypto.com',
        user_id: 6,
    }
];


const seedPost = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedPost;