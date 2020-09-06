// import React, { Component, useState } from 'react';
// import { connect } from 'react-redux';
// import { RightArrow, LeftArrow } from './Arrow'
// import Slide from './Slide';
// import { StyledCarousal } from './carousalStyle';
// import { css, jsx } from '@emotion/core'
// import SliderContent from './sliderContent'
// import Slide from './Slide';

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: 0,
//       length: ''
//     };
//   }
// const Slider = () => {
// const width = 300;

// const [state, setState] = useState({
//   translate: 0,
//   transition: 0.45
// })

// const { translate, transition } = state

// console.log(centers)

// const [activeIndex, setActiveIndex] = useState(0);
// const [centerslength, setLength] = useState(centers.length)

// const goToPrevSlide = () => {
//   let index = activeIndex;
//   let length = centerslength;

//   if (index < 1) {
//     index = length - 1;
//   } else {
//     index--;
//   }
//   setActiveIndex(index);
// }

// const goToNextSlide = () => {
//   let index = activeIndex;
//   let length = centerslength;

//   if (index === length - 1) {
//     index = 0
//   } else {
//     index++;
//   }
//   setActiveIndex(index);
// }

// return (
//   <div style={{ height: '100%', width: '100%', background: '#333' }}>
//     <SliderContent translate={450} />
//   </div>
// )


// return (
//   <div className='slider-items'>
//     <LeftArrow
//       goToPrevSlide={() => goToPrevSlide()}
//     />
//     <StyledCarousal className="slider">
//       <Slide
//         activeIndex={activeIndex}
//         centers={centers}
//       />
//     </StyledCarousal>
//     <RightArrow
//       goToNextSlide={() => goToNextSlide()}
//     />
//   </div>
// );
// }


// const mapStateToProps = (state) => {
//   return {
//     centers: state.centers
//   }
// }

// export default Slider;

// export default connect(mapStateToProps, null)(Slider)


/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './sliderContent'
import Slide from './Slide'
import Arrow from './Arrow'

/**
 * @function Slider
 */
const Slider = ({ centers }) => {
  console.log(centers)
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === centers.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (centers.length - 1) * getWidth(),
        activeIndex: centers.length - 1
      })
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * centers.length}
      >
        {centers.map(center => <Slide
          key={center.id}
          content={center.image}
        />)}

      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 50vh;
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider


