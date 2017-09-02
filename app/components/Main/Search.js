// I think we know what this is for now.
var React = require('react');

// Include React Components
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var SaveItem = require('./Search/Results/Save');
var Notification = require('./Search/Notification');

// Helper Function
var helpers = require('../utils/helpers');

var Search = React.createClass({

	// State for what is being searched for
	getInitialState: function()
  {
		return
    {
			search: "",
			start: "",
			end: "",
			same: false,
			results: [],
			modalIsOpen: false,
			type: "",
			message: ""
		}
	},

	// Responding to user input
	handleChange: function(event)
  {
  	var newState = {};
  	newState[event.target.id] = event.target.value;
  	newState['same'] = false;
  	this.setState(newState);

	},

	// Respond to user click
	handleClick: function(event)
  {

		if (this.state.same === false)
    {
			// Stop mutiple clicks
			this.setState({same: true});

			// Object of seach perams
			var terms =
      {
				search: this.state.search.trim(),
				start: this.state.start,
				end: this.state.end
			}

			// Checking for user error
			if (terms.search === "" || terms.start === "" || terms.end === "")
      {
				// Checking for empty searches
				this.message('Error','Tsk tsk. Did you put in an empty search? Silly.');
				return
			} else if (terms.start < 1851 || terms.start > 2017 || terms.end < 1951 || terms.end > 2017)
      {
				// Show message if out of range
				this.message('Error','The NYT is old, but not that old. Please stay between 1851 and 2017.');
				return
			}

			// Search for articles
			helpers.getArticles(terms)
				.then(function(data)
        {
					if (data === false)
          {
						// No results
						this.message('Error','No results found. Please refine inputs.');
					} else {
						// Save data to state
						this.setState({
							results: data
						});
					}
				}.bind(this))
		}
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
  	this.setState({
  		type: type,
			message: text
		});
		this.openModal();
  },

  saved: function(status)
  {
  	if (status === 'saved')
    {
			this.message('Successfully Saved','Click "Saved Articles" in navigation to review.');
  	} else
    {
			this.message('Error','You already saved this one!');
  	}
		return
  },
  
	render: function()
  {

		var saved = this.saved;

		return(
			<div>

			  <Query handleChange={this.handleChange} handleClick={this.handleClick} />
			  {this.state.results.length !== 0 ?
			  	<Results fa="fa fa-newspaper-o" text="Results">
			  		{this.state.results.map(function(result)
              {
				  		return (
				  			<SaveItem
				  				key={result._id}
				  				title={result.headline.main}
				  				url={result.web_url}
				  				date={result.pub_date}
				  				saved={saved}
				  			/>
				  		)
				  	})}
				  </Results> : null}
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

module.exports = Search;
