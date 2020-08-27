import React, { Component } from 'react'

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
    console.log("form submitted");
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
