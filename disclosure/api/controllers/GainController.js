/**
 * GainController
 *
 * @description :: Server-side logic for managing gains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res) {
		var id = req.param('id');
		var amount = req.param('amount');

		User.findOne({id: id}).exec(function(error, user) {
			if(error)
				console.log(error);
			user.budget += parseInt(amount);
			user.save(function(err, user) {
					res.send(user);
			});

		});
	},
	add: function(req, res) {
			res.render('pages/gain', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	}

};
