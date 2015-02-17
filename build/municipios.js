var React = require('react')
,	mui = require('material-ui')
,	Paper = mui.Paper
,	FlatButton = mui.FlatButton;

var Municipios = React.createClass({displayName: "Municipios",
	getInitialState: function(){
		return {m:false}
	},
	details: function() {
		this.setState({m: !this.state.m});
	},
	render: function() {
		var municipios = this.props.data.map(function (municipio) {
			return (
				React.createElement("h4", null, " ", municipio.municipio, " ")
			)
		});
		var overview = function(state, data) {
			if (state === false) {
				return (
					React.createElement("h2", null, " ", data.length, " ")
				)
			} else {
				return (
		      		React.createElement(Paper, {zDepth: 1}, " ", municipios, " ")
				)
			}
		};
    	return (
    		React.createElement("div", {className: "cities-details", zDepth: 1}, 
    			React.createElement(FlatButton, {
    				className: "cities-secondary-button", 
    				label: "Municipios", 
    				onClick: this.details}), 
    			overview(this.state.m, this.props.data)
    		)
	    );
	}
});

module.exports = Municipios;