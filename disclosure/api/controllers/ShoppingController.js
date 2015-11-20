/**
 * ShoppingController
 *
 * @description :: Server-side logic for managing shoppings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.render('pages/shopping', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	}
};
