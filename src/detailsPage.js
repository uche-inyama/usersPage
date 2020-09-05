import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import { sheduleMeeting } from './action'
import { DetailWrapper } from './detailStyle';

export const DetailPage = ({ centers, bookings }) => {
  let { id } = useParams();
  const [email, setEmailAddress] = useState('')
  const [city, setCity] = useState('')

  const center = centers.find(element => element.id === parseInt(id))
  console.log(center)
  const image = center ? center.image : '';
  const hall = center ? center.hall : '';
  const building = center ? center.building : '';
  const price = center ? center.price : '';
  const capacity = center ? center.capacity : '';
  const state = center ? center.state : '';

  let image_url = `"http://localhost:3002${image}"`;

  const current_user = localStorage.getItem('current_user');

  const emailChangeHandler = (e) => {
    e.preventDefault()
    setEmailAddress(e.target.value)
  }

  const cityChangeHandler = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    bookings(data);
    setEmailAddress('');
    setCity('');
  }

  return (
    <DetailWrapper>
      <div className="top-wrapper">
        <div className="image-wrapper">
          <div className="image"
            style={{
              backgroundImage: `url(${image_url})`,
            }}
          />
        </div>
        <div className="details">
          <ul>
            <li>building: {building}</li>
            <li>location: {city} city,</li>
            <li>{state} state</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="book-appointment">
        <h2>Book an Appointment with us.</h2>
        <form onSubmit={submitHandler}>
          <input type="text"
            name="appointment[username]"
            value={current_user}
            readOnly={true}
          /><br />

          <input type="text"
            name="appointment[hall]"
            value={center ? center.hall : ''}
            readOnly={true}
          /> <br />

          <input type="text"
            name="appointment[email]"
            onChange={emailChangeHandler}
            placeholder='email'
            value={email}
          /><br />
          <input type="text"
            name="appointment[city]"
            onChange={cityChangeHandler}
            placeholder='city'
            value={city}
          /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </DetailWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookings: ((data) => {
      dispatch(sheduleMeeting(data))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);