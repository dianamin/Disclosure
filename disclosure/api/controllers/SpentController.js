/**
 * SpentController
 *
 * @description :: Server-side logic for managing spents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Guid = require('guid');

module.exports = {
	index: function(req, res) {
		Guid.create();
		var id = req.param('id');
		var amount = req.param('amount');

		User.findOne().where({id: id}).exec(function(error, user) {
			if(error)
				console.log(error);
			user.spent += parseInt(amount);
			user.budget -= parseInt(amount);
			user.save(function(err, user) {
			Transaction.create({id: Guid.raw(),user_id: id,  amount: -1 * parseFloat(amount)}).exec(function(err, tr) {
					res.send(tr);
			});

			})

		});
	},

	add: function(req, res) {
		res.render('pages/spent', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	}
};
