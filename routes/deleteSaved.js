// Require savedArticleModel
var SavedArticle = require('../models/savedArticleModel');

module.exports = function(req, res)
{
  SavedArticle
    .remove({_id: req.params.id})
    .exec(function(err,data)
  {
      if (err)
    {
      res.json({status: 'error'})
    } else {
      res.json({status: 'deleted'})
    }
  })
}
