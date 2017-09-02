// Dependencies!
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
// Dynamic Index
var IndexRoute	= require('react-router').IndexRoute;

// Reference components
var Main = require('./components/Main');
var Search = require('./components/Main/Search');
var Saved = require('./components/Main/SavedArticles');

// Renders according route page.
ReactDOM.render(
	<Router history={hashHistory}>

		{/*Component is the Main component*/}
		<Route path='/' component={Main}>

			{/* If user selects Child1, show appropriate component*/}
			<Route path='search' component={Search} />

			{/* If user selects Child2, show appropriate component*/}
			<Route path='saved' component={Saved} />

			{/*If user selects any other path, Home Route*/}
			<IndexRoute component={Search} />

		</Route>

	</Router>,
	document.getElementById('app')
)
