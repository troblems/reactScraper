// Require savedArticleModel
var SavedArticle = require('../models/savedArticleModel');

module.exports = function(req, res) {

  // Create mongoose model
  var savedArticle = new SavedArticle
  ({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });
  // Save data
  savedArticle.save(function(err)
  {
    if (err)
    {
      res.json({status: 'error'})
    } else
    {
      res.json({status: 'saved'})
    }
  });

}
