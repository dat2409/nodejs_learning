const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, min: 5, max: 255},
    description: {type: String, min: 5, max: 1000},
    image: {type: String},
    slug: String,
    videoId: {type: String, required: true},
    level: String,
    slug: { type: String, slug: "name", unique: true } //slug: "name" => slug được generated từ name
}, {
    timestamps: true,
})

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true,
});

module.exports = mongoose.model('Course', Course);