import React, { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Dashboard</h1>
        <Footer />
      </>
    )
  }
}
