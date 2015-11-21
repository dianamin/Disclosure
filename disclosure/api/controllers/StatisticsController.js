/**
 * StatisticsController
 *
 * @description :: Server-side logic for managing statistics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.render('pages/statistics', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	},

	get: function(req, res) {
		var id = req.param('id');

		Transaction.find().where({user_id: id}).exec(function(err, transactions){
			if(err)
				console.log(err);
			res.send(transactions);
		});
	}
};
