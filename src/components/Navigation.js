import React from "react"
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post-job">Post Job</Link>
      </li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/login">Log in</Link>
      </li>
    </ul>
  )
}
