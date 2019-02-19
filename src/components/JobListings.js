import React, { Component } from "react"
import { FAKE_LISTINGS } from "../util/consts"
import ListingFilters from "./ListingFilters"
import SingleListing from "./SingleListing"

export default class JobListings extends Component {
  state = {
    filter: null,
    jobListings: [],
    filteredListings: []
  }

  componentDidMount() {
    this.setState({
      jobListings: FAKE_LISTINGS,
      filteredListings: FAKE_LISTINGS
    })
  }

  handlePressFilter = filter => {
    if (this.state.filter === filter || filter === "clear") {
      this.setState({ filter: null })
      return null
    }

    const filteredListings = this.state.jobListings.filter(listing =>
      listing.tags.includes(filter)
    )

    this.setState({
      filter,
      filteredListings
    })
  }

  renderListings() {
    if (!this.state.filter) {
      return this.state.jobListings.map(listing => (
        <SingleListing
          key={listing.id}
          s
          title={listing.title}
          tags={listing.tags}
        />
      ))
    }

    return this.state.filteredListings.map(listing => (
      <SingleListing
        key={listing.id}
        s
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
