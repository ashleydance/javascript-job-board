import React, { Component } from 'react';
import styled from 'styled-components'
import { BODY_FONT_FAMILY } from './util/consts'
import Header from './components/Header';
import Footer from './components/Footer';
import JobListings from './components/JobListings';

export default class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <JobListings />
        <Footer />
      </Main>
    )
  }
}

const Main = styled.main`
  font-family: ${BODY_FONT_FAMILY};
`
