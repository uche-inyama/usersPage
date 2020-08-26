import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCenter } from './action';
import { HallImageWrapper } from './centerCardStyle';
import DetailsPage from './detailsPage'

const centerCard = ({ hallname, image, fetchCenter, id, center }) => {
  let image_url = `"http://localhost:3002${image}"`;
  console.log(center)

  const handleClick = () => {
    fetchCenter(id)
  }
  return (
    <HallImageWrapper >
      <div className="image-wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        />
      </div>
      <div className="basic-center-info">
        <div className="hall-detail">
          <p>hall: <span>{hallname}</span></p>
        </div>
        <div to="/detail" onClick={handleClick}>click here for details</div>
      </div>
    </HallImageWrapper >
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCenter: ((id) => {
      dispatch(getCenter(id))
    })
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.centers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(centerCard)