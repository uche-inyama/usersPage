import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppointmentWrapper } from './appointmentStyle';


const Appointments = ({ appointments }) => {
  const { id } = useParams();
  console.log(id)
  const username = localStorage.getItem('current_user');

  const appointmentPerUser = appointments.filter(ele => id === ele.username)

  return (
    <AppointmentWrapper>
      <h2>Appointment History</h2>
      {appointmentPerUser.map(appointment => (
        <li key={appointment.id} className="appointment-detail">
          <div>Visited {appointment.hall} event center,</div>
          <div>in {appointment.city}.</div>
        </li>
      ))}
    </AppointmentWrapper>
  )
}

const mapStateToProps = (state) => {
  console.log(state.appointmentBookings)
  return {
    appointments: state.appointmentBookings
  }
}

export default connect(mapStateToProps, null)(Appointments)