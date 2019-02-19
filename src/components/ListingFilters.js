import React, { Component } from 'react'

export default class ListingFilters extends Component {
  render() {
    const { onPressFilter } = this.props
    return (
      <div>
        <button onClick={() => onPressFilter('react')}>React</button>
        <button onClick={() => onPressFilter('vuejs')}>VueJsS</button>
        <button onClick={() => onPressFilter('remote')}>Remote</button>
      </div>
    )
  }
}
