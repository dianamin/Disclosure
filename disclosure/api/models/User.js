/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'mySql',
  attributes: {
    id: {
      type: 'string',
      unique: true
    },
    name: {
      type: 'string'
    },
    photo: {
      type: 'string'
    },
    provider: {
      type: 'string'
    },
    budget: {
      type: 'float'
    }
  }
};
