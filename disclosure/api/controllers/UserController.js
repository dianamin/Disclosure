/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		User.find().exec(function(err, users) {
			if(err)
				console.log(err);
			res.send(users);
		});
	},

	get: function(req, res) {
		var id = req.param('id');
		User.findOne({id: id}).exec(function(err, user){
			if(err)
				console.log(err);
			res.send(user);
		});
	}
};
