/* eslint import/no-named-as-default: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticateUser } from '../../action';
import LoginWrapper from './loginStyle';
import image from '../../asset/image/eventCenter.jpg';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { history } = this.props;
    const { loginUser } = this.props;
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      loginUser(data, () => {
        history.push('/Home');
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(e, name) {
    // e.preventDefault();
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    const { username } = this.state;
    return (
      <>
        <LoginWrapper>
          <div
            className="image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="formWrapper">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="field"
                  type="text"
                  name="user[username]"
                  onChange={e => { this.handleChange(e, 'username'); }}
                  value={username}
                  required
                />
                <input className="submit" type="submit" value="Login" />
              </form>
              <span>New user</span>
              <Link to="/register" className="register-link"> Sign up</Link>
            </div>
          </div>
        </LoginWrapper>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginUser: ((user, cb) => {
    dispatch(authenticateUser(user, cb));
  }),
});

export default connect(null, mapDispatchToProps)(Login);
