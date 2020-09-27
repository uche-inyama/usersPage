/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import SliderContent from './sliderContent';
import Slide from './Slide';
import Arrow from './Arrow';

/**
 * @function Slider
 */
const Slider = ({ centers }) => {
  const getWidth = () => 636.5;


  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === centers.length - 3) return;
    return setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: (state.activeIndex + 1) * 212,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) return
    return setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * 212,
    });
  };

  const getlength = () => {
    let count = 1;
    let value = centers.length / 3;
    count *= (Math.floor(value))
    return count + 1;
  }
  console.log(getlength());

  const SliderCSS = css`
  position: relative;
  height: 65vh;
  width: 49vw;
  margin: 0 auto;
  overflow: hidden;
  span{
    display:block;
    position: relative;
    bottom: 165px;
    padding: 0.5px 0;
    width: 38px;
    height: 27px;
    background-color: #8bc238;  
  }
`;

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * getlength()}
      >
        {centers.map(center => (
          <Slide
            key={center.id}
            id={center.id}
            content={center.image}
            center={center}
          />
        ))}

      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

Slider.propTypes = {
  centers: PropTypes.arrayOf(
    PropTypes.shape({
      building: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      capacity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Slider;
