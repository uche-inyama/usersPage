import React, { Component } from 'react';
import { receiveUser } from '../../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegistrationWrapper } from './RegistrationStyle';
import image from '../../asset/image/eventCenter.jpg'


export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target)
    this.props.loadUsers(data);
    this.props.history.push('/')
  }

  handleChange(e, name) {
    // e.preventDefault();
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <RegistrationWrapper>
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <div className="registerationWrapper">
            <form onSubmit={this.handleSubmit}>
              <input className="field" type="text"
                name="user[username]"
                value={this.state.username}
                onChange={(e) => { this.handleChange(e, 'username') }}
                required
              />
              <input className="submit" type="submit" />
            </form>
            <Link className="loginLink" to="/">Login</Link>
          </div>
        </div>
      </RegistrationWrapper >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: ((data) => {
      dispatch(receiveUser(data))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
