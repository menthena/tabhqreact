'use strict';

var mongoose = require('mongoose');

var componentSchema = {
	componentType: String,
	data: {}
};

var sectionSchema = {
	title: String,
	order: Number,
	template: String,
	components: [componentSchema]
};

var categorySchema = {
	title: String,
	order: Number,
	sections: [sectionSchema]
};

module.exports = mongoose.model('Category', categorySchema);
