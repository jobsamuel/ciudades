var React = require('react')
,	mui = require('material-ui')
,	Municipios = require('./municipios')
,	Parroquias = require('./parroquias')
,	venezuela = require('../venezuela.json')
,	RaisedButton = mui.RaisedButton;

var Venezuela = React.createClass({
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
		console.log(this.state.n);
		return (
			<div className="cities-main-container">
			 	<div>
			 		<h1>{this.props.data[this.state.n].capital}</h1>
			 		<h2>{this.props.data[this.state.n].estado}</h2>
			 		<RaisedButton 
			 			className="cities-primary-button" 
			 			label="Anterior" 
			 			onClick={this.goBack} 
			 			primary={true} />
					<RaisedButton 
						className="cities-primary-button" 
						label="Siguiente" 
						onClick={this.goForward} 
						secondary={true}/>
				</div>
				<Municipios data={this.props.data[this.state.n].municipios} />
				<Parroquias data={this.props.data[this.state.n].municipios} />
			</div>
		)
	}
});

React.render(
	<Venezuela data={venezuela} />, 
	document.getElementById('content')
);