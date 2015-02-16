var React = require('react')
,	mui = require('material-ui')
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
				<li> {municipio.municipio} </li>
			)
		});
		var overview = function(state, data) {
			if (state === false) {
				return (
					<h3> {data.length} </h3>
				)
			} else {
				return (
		      		<ul> {municipios} </ul>
				)
			}
		};
    	return (
    		<div>
    			<FlatButton label="Municipios" onClick={this.details}></FlatButton>
    			{overview(this.state.m, this.props.data)}
    		</div>
	    );
	}
});

module.exports = Municipios;