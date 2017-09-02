// Include React
var React = require('react');

//Yuck
var Jumbotron = React.createClass({

	// Render!
	render: function(){

		return(
			<div className="jumbotron">
				<h2 className="text-center"><strong>React New York Times Scraper!</strong></h2>
				<h3 className="text-center">Search for anything that sparks your fancy.</h3>
			</div>
		)
	}
});

// Export!
module.exports = Jumbotron;
