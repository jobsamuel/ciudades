var React = require('react')
,	mui = require('material-ui')
,	Municipios = require('./municipios')
,	Parroquias = require('./parroquias')
,	venezuela = require('../venezuela.json')
,	RaisedButton = mui.RaisedButton;

var Venezuela = React.createClass({displayName: "Venezuela",
	getInitialState: function() {
		return {n:0}
	},
	goForward: function() {
		if (this.state.n >= (this.props.data.length - 1) ) {
			this.setState({n: 0});
		} else {
			this.setState({n: this.state.n + 1});
		}
	},
	goBack: function() {
		if (this.state.n == 0) {
			this.setState({n: this.props.data.length - 1});
		} else {
			this.setState({n: this.state.n - 1});
		}
	},
	render: function() {
		return (
			React.createElement("div", {className: "cities-main-container"}, 
			 	React.createElement("div", null, 
			 		React.createElement("h1", null, this.props.data[this.state.n].capital), 
			 		React.createElement("h2", null, this.props.data[this.state.n].estado), 
			 		React.createElement(RaisedButton, {
			 			className: "cities-primary-button", 
			 			label: "Anterior", 
			 			onClick: this.goBack, 
			 			primary: true}), 
					React.createElement(RaisedButton, {
						className: "cities-primary-button", 
						label: "Siguiente", 
						onClick: this.goForward, 
						secondary: true})
				), 
				React.createElement(Municipios, {data: this.props.data[this.state.n].municipios}), 
				React.createElement(Parroquias, {data: this.props.data[this.state.n].municipios})
			)
		)
	}
});

React.render(
	React.createElement(Venezuela, {data: venezuela}), 
	document.getElementById('content')
);