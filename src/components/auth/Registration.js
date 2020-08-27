import React, { Component } from 'react'
import axios from 'axios'

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { username } = this.state

    let data = new FormData(e.target)
    fetch('http://localhost:3002/registrations', {
      method: "POST",
      mode: "cors",
      body: data

    }).then(response => response.json())
      .then(data => console.log(data))
    e.preventDefault();
  }


  handleChange(e, name) {
    console.log("handle change")
    e.preventDefault();
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="user[username]"
            value={this.state.username}
            onChange={(e) => { this.handleChange(e, 'username') }}
            required
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
