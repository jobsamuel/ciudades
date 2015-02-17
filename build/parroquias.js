var React = require('react')
,	mui = require('material-ui')
,	Paper = mui.Paper
,	FlatButton = mui.FlatButton;

var Parroquias = React.createClass({displayName: "Parroquias",
	getInitialState: function(){
		return {p:false}
	},
	details: function() {
		this.setState({p: !this.state.p});
	},
	render: function() {
		var overview = function(state, data) {
			if (state === false) {
				var total = 0;
				data.map(function (municipio) {
					total += municipio.parroquias.length;
				})
				return (
					React.createElement("h2", null, total)
				)
			} else {
				var total = data.map(function (municipio) {
					return municipio.parroquias.map(function (parroquia) {
						return (
							React.createElement("h4", null, parroquia)
						)
					})
				});
				return (
		      		React.createElement(Paper, {zDepth: 1}, total)
				)
			}
		};
		return (
			React.createElement("div", {className: "cities-details"}, 
    			React.createElement(FlatButton, {
    				className: "cities-secondary-button", 
    				label: "Parroquias", 
    				onClick: this.details}), 
				overview(this.state.p, this.props.data)
			)	
		)
	}
});

module.exports = Parroquias;