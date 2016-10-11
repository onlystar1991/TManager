var mongoose = require('mongoose');

var checklistSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

var CheckList = mongoose.model('CheckList', checklistSchema);

module.exports = {
    CheckList: CheckList
};