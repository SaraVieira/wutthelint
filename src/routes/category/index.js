import { h, Component } from 'preact';
import styled from 'styled-components';
import { getLintersByCategory } from '../../lib//api';
import Linter from '../../components/linter/index';
import { FadeInUp } from 'animate-css-styled-components';

const CategoryWrapper = styled.main`
	width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export default class Category extends Component {
	state = {
		linters: null
	};

	getLinters(category) {
		getLintersByCategory(category).then(linters => this.setState({ linters }));
	}

	// gets called when this route is navigated to
	componentDidMount() {
		const category = this.props.category;
		this.getLinters(category);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ category }, { linters }) {
		return (
			<CategoryWrapper>
				<h1>{category.toLowerCase()} linters:</h1>
				<ul>
					{linters &&
						linters.map(linter => (
							<FadeInUp duration="0.8s">
								<Linter linter={linter} />
							</FadeInUp>
						))}
				</ul>
			</CategoryWrapper>
		);
	}
}
