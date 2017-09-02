// Include React
var React = require('react');

// Include React Components
var Results = require('./Search/Results');
var DeleteItem = require('./Search/Results/Delete');
var Notification = require('./Search/Notification');

var helpers = require('../utils/helpers');

var SavedArticles = React.createClass({

	getInitialState: function()
  {
		return
    {
			results: [],
			modalIsOpen: false,
			type: "",
			message: ""
		}
	},

	componentWillMount: function()
  {
		// Retrieve saved articles
		helpers.getSaved()
			.then(function(data)
      {
				// console.log(data)
				if (data === false)
        {
					// Show message if unable to delete
					this.message('Error','Unable to find articles. Please try again.');
				} else
        {
					// Save data to state
					this.setState
          ({
						results: data
					});
				}
			}.bind(this))
	},

  openModal: function()
  {
    this.setState({modalIsOpen: true});
  },

  closeModal: function()
  {
    this.setState({modalIsOpen: false});
  },

  message: function(type,text)
  {

  	this.setState
    ({
  		type: type,
			message: text
		});
		this.openModal();
  },

  deleted: function(status)
  {
  	if (status === 'error')
    {
			this.message('Error',"Couldn't delete article.");
  	}
		return
  },

	render: function(){

		var deleted = this.deleted;

		return(
			<div>
				<Results fa="fa fa-download" text="Saved Articles">
		  		{this.state.results.map(function(result)
            {
			  		return (
			  			<DeleteItem
			  				key={result._id}
			  				id={result._id}
			  				title={result.title}
			  				url={result.url}
			  				date={result.date}
			  				deleted={deleted}
			  			/>
			  		)
			  	})}
			  </Results>
			  <Notification
			  	modalIsOpen={this.state.modalIsOpen}
			  	openModal={this.openModal}
			  	closeModal={this.closeModal}
			  	type={this.state.type}
			  	message={this.state.message} />
			</div>
		)
	}
});


module.exports = SavedArticles;
