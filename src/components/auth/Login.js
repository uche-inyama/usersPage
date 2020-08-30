import React, { Component } from 'react';
import { authenticateUser } from '../../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    try {
      this.props.loginUser(data, () => {
        this.props.history.push('/Home');
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(e, name) {
    e.preventDefault();
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user[username]"
            onChange={(e) => { this.handleChange(e, 'username') }}
            value={this.state.username}
            required
          />
          <input type="submit" value="Login" />
        </form>
        <Link to="/register">Sign up</Link>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: ((user, cb) => {
      dispatch(authenticateUser(user, cb));
    })
  }
}

export default connect(null, mapDispatchToProps)(Login)