var React = require('react')
,	mui = require('material-ui')
,	venezuela = require('../venezuela.json')
,	RaisedButton = mui.RaisedButton
,	FlatButton = mui.FlatButton;

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
			<div className="venezuela">
			 	<div>
			 		<h1>{this.props.data[this.state.n].capital}</h1>
			 		<h2>{this.props.data[this.state.n].estado}</h2>
			 		<RaisedButton label="Anterior" onClick={this.goBack} primary={true} />
					<RaisedButton label="Siguiente" onClick={this.goForward} secondary={true}/>
				</div>
				<Municipios data={this.props.data[this.state.n].municipios} />
				<Parroquias data={this.props.data[this.state.n].municipios} />
			</div>
		)
	}
});

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

React.render(
	<Venezuela data={venezuela} />, 
	document.getElementById('content')
);