/**
 * SpentController
 *
 * @description :: Server-side logic for managing spents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		var id = req.param('id');
		var amount = req.param('amount');

		User.findOne().where({id: id}).exec(function(error, user) {
			if(error)
				console.log(error);
			user.spent += parseInt(amount);
			user.budget -= parseInt(amount);
			user.save(function(err, user) {
					res.send(user);
			})

		});
	},

	add: function(req, res) {
		res.render('pages/spent', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	}
};
