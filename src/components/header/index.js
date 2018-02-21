import { h } from 'preact';

import Search from '../search/index';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import git from '../../assets/git.svg';

const Nav = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px 0;
`;

const Logo = styled.img`
	width: 350px;
	max-width: 90%;
	display: block;
	margin: auto;
`;

const Link = styled.a`
	&:after {
		display: none;
	}
`;

const Tag = styled.h2`
	font-family: 'Raleway', sans-serif;
	font-weight: 200;
	text-align: center;
	margin-top: -8px;
	margin-bottom: 24px;
	font-size: 30px;
`;

const Social = styled.div`
	position: absolute;
	right: 48px;
	top: 20px;
	display: flex;
	align-items: center;

	& a:last-child {
		margin-left: 16px;
	}

	& a:after {
		display: none;
	}

	@media (max-width: 480px) {
		right: 20px;
	}
`;

const Header = () =>
	(<header>
		<Social>
			<a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=All%20the%20liniting%20you%20can%20get%20via%20%40NikkitaFTW&amp;url=http%3A%2F%2Flint.ninja" target="_blank" rel="noopener noreferrer" aria-label="">
				<div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" /></svg>
				</div>
				</div>
			</a>
			<a
				href="https://github.com/SaraVieira/wutthelint"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={git} alt="Github" />
			</a>
		</Social>
		<Nav>
			<Link href="/">
				<Logo src={logo} alt="lint ninja" />
			</Link>
		</Nav>
		<Tag>There's a linter for that!</Tag>
		<Search />
	</header>);

export default Header;
