import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { HEADING_FONT_FAMILY, YELLOW, DARK_YELLOW } from "../util/consts"

const Wrapper = styled.button`
  padding: 15px 35px;
  background: ${YELLOW};
  font-family: ${HEADING_FONT_FAMILY};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: none;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${DARK_YELLOW};
  }
`

export default function Button({ children, onClick, primary = true }) {
  return (
    <Wrapper onClick={onClick} primary={primary}>
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool.isRequired
}
