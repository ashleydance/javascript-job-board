import React, { Component } from "react"
import PropTypes from "prop-types"

export default class ListingFilters extends Component {
  static propTypes = {
    onPressFilter: PropTypes.func.isRequired
  }

  render() {
    const { onPressFilter } = this.props
    return (
      <div>
        <button onClick={() => onPressFilter("react")}>React</button>
        <button onClick={() => onPressFilter("vuejs")}>VueJsS</button>
        <button onClick={() => onPressFilter("remote")}>Remote</button>
        <button onClick={() => onPressFilter("clear")}>Clear</button>
      </div>
    )
  }
}
