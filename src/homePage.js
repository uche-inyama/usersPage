import React from 'react';
import CenterCard from './centerCard';
import { connect } from 'react-redux';
import { HomePageWrapper } from './HomePageStyle';
// import { Link } from 'react-router-dom';

const HomePage = ({ centers }) => {
  const current_user = localStorage.getItem('current_user')
  if (current_user) {
    return (
      <HomePageWrapper className="container">
        {/* <nav>
          <Link to={`/appointment/${current_user}`}>Appointments</Link>
        </nav> */}
        <div className="emptySpace"></div>
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
      </HomePageWrapper>
    )
  } else {
    return (
      <HomePageWrapper className="container">
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
      </HomePageWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}
export default connect(mapStateToProps, null)(HomePage);