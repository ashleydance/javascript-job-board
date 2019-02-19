import React, { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "../components/Button"

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    alert(`${username} - ${password}`)
  }

  handleInputChange = (input, event) => {
    this.setState({ [input]: event.target.value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <Header />
        <form>
          <input
            name="email"
            value={email}
            type="text"
            onChange={event => this.handleInputChange("email", event)}
            placeholder="email"
          />
          <input
            name="passowrd"
            value={password}
            type="password"
            onChange={event => this.handleInputChange("password", event)}
            placeholder="Password"
          />
          <Button onClick={this.handleSubmit}>Log in</Button>
        </form>
        <Footer />
      </div>
    )
  }
}
