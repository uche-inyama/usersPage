import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sheduleMeeting, removeUser } from '../../actions/action';
import DetailWrapper from './detailStyle';
import NavBar from '../../components/navBar/navBar';

const DetailPage = ({
  centers, bookings, match, logOut, currentUser,
}) => {
  const { id } = match.params;
  const [email, setEmailAddress] = useState('');
  const [useCity, setCity] = useState('');

  const center = centers.find(element => element.id === parseInt(id, 10));
  const image = center ? center.image : '';
  const hall = center ? center.hall : '';
  const building = center ? center.building : '';
  const price = center ? center.price : '';
  const capacity = center ? center.capacity : '';
  const state = center ? center.state : '';
  const city = center ? center.city : '';

  const url = `${image}`;

  const user = localStorage.getItem('current_user');

  const emailChangeHandler = e => {
    e.preventDefault();
    setEmailAddress(e.target.value);
  };

  const cityChangeHandler = e => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    bookings(data);
    setEmailAddress('');
    setCity('');
  };

  const renderNavBar = user ? (
    <NavBar
      currentUser={currentUser}
      logOut={logOut}
    />
  ) : ('');

  return (
    <DetailWrapper>
      {renderNavBar}
      <main className="DetailsWrapper">
        <section className="top-wrapper">
          <div className="image-wrapper">
            <div
              className="image"
              style={{
                backgroundImage: `url(${url})`,
              }}
            />
          </div>
          <aside className="details">
            <ul>
              <li className="item-detail">
                Building:
                {building}
              </li>
              <li className="item-detail">
                Hall:
                {hall}
              </li>
              <li className="item-detail">
                Location:
                {city}
                ,
                {' '}
                {state}
                {' '}
              </li>
              <li className="item-detail">
                Capacity:
                {capacity}
              </li>
              <li className="item-detail">
                Price:
                {price}
              </li>
            </ul>
          </aside>
        </section>

        <section className="book-appointment">
          <h2>Book an Appointment with us.</h2>
          {/* <form onSubmit={submitHandler}>
            <input
              type="text"
              name="appointment[username]"
              value={user}
              readOnly
            />
            <br />

            <input
              type="text"
              name="appointment[hall]"
              value={hall}
              readOnly
            />
            {' '}
            <br />

            <input
              type="text"
              name="appointment[email]"
              onChange={emailChangeHandler}
              placeholder="email"
              value={email}
            />
            <br />
            <input
              type="text"
              name="appointment[city]"
              onChange={cityChangeHandler}
              placeholder="city"
              value={useCity}
            />
            <br />
            <input type="submit" value="submit" />
          </form> */}
        </section>
      </main>
    </DetailWrapper>
  );
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  centers: PropTypes.arrayOf(
    PropTypes.shape({
      building: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      capacity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  bookings: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  centers: state.centers,
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  bookings: (data => {
    dispatch(sheduleMeeting(data));
  }),
  logOut: (() => {
    dispatch(removeUser());
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
