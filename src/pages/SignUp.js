import React, { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "../components/Button"

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    companyName: ""
  }

  handleInputChange = (input, event) => {
    this.setState({ [input]: event.target.value })
  }

  handleOnClick = event => {
    event.preventDefault()
    const { email, password, companyName } = this.state
    alert(`${email} - ${password} - ${companyName}`)
  }

  render() {
    return (
      <>
        <Header />
        <form>
          <input
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Email address"
            onChange={event => this.handleInputChange("email", event)}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={event => this.handleInputChange("password", event)}
          />
          <input
            name="companyName"
            type="text"
            value={this.state.companyName}
            placeholder="Company name"
            onChange={event => this.handleInputChange("companyName", event)}
          />
          <Button onClick={this.handleOnClick}>Sign up</Button>
        </form>
        <Footer />
      </>
    )
  }
}
