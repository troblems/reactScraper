// Include React
var React = require('react');

// Include React Components
var SaveItem = require('./Results/Save');

var Results = React.createClass({

	render: function()
  {

		return
    (
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-primary">

						<div className="panel-heading">
							<h1 className="panel-title">
								<strong><i className={this.props.fa} aria-hidden="true"></i><span> {this.props.text}</span></strong>
							</h1>
						</div>

						<div className="panel-body">
						  <ul className="list-group">

						  	{this.props.children}

					    </ul>
						</div>

					</div>
				</div>
			</div>
		)
	}
});

module.exports = Results;
