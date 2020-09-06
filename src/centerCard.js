import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HallImageWrapper } from './centerCardStyle';
import { getCenter } from './action';
import Slider from './components/carousal/Slider'
export const CenterCard = ({ hallname, image, id }) => {
  let image_url = `"http://localhost:3002${image}"`;
  return (
    <HallImageWrapper >
      <div className="image-wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        />
        <Slider image={image} />
      </div>
      <div className="basic-center-info">
        <div className="hall-detail">
          <p> <span>{hallname} hall</span></p>
        </div>
        <Link to={`/details/${id}`} >click here for details</Link>
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


export default connect(null, mapDispatchToProps)(CenterCard)