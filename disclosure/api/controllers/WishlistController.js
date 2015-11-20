/**
 * WishlistController
 *
 * @description :: Server-side logic for managing wishlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Guid = require('guid');

module.exports = {
	index: function(req, res) {
		res.render('pages/wishlist', {_layoutFile: '../shared/home_layout.ejs', user: req.user});
	},

	create: function(req, res) {
		Guid.create();
		var data = {
			id: Guid.raw(),
			user_id: req.body.user_id,
			product_id: req.body.product_id,
			price: req.body.price,
			priority: req.body.priority
		};

		Wish.create(data).exec(function(error, model) {
			if(error)
				console.log(error);
			res.send(model);
		});
	},

	get: function(req, res) {
		Wish.find().where({user_id: req.user.id}).exec(function(req, models) {
			if(err)
				console.log(err);
			res.send(models);
		});
	}
};
