var React = require('react')
,	mui = require('material-ui')
,	FlatButton = mui.FlatButton;

var Parroquias = React.createClass({
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
					<h3>{total}</h3>
				)
			} else {
				var total = data.map(function (municipio) {
					return municipio.parroquias.map(function (parroquia) {
						return (
							<li>{parroquia}</li>
						)
					})
				});
				return (
		      		<ul>{total}</ul>
				)
			}
		};
		return (
			<div>
    			<FlatButton label="Parroquias" onClick={this.details}></FlatButton>
				{overview(this.state.p, this.props.data)}
			</div>	
		)
	}
});

module.exports = Parroquias;