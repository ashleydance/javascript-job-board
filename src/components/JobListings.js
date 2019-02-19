import React, { Component } from "react"
import PropTypes from "prop-types"
import ListingFilters from "./ListingFilters"
import SingleListing from "./SingleListing"

export default class JobListings extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired
  }

  state = {
    filter: null,
    filteredListings: []
  }

  handlePressFilter = filter => {
    if (this.state.filter === filter || filter === "clear") {
      this.setState({
        filter: null,
        filteredListings: []
      })
      return null
    }

    const filteredListings = this.props.listings.filter(listing =>
      listing.tags.includes(filter)
    )

    this.setState({
      filter,
      filteredListings
    })
  }

  renderListings() {
    const { listings } = this.props
    const { filteredListings, filter } = this.state

    if (!filter) {
      return listings.map(listing => (
        <SingleListing
          key={listing.id}
          title={listing.title}
          tags={listing.tags}
        />
      ))
    }

    return filteredListings.map(listing => (
      <SingleListing
        key={listing.id}
        title={listing.title}
        tags={listing.tags}
      />
    ))
  }

  render() {
    return (
      <div>
        <ListingFilters
          onPressFilter={filter => this.handlePressFilter(filter)}
        />
        {this.renderListings()}
        <h1>this is a job listings</h1>
      </div>
    )
  }
}
