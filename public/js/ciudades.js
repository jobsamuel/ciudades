var Estados = React.createClass({
	getInitialState: function() {
		return {n:0}
	},
	nextState: function() {
		if (this.state.n >= 23) {
			this.setState({n: 0});
		} else {
			this.setState({n: this.state.n + 1});
		}
		
	},
	render: function() {
		console.log(this.state.n);
		return (
			<div className="estados"> 
				<button type="button" onClick={this.nextState}> Siguiente </button>
				<h1>{this.props.data[this.state.n].estado}</h1>
				<Ciudades data={this.props.data[this.state.n].ciudades} />
				<Municipios data={this.props.data[this.state.n].municipios} />
			</div>
		);
	}
});

var Municipios = React.createClass({
	render: function() {
		var listaDeMunicipios = this.props.data.map(function (municipio) {
      		return (
      			<li> {municipio.municipio} </li>
      		);
    	});
    	return (
    		<div>
    			<h3> Municipios </h3>
		      	<ul className="listaDeMunicipios">
		        	{listaDeMunicipios}
		      	</ul>
	      	</div>	
	    );
	}
});

var Ciudades = React.createClass({
	validateCity: function(city) {
		if (city) {
			return city.map(function (ciudad) {
	      		return (
	      			<h5> {ciudad} </h5>
	      		);
    		});
		} else {
			return (
	      			<h5> N/A </h5>
	      		);
		}
	},
	render: function() {
		return (
			<div>
				<h3> Ciudades </h3>
				{this.validateCity(this.props.data)} 
			</div>	
		)
	}
});

$.ajax({
	url: "venezuela.json",
	dataType: 'json',
	success: function(data) {
		console.log(data);
	    React.render(<Estados data={data} />, 
	    	document.getElementById('content')
				);
	}.bind(this),
	error: function(xhr, status, err) {
		console.error(this.props.url, status, err.toString());
	}.bind(this)
});