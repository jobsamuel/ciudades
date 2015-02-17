var React = require('react')
,	mui = require('material-ui')
,	Paper = mui.Paper
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
					<h2>{total}</h2>
				)
			} else {
				var total = data.map(function (municipio) {
					return municipio.parroquias.map(function (parroquia) {
						return (
							<h4>{parroquia}</h4>
						)
					})
				});
				return (
		      		<Paper zDepth={1}>{total}</Paper>
				)
			}
		};
		return (
			<div className="cities-details">
    			<FlatButton 
    				className="cities-secondary-button" 
    				label="Parroquias" 
    				onClick={this.details} />
				{overview(this.state.p, this.props.data)}
			</div>	
		)
	}
});

module.exports = Parroquias;