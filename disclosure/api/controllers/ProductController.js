/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res) {
		res.render('pages/add_product', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	},
};
