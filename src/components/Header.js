import React from 'react'
import styled from 'styled-components'
import { HEADING_FONT_FAMILY } from '../util/consts'

export default function Header () {
  return (
    <HeaderWrapper>
      <ul>
        <li><a href="https://google.com">Post Job</a></li>
        <li><a href="https://google.com">Sign Up</a></li>
        <li><a href="https://google.com">Log in</a></li>
      </ul>
      <Title>JavaScript Jobs <span role="img" aria-label="computer">💻</span></Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 4em;
  border-top: solid 5px #f7df1e;
  text-align: center;
`;

const Title = styled.h1`
  color: #222;
  font-size: 40px;
  font-family: ${HEADING_FONT_FAMILY};
`
