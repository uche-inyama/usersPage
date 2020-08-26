import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HallImageWrapper } from './centerCardStyle';
import { getCenter } from './action';

const centerCard = ({ hallname, image, fetchCenter, id }) => {
  let image_url = `"http://localhost:3002${image}"`;

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
        <Link to={`/details/${id}`} onClick={handleClick}>click here for details</Link>
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


export default connect(null, mapDispatchToProps)(centerCard)