import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import { sheduleMeeting } from './action'

const DetailPage = ({ centers, bookings }) => {
  let { id } = useParams();

  const [email, setEmailAddress] = useState('')
  const [city, setCity] = useState('')

  const center = centers.find(element => element.id === parseInt(id))
  const username = localStorage.getItem('username');
  const item = localStorage.getItem('appointment')

  console.log(item)
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
    <div>
      <div className="image-wrapper">

      </div>
      <div className="book-appointment">
        <form onSubmit={submitHandler}>
          <input type="text"
            name="appointment[username]"
            value={username}
            readOnly={true}
          />

          <input type="text"
            name="appointment[hall]"
            value={center ? center.hall : ''}
            readOnly={true}
          />

          <input type="text"
            name="appointment[email]"
            onChange={emailChangeHandler}
            placeholder='email'
            value={email}
          />
          <input type="text"
            name="appointment[city]"
            onChange={cityChangeHandler}
            placeholder='city'
            value={city}
          /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
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