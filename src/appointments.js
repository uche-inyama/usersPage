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
      <h1>Appointment History</h1>
      {appointmentPerUser.map(appointment => (
        <li key={appointment.id} className="appointment-detail">
          <div className="venue">Venue: {appointment.hall} event center, in {appointment.city} </div>
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