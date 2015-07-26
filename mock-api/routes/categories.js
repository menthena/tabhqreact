'use strict';

var _ = require('underscore');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var Category = require('../models/Category');

var allowedSectionProps = ['title', 'order', 'template', 'components'];

router.get('/', function (req, res, next) {
	// TODO: REMOVE

	var data = [{
    'title': 'IT Guide',
    'extension': 'PDF',
    'url': 'http://google.com',
    'size': 2077912,
    'updated_at': '2014-12-10T13:48:35.808Z',
    'type' : 'file',
    'order': 0
  },
  {
    'title': 'Slack',
    'extension': 'PDF',
    'url': 'http://yahoo.com',
    'size': 207912,
    'updated_at': '2014-12-10T13:48:35.808Z',
    'type' : 'file',
    'order': 1
  },
  {
    'title': 'Slack Tips',
    'extension': 'PDF',
    'url': 'http://asd.com',
    'size': 20377912,
    'updated_at': '2014-12-10T13:48:35.808Z',
    'type' : 'file',
    'order': 2
  },
  {
    'title': 'Url 1',
    'extensions': 'PDF',
    'url': 'http://asd1.com',
    'size': 20377912,
    'updated_at': '2014-12-10T13:48:35.808Z',
    'type' : 'url',
    'order': 3
  },
  {
    'title': 'Url 2',
    'extension': 'PDF',
    'url': 'http://asd2.com',
    'size': 20377912,
    'updated_at': '2014-12-10T13:48:35.808Z',
    'type' : 'url',
    'order': 4
  },
  {
    'title': 'Url 3',
    'extension': 'PDF',
    'url': 'http://asd3.com',
    'size': 20377912,
    'updated_at': '2014-12-10T13:48:35.808Z',
    'type' : 'url',
    'order': 5
  }];

  var sections = [{
		'id': 1,
    'title' : 'test 2',
    'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>',
    'data' : data,
    'order': 1
  }, {
		'id': 2,
    'title' : 'test 3',
    'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>',
    'order': 2,
    'data' : []
  }, {
		'id': 3,
    'title' : 'test 4',
    'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>',
    'order': 3,
    'data' : []
  }, {
		'id': 4,
    'title' : 'test 5',
    'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>',
    'order': 4,
    'data' : []
  }];

  res.send({ data: [{
        'id': 1,
        'title': 'Home',
        'sections': [{
					'id': 0,
          'title': 'Home',
          'copy' : '<p><b>In this section, you can read and learn about our set of seven essential TAB Principles - including not only what they are, but where they\'ve come from.</b></p><p></p><p>It\'s useful to think of these TAB Principles as a set, or an ecosystem. &nbsp;Each of them was created to balance and complement the others, giving us a practical and well-rounded framework for steering every aspect of our work.</p><p>Toward the end of 2014, we created and defined these Principles together, in a series of workshops that incorporated both company-wide and focused, smaller group feedback. This process has ensured that the Principles we defined are what we believe - collectively - to be the most important to our work and culture here at TAB.</p><p><b>Please note: you can download the TAB Principles in deck form directly below.</b></p><p></p>',
          'order': 0,
          'data' : []
      }],
        'order': 0
      },{
        'id': 2,
        'title': 'Category 1',
        'sections': sections,
        'order': 1
      },{
        'id': 3,
        'title': 'Category 2',
        'sections': sections,
        'order': 2
      },{
        'id': 4,
        'title': 'Category 3',
        'sections': sections,
        'order': 3
      },{
        'id': 5,
        'title': 'Category 4',
        'sections': sections,
        'order': 4
      }]});
	return true;

	var sendResponse = function (err, categories) {
		res.send({ data: categories });
	};

	if (req.query.includes === 'sections') {
		Category.find({}, sendResponse);
	}
	else {
		Category.find({}).select('_id title order').exec(sendResponse);
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
		Category.findById(req.params.id, sendResponse);
	}
	else {
		Category.findById(req.params.id).select('_id title order').exec(sendResponse);
	}
});

router.patch('/:id', function (req, res, next) {
	var updatedModel = _(req.body).pick('title', 'order');

	Category.findOneAndUpdate({ _id: req.params.id }, updatedModel, function(err, cat) {
		if (err) {
			res.status(422);
			res.send({ message: 'Bad request'});
		}
		else {
			res.send({ data: cat });
		}
	});
});

router.patch('/:id/sections/:section_id', function (req, res, next) {
	var updatedModel = _(req.body).pick(allowedSectionProps);

	var keys = Object.keys(updatedModel),
      keysLen = keys.length,
      prefix = 'sections.$.';

  for (var i = 0; i<keysLen ; i++) {
    updatedModel[prefix+keys[i]] = updatedModel[keys[i]];
    delete updatedModel[keys[i]];
  }

	var categoryId = req.params.id;
	var sectionId = req.params.section_id;

	Category.findOneAndUpdate({ _id: categoryId, 'sections._id': sectionId }, updatedModel, function(err, cat) {
		if (err) {
			res.status(422);
			res.send({ message: 'Bad request'});
		}
		else {
			res.send({ data: cat });
		}
	});
});

router.post('/', function (req, res, next) {
	var newCategory = _(req.body).pick('title', 'order');

	Category.create(newCategory, function(err, cat) {
		if (err) {
			res.status(422);
			res.send({ message: 'Bad request'});
		}
		else {
			res.status(201).send({ data: cat });
		}
	});
});

router.post('/:id/sections', function (req, res, next) {
	var newSection = _(req.body).pick(allowedSectionProps);
	var categoryId = req.params.id;

	Category.findOneAndUpdate({ _id: categoryId }, { $push: { sections: newSection }}, function(err, cat) {
		if (err) {
			res.status(422);
			res.send({ message: 'Bad request'});
		}
		else {
			res.status(201).send({ data: cat });
		}
	});
});

router.delete('/:id', function (req, res, next) {

	Category.remove({ _id: req.params.id }, function(err) {
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

	Category.findOneAndUpdate({ _id: categoryId }, { $pull: { sections: { _id: sectionId }}}, function(err, category) {
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
