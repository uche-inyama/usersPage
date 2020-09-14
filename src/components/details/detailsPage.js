import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sheduleMeeting } from '../../action';
import DetailWrapper from './detailStyle';

const DetailPage = ({ centers, bookings, match }) => {
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

  const currentUser = localStorage.getItem('current_user');

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

  return (
    <DetailWrapper>
      <div className="top-wrapper">
        <div className="image-wrapper">
          <div
            className="image"
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        </div>
        <div className="details">
          <ul>
            <li>
              Building:
              {building}
            </li>
            <li>
              Hall:
              {hall}
            </li>
            <li>
              Location:
              {city}
              ,
              {' '}
              {state}
              {' '}
            </li>
            <li>
              Capacity:
              {capacity}
            </li>
            <li>
              Price:
              {price}
            </li>
          </ul>
        </div>
      </div>

      <div className="book-appointment">
        <h2>Book an Appointment with us.</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="appointment[username]"
            value={currentUser}
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
        </form>
      </div>
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
};

const mapStateToProps = state => ({
  centers: state.centers,
});

const mapDispatchToProps = dispatch => ({
  bookings: (data => {
    dispatch(sheduleMeeting(data));
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
