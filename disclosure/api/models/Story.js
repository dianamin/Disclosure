/**
* Story.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'mySql',
  attributes: {
    id: {
      type: 'string',
      unique: true,
    },
    user_id: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    picture: {
      type: 'string'
    },
    likes: {
      type: 'integer'
    }
  }
};
