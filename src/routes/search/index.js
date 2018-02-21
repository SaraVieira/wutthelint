import { h, Component } from 'preact';
import styled from 'styled-components';
import { FadeInUp } from 'animate-css-styled-components';
import { getLintersBySearch } from '../../lib/api';
import Linter from '../../components/linter/index';
import Loading from '../../components/loading/index';

const CategoryWrapper = styled.main`
	width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export default class SearchRoute extends Component {
	state = {
		linters: null
	};

	getLinters(query) {
		getLintersBySearch(query).then(linters => this.setState({ linters }));
	}

	// gets called when this route is navigated to
	componentDidMount() {
		this.getLinters(this.props.query);
	}

	// gets when props change
	componentWillReceiveProps(nextProps) {
		this.getLinters(nextProps.query);
	}

	render({ query }, { linters }) {
		return (
			<CategoryWrapper>
				<h1>Results for {query.toLowerCase()}:</h1>
				<ul>
					{linters ? (
						linters.map(linter => (
							<FadeInUp duration="0.8s">
								<Linter linter={linter} />
							</FadeInUp>
						))
					) : (
						<Loading />
					)}
				</ul>
			</CategoryWrapper>
		);
	}
}
