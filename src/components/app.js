import { h, Component } from 'preact';
import { Router } from 'preact-router';
import styled from 'styled-components';

import Header from './header';
import Home from '../routes/home';
import SearchRoute from '../routes/search';
import Category from '../routes/category';

const Main = styled.main`
	min-height: 100vh
`

const Footer = styled.footer`
	text-align: center;
	margin-top: 40px;
`

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
			<Main>
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Category path="/category/:category" />
					<SearchRoute path="/search/:query" />
				</Router>
			</Main>
				<Footer>Ninja Icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Footer>
			</div>
		);
	}
}
