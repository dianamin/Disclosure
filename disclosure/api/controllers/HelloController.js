/**
 * HelloController
 *
 * @description :: Server-side logic for managing helloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res) {
		res.render('pages/hello', {_layoutFile: '../shared/layout.ejs', user: req.user});
	},

	get: function(req, res) {
		User.find().exec(function(err, users) {
			res.send(users);
		});
	}
};
