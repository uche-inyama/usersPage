import React from 'react';
import CenterCard from './centerCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = ({ centers }) => {
  const current_user = localStorage.getItem('current_user')
  console.log(current_user)
  if (current_user) {
    return (
      <div className="container">
        <nav>
          <Link to={`/appointment/${current_user}`}>Appointments</Link>
        </nav>
        <main>
          <div className="centerList">
            <ul>
              {centers.map((center) => {
                return (
                  <CenterCard
                    id={center.id}
                    key={center.id}
                    hallname={center.hall}
                    image={center.image}
                  />
                )
              })}
            </ul>
          </div>
        </main>
      </div>
    )
  } else {
    return (
      <div className="container">
        <main>
          <div className="centerList">
            <ul>
              {centers.map((center) => {
                return (
                  <CenterCard
                    id={center.id}
                    key={center.id}
                    hallname={center.hall}
                    image={center.image}
                  />
                )
              })}
            </ul>
          </div>
        </main>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}
export default connect(mapStateToProps, null)(HomePage);