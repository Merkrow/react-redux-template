import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({  }) => ({

})

const actions = Object.assign({}, );

const mapDispatchToProps = ({ dispatch }) => ({ actions: bindActionCreators(actions, dispatch) });

class App extends Component {
	constructor(props, context) {
		super(props);
		context.router;
	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

App.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);