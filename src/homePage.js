import React from 'react';
import CenterCard from './centerCard';
import { connect } from 'react-redux';


const homePage = ({ centers }) => {

  // fetch centers to display.

  return (
    <>
      <div className="container">
        <main>
          <div className="centerList">
            {/* map through center to list them */}
            <ul>
              {centers.map((center, index) => {
                return (
                  <CenterCard
                    id={index}
                    key={index}
                    hallname={center.hall}
                    image={center.image}
                  />
                )
              })}
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}
export default connect(mapStateToProps, null)(homePage);