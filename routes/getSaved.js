// Require savedArticleModel
var SavedArticle = require('../models/savedArticleModel');

module.exports = function(req, res)
{
  SavedArticle
    .find()
    .exec(function(err,data)
    {
      if (err)
    {
      res.json({status: 'error'})
    } else
    {
      res.json(data)
    }
  })
}
