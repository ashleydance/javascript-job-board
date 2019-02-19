import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { BODY_FONT_FAMILY } from './util/consts'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PostJob from './pages/PostJob';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Main>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="post-job" component={PostJob} />
        </Main>
      </Router>
    )
  }
}

const Main = styled.main`
  font-family: ${BODY_FONT_FAMILY};
`
