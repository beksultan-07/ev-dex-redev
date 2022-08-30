import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components';
const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body{
    font-family: "Roboto", sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  ul,
  ol {
    list-style: none;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  button{
    padding: 0;
  }
  a{
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
	document.getElementById('root')!,
);
root.render(
	<React.StrictMode>
		<GlobalStyles/>
		<App />
	</React.StrictMode>,
);
