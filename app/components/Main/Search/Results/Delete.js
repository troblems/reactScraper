// Include React
var React = require('react');

// Helper!
var helpers = require('../../../utils/helpers');

var ListItem = React.createClass
({

  getInitialState: function()
  {
    return
    {
      show: true
    }
  },

  // Respond to click
  handleClick: function(event)
  {
    // Sending to DB
    helpers.deleteSaved(this.props.id)
      .then(function(res)
      {
        if (res.status === 'deleted')
        {
          // Render is false
          this.setState({show: false});
        } else
        {
          // Show message
          this.props.deleted('error');
        }
      }.bind(this));
  },

	// Render function
	render: function(){

		return(
      <div>
        {this.state.show === true ?
          <li className="list-group-item">
            <h3>
            	<em>{this.props.title}</em>
            	<div className="btn-group pull-right">
            		<button className="btn btn-primary" data-toggle="modal" onClick={this.handleClick}>Delete</button>
            		<a className="btn btn-default" href={this.props.url} target="_blank">
            			View Article
            		</a>
            	</div>
            </h3>
            <p>Date Published: {this.props.date}</p>
          </li>
         : null}
      </div>

		)
	}
});

// Aaaaand Export
module.exports = ListItem;
