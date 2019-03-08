import React from "react"
import styled from "styled-components"
import { YELLOW } from "../util/consts"
import Navigation from "./Navigation"

export default function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
      <Title>
        JavaScript Jobs{" "}
        <span role="img" aria-label="computer">
          💻
        </span>
      </Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 4em;
  border-top: solid 10px ${YELLOW};
  text-align: center;
`

const Title = styled.h1`
  color: #222;
  font-size: 40px;
`
