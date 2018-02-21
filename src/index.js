import App from './components/app';
import { h, render } from 'preact';
import { default as renderToString } from 'preact-render-to-string';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Raleway:300i');

html, body {
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	background: #FAFAFA;
	font-family: 'Avenir Next', 'Helvetica Neue', arial, sans-serif;
	font-weight: 400;
	color: #444;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

* {
	box-sizing: border-box;
}

#app {
	height: 100%;
}

a {
	color: #0971b2;
	text-decoration: none;
	display: inline-block;
}

a:hover {
	color: #1485CC;
}

a:hover:after {
	width: 100%;
}

a:after {
	width: 0px;
	transition: width ease 300ms;
	height: 2px;
	background: #1485CC;
	content: '';
	display: block;
}
.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.5em
}

.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif
}

.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none
}

.resp-sharing-button--twitter {
  background-color: #55acee
}

.resp-sharing-button--twitter:hover {
  background-color: #2795e9
}

.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}

`;

if (typeof window === undefined) {
	/* eslint-disable */
	const sheet = new ServerStyleSheet();
	const html = renderToString(sheet.collectStyles(<App />));
	const styleTags = sheet.getStyleTags();
	/* eslint-enable */
}
if (typeof window !== 'undefined') {
	OfflinePluginRuntime.install();
	render((
		<App />
	), document.getElementById('root'));
}
