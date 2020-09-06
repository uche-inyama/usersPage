/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'


// const Slide = ({ centers, activeIndex }) => {
//   return (
//     <ul>
//       {centers.map((center, index) => {
//         return (
//           <li className={
//             index === activeIndex ? 'active' : 'inactive'
//           }
//             id={center.id}
//             key={center.id}
//           >
//             <div>{center.hall}</div>
//             <div className="image"
//               style={{
//                 backgroundImage: `url(${`"http://localhost:3002${center.image}"`})`,
//               }}
//             >
//             </div>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

const Slide = ({ content }) => {
  const url = `http://localhost:3002${content}`;
  return <div
    css={css`
      height: 100%;
      width: 100%;
      background-image: url(${url});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      color:blue;
    `}
  />
}


export default Slide

