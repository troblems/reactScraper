// Include React
var React = require('react');

// Helper!
var helpers = require('../../../utils/helpers');

var ListItem = React.createClass
({

  // Responding to click
  handleClick: function(event)
  {
    // Sending to DB
    helpers.saveArticle
    ({
      title: this.props.title,
      date: this.props.date,
      url: this.props.url
    }).then(function(res)
    {
      this.props.saved(res.status);
    }.bind(this));
  },

	// Render!
	render: function(){

		return(
			<li className="list-group-item">
        <h3>
        	<em>{this.props.title}</em>
        	<div className="btn-group pull-right">
        		<button className="btn btn-primary" onClick={this.handleClick}>Save</button>
        		<a className="btn btn-default" href={this.props.url} target="_blank">
        			View Article
        		</a>
        	</div>
        </h3>
        <p>Date Published: {this.props.date}</p>
      </li>
		)
	}
});

// Export!
module.exports = ListItem;
