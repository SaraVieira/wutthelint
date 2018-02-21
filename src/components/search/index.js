import { h, Component } from 'preact';
import styled from 'styled-components';
import { route } from 'preact-router';

const Input = styled.input`
	width: 100%;
	height: 100%;
	display: block;
	border: 1px solid #ccc;
	padding: 7px 14px 9px;
	transition: 0.4s;
	font-family: 'Avenir Next', 'helvetica', arial;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 1.2px;
	font-size: 14px;

	&:focus {
		outline: none;
	}

	&:focus ~ span:before,
	&:focus ~ span:after {
		width: 100%;
		transition: 0.2s;
		transition-delay: 0.6s;
	}

	&:focus ~ span:after {
		transition-delay: 0.2s;
	}

	&:focus ~ span i:before,
	&:focus ~ span i:after {
		height: 100%;
		transition: 0.2s;
	}

	&:focus ~ span i:after {
		transition-delay: 0.4s;
	}

	& ~ span:before,
	& ~ span:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 0;
		height: 2px;
		background-color: #c62727;
		transition: 0.2s;
		transition-delay: 0.2s;
	}

	& ~ span:after {
		top: auto;
		bottom: 0;
		right: auto;
		left: 0;
		transition-delay: 0.6s;
	}

	& ~ span {
		i {
			&:before,
			&:after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 2px;
				height: 0;
				background-color: #c62727;
				transition: 0.2s;
			}

			&:after {
				left: auto;
				right: 0;
				top: auto;
				bottom: 0;
				transition-delay: 0.4s;
			}
		}
	}

	& ~ :after {
		top: auto;
		bottom: 0;
		right: auto;
		left: 0;
		transition-delay: 0.6s;
	}
`;

const InputWrapper = styled.div`
	position: relative;
	max-width: 80%;
	margin: auto;
	width: 350px;
	height: 40px;
	margin-bottom: 24px;
`;

const Label = styled.label`
	text-indent: -99999px;
	position: absolute;
`;

class Search extends Component {
	changeRoute(e) {
		const value = e.target.value;

		if (value.length > 1) {
			route(`/search/${value}`);
		}

		if (!value.length) {
			route(`/`);
		}
	}

	getURL() {
		if (typeof window !== 'undefined') {
			const path = window.location.pathname.split('/');

			if (path.length === 3) {
				return path[2];
			}
		}
	}

	render() {
		return (
			<InputWrapper>
				<Label for="linter">Search for a linter...</Label>
				<Input
					onInput={this.changeRoute}
					onBlur={this.changeRoute}
					type="text"
					value={this.getURL()}
					placeholder="Search for a linter..."
					id="linter"
				/>
				<span class="focus-border">
					<i />
				</span>
			</InputWrapper>
		);
	}
}

export default Search;
