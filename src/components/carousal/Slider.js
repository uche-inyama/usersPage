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
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === centers.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    return setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (centers.length - 1) * getWidth(),
        activeIndex: centers.length - 1,
      });
    }
    return setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  const SliderCSS = css`
  position: relative;
  height: 65vh;
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;
`;

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * centers.length}
      >
        {centers.map(center => (
          <Slide
            key={center.id}
            id={center.id}
            content={center.image}
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
