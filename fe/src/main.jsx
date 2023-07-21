import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
)
