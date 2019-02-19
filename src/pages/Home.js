import React, { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import JobListings from "../components/JobListings"
import getJobListings from "../requests/getJobListings"

export default class Home extends Component {
  state = {
    jobListings: []
  }

  componentDidMount() {
    const jobListings = getJobListings()
    this.setState({ jobListings })
  }

  render() {
    const { jobListings } = this.state
    return (
      <>
        <Header />
        <JobListings listings={jobListings} />
        <Footer />
      </>
    )
  }
}
