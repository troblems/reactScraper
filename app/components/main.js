// Include React
var React = require('react');

// ...And components!
var Nav = require('./Main/Nav');
var Jumbotron = require('./Main/Jumbotron');

// Helper function
var helpers = require('./utils/helpers');

var Main = React.createClass({

	// Render aforementioned function
	render: function(){

		return(
			<div className="main-container">
				<div className="container">

					<Nav />
					<Jumbotron />

					{/*This code will drop Child*/}
					{this.props.children}

				</div>
			</div>
		)
	}
});

// Export!
module.exports = Main;
