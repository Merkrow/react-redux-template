import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';



function run() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path='/' component={App}>
					<Route path='' component={} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('root')
	)
}

run();
