import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./Navbar";
import {createGlobalStyle} from 'styled-components';

import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
html,
body{
  margin: 0;
  padding: 0;

}

body{
  font-family: Roboto, sans-serif;
  
}
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }


`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();