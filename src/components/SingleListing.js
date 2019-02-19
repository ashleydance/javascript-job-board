import React from "react"
import PropTypes from "prop-types"

export default function SingleListing({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

SingleListing.propTypes = {
  title: PropTypes.string.isRequired
}
