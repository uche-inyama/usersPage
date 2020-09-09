/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Slide = ({ content, id }) => {
  const url = `http://localhost:3002${content}`;
  const detailsPath = `/details/${id}`;
  return (
    <Link
      to={detailsPath}
      css={css`
      height: 100%;
      width: 100%;
      background-image: url(${url});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 80%;
      cursor: pointer;
      // color:blue;
    `}
    />
  );
};

Slide.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Slide;
