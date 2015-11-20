/**
 * WishlistController
 *
 * @description :: Server-side logic for managing wishlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.render('pages/wishlist', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	}
};
