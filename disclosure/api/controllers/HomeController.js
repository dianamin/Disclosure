/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.render('pages/home', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	},

	wishlist: function(req, res) {
		res.render('pages/wishlist', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	}
};
