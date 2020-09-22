import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveUser } from '../../actions/action';
import RegistrationWrapper from './RegistrationStyle';
import image from '../../asset/image/eventCenter.jpg';

export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { loadUsers } = this.props;
    const { history } = this.props;
    e.preventDefault();
    const data = new FormData(e.target);
    loadUsers(data);
    history.push('/');
  }

  handleChange(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    const { username } = this.state;
    return (
      <RegistrationWrapper>
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <ul className="menu-bar">
            <li className="bar" />
            <li className="bar" />
            <li className="bar" />
          </ul>
          <div className="registerationWrapper">
            <form onSubmit={this.handleSubmit}>
              <input
                className="field"
                type="text"
                name="user[username]"
                value={username}
                onChange={e => { this.handleChange(e, 'username'); }}
                required
              />
              <input className="submit" type="submit" />
            </form>
            <span>Returning user </span>
            <Link className="loginLink" to="/">Login</Link>
          </div>
        </div>
      </RegistrationWrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  loadUsers: (data => {
    dispatch(receiveUser(data));
  }),
});

Registration.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  loadUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
