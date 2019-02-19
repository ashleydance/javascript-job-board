import React, { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import JobListings from "../components/JobListings"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobListings />
        <Footer />
      </div>
    )
  }
}
