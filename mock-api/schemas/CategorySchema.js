'use strict';

var mongoose = require('mongoose');
var sectionSchema = require('../schemas/SectionSchema');

var categorySchema = {
	title: String,
	order: Number,
	sections: [sectionSchema]
};

module.exports = mongoose.model('Category', categorySchema);
