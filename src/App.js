import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { BODY_FONT_FAMILY, HEADING_FONT_FAMILY } from "./util/consts"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import PostJob from "./pages/PostJob"
import Dashboard from "./pages/Dashboard"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${BODY_FONT_FAMILY};
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${HEADING_FONT_FAMILY}
  }

  p {
    line-height: 1.5;
  }
`

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/post-job" component={PostJob} />
            <Route exact path="/dashboard" component={Dashboard} />
          </main>
        </Router>
        <GlobalStyle />
      </>
    )
  }
}
