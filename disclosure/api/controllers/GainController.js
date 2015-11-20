/**
 * GainController
 *
 * @description :: Server-side logic for managing gains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Guid = require('guid');

module.exports = {

	index: function(req, res) {
		Guid.create();
		var id = req.param('id');
		var amount = req.param('amount');

		User.findOne({id: id}).exec(function(error, user) {
			if(error)
				console.log(error);
			user.budget += parseFloat(amount);
			user.save(function(err, user) {
					Transaction.create({id: Guid.raw(), amount: parseFloat(amount)}).exec(function(err, tr) {
							res.send(tr);
					});

			});

		});
	},
	add: function(req, res) {
			res.render('pages/gain', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	}

};
