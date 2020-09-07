/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'


const Slide = ({ content, id }) => {
  console.log(content);
  console.log(id)
  const url = `http://localhost:3002${content}`;
  const detailsPath = `/details/${id}`
  console.log(detailsPath)
  return (
    <Link to={detailsPath}
      css={css`
      height: 100%;
      width: 100%;
      background-image: url(${url});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      // color:blue;
    `}
    />
  )
}


export default Slide

