import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  WHITE,
  YELLOW,
  BORDER_COLOR,
  HEADING_FONT_FAMILY
} from "../util/consts"

const Container = styled.div`
  padding-top: 30px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-top: 1px solid ${BORDER_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Filter = styled.button`
  margin: 0 5px;
  background: ${WHITE};
  border: 2px solid ${YELLOW};
  padding: 10px 20px;
  font-size: 14px;
  font-family: ${HEADING_FONT_FAMILY};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background: ${YELLOW};
    outline: none;
  }
`

const Title = styled.h2`
  text-align: center;
  margin-top: 0;
`

export default class ListingFilters extends Component {
  static propTypes = {
    onPressFilter: PropTypes.func.isRequired
  }

  render() {
    const { onPressFilter } = this.props
    return (
      <Container>
        <Title>Filter Jobs</Title>
        <Wrapper>
          <Filter onClick={() => onPressFilter("react")}>React</Filter>
          <Filter onClick={() => onPressFilter("vuejs")}>VueJsS</Filter>
          <Filter onClick={() => onPressFilter("remote")}>Remote</Filter>
          <Filter onClick={() => onPressFilter("clear")}>
            Clear
            <span role="img" aria-label="trash can">
              🗑️
            </span>
          </Filter>
        </Wrapper>
      </Container>
    )
  }
}
