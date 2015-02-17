var React = require('react')
,	mui = require('material-ui')
,	Paper = mui.Paper
,	FlatButton = mui.FlatButton;

var Municipios = React.createClass({
	getInitialState: function(){
		return {m:false}
	},
	details: function() {
		this.setState({m: !this.state.m});
	},
	render: function() {
		var municipios = this.props.data.map(function (municipio) {
			return (
				<h4> {municipio.municipio} </h4>
			)
		});
		var overview = function(state, data) {
			if (state === false) {
				return (
					<h2> {data.length} </h2>
				)
			} else {
				return (
		      		<Paper zDepth={1}> {municipios} </Paper>
				)
			}
		};
    	return (
    		<div className="cities-details" zDepth={1}>
    			<FlatButton 
    				className="cities-secondary-button" 
    				label="Municipios" 
    				onClick={this.details} />
    			{overview(this.state.m, this.props.data)}
    		</div>
	    );
	}
});

module.exports = Municipios;