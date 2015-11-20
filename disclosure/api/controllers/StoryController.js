/**
 * StoryController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Guid = require('guid');

module.exports = {
	create: function(req, res) {
		Guid.create();
		var data = {
			id: Guid.raw(),
			user_id: req.data.user_id,
			description: req.data.description,
			picture: req.data.picture,
			likes: 0
		};

		Story.create(data).exec(function(err, model) {
			if(err)
				console.log(err);
			res.send(model);
		});
	},

	like: function(req, res) {
		var id = req.param('id');

		Story.findOne().where({id: id}).exec(function(error, story) {
			if(error)
				console.log(error);
			story.likes++;
		});
	},

	get: function(req, res) {
		var userId = req.param('user_id');

		Story.find().where({user_id: userId}).exec(function(error, models) {
			if(error)
				console.log(error);
			res.send(models);
		});
	}
};
