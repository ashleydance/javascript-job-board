import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "./Button"
import { HEADING_FONT_FAMILY, BORDER_COLOR } from "../util/consts"

const Wrapper = styled.div`
  border-bottom: 1px solid ${BORDER_COLOR};
  margin-bottom: 30px;
  padding-bottom: 30px;

  &:last-child {
    border: 0;
  }
`

const Title = styled.h2`
  font-family: ${HEADING_FONT_FAMILY};
  margin-bottom: 5px;
`

const Company = styled.h3`
  font-family: ${HEADING_FONT_FAMILY};
`

const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Tag = styled.div`
  font-size: 12px;
  padding: 3px 15px;
  border-radius: 22px;
  border: 1px solid #000;
  margin-right: 10px;
`

export default function SingleListing({ title }) {
  return (
    <Wrapper>
      <Title>Example Job Add</Title>
      <Company>Company ABC</Company>
      <TagWrapper>
        <Tag>ReactJS</Tag>
        <Tag>Remote</Tag>
      </TagWrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        bibendum convallis molestie. Donec dictum luctus urna, vitae congue elit
        sagittis a.
      </p>
      <div style={{ textAlign: "right" }}>
        <Button>VIEW MORE</Button>
      </div>
    </Wrapper>
  )
}

SingleListing.propTypes = {
  title: PropTypes.string.isRequired
}
