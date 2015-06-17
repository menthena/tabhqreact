var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var categorySchema = require('../schemas/CategorySchema');
var categoriesModel = mongoose.model('categories', categorySchema);

router.get('/', function (req, res, next) {
	var sendResponse = function (err, categories) {
		res.send({ data: categories });
	};

	if (req.query.includes === 'sections') {
		categoriesModel.find({}, sendResponse);
	}
	else {
		categoriesModel.find({}).select('_id title order').exec(sendResponse);
	}
});

router.get('/:id', function (req, res, next) {
	var sendResponse = function (err, categories) {
		if (err) {
			res.status(404);
			res.send({ message: 'Not found'});
		}

		res.send({ data: categories });
	};

	if (req.query.includes === 'sections') {
		categoriesModel.findById(req.params.id, sendResponse);
	}
	else {
		categoriesModel.findById(req.params.id).select('_id title order').exec(sendResponse);
	}
});

router.delete('/:id', function (req, res, next) {

	categoriesModel.remove({ _id: req.params.id }, function(err) {
		if (err) {
			res.status(422);
			res.send({ message: 'Bad request'});
		}
		else {
			res.status(204);
			res.send({});
		}
	});
});

router.delete('/:id/sections/:section_id', function (req, res, next) {

	var categoryId = req.params.id;
	var sectionId = req.params.section_id;

	categoriesModel.findOneAndUpdate({ _id: new ObjectId(categoryId) }, { $pull: { sections: { _id: new ObjectId(sectionId) }}}, function(err, category) {
		if (err) {
			res.status(422);
			res.send({ message: 'Bad request'});
		}
		else {
			res.status(204);
			res.send({});
		}
	});
});


module.exports = router;
