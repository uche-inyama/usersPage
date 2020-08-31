import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';


const Appointments = ({ appointments }) => {
  const { id } = useParams();
  const username = localStorage.getItem('username');
  const appointmentPerUser = appointments.filter(ele => ele.username === id)
  console.log(appointmentPerUser)
  return (
    <ul>
      {appointmentPerUser.map(appointment => (
        <li key={appointment.id}>
          <div>{appointment.hall}</div>
          <div>{appointment.city}</div>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    appointments: state.appointmentBookings
  }
}

export default connect(mapStateToProps, null)(Appointments)