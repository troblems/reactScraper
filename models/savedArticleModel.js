// require mongoose
var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// Schema
var SavedArticleSchema = Schema
({
	title:
  {
		type: String,
		required: true
	},
	date:
  {
		type: String,
		required: true
	},
	url:
  {
		type: String,
		required: true,
		unique: true // Check for dupes
	}
});

var SavedArticle = mongoose.model('SavedArticle', SavedArticleSchema);

// export!
module.exports = SavedArticle;
