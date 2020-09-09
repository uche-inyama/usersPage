/* eslint import/no-named-as-default: 0 */
import React, { useEffect, useState, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticateUser, clearStatus } from '../../action';
import LoginWrapper from './loginStyle';
import image from '../../asset/image/eventCenter.jpg';


const Login = ({ status, loginUser, history, updateStatus }) => {

  const [username, setUsername] = useState('')

  const name = () => {
    window.alert('uche')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(updateStatus, 4 * 1000);
    const data = new FormData(e.target);
    loginUser(data, () => {
      history.push('/Home');
    });
  }

  const handleChange = (e, name) => {
    setUsername(
      e.target.value
    );
  }

  return (
    <>
      <LoginWrapper>
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="status">{status}</div>
          <div className="formWrapper">
            <form onSubmit={handleSubmit}>
              <input
                className="field"
                type="text"
                name="user[username]"
                onChange={e => { handleChange(e, 'username'); }}
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
  updateStatus: (() => {
    dispatch(clearStatus())
  })
});

const mapStateToProps = state => ({
  status: state.status,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
