import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HallImageWrapper from './centerCardStyle';
import { getCenter } from './action';
import Slider from './components/carousal/Slider';

export const CenterCard = ({ hallname, image, id }) => {
  const imageUrl = `"http://localhost:3002${image}"`;
  return (
    <HallImageWrapper>
      <div className="image-wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <Slider image={image} />
      </div>
      <div className="basic-center-info">
        <div className="hall-detail">
          <p>
            {' '}
            <span>
              {hallname}
              {' '}
              hall
            </span>
          </p>
        </div>
        <Link to={`/details/${id}`}>click here for details</Link>
      </div>
    </HallImageWrapper>
  );
};

CenterCard.propTypes = {
  hallname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchCenter: (id => {
    dispatch(getCenter(id));
  }),
});

export default connect(null, mapDispatchToProps)(CenterCard);
