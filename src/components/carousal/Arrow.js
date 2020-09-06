// /** @jsx jsx */

// import React from 'react'
// import { css, jsx } from '@emotion/core'


// const Arrow = ({ direction, handleClick }) => (
//   <div
//     onClick={handleClick}
//     css={css`
//       display: flex;
//       position: absolute;
//       top: 50%;
//       ${direction === 'right' ? `right: 25px` : `left: 25px`}
//       height: 50px;
//       width: 50px;
//       justify-content: center;
//       background: white;
//       border-raduis: 50%;
//       cursor: pointer;
//       algin-items: center;
//       transition: transform ease-in 0.1s;
//       &:hover {
//         transform: scale(1.1)
//       }
//       transform: translateX(${direction === 'left' ? '-2' : '2'}px);
//         &:focus {
//           outline: 0;
//         }
//       }
//     `}
//   >
//     {direction === 'right' ? '>>' : '<<'}
//   </div>
// )

/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'


const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? `>>` : `<<`}
  </div>
)

export default Arrow
