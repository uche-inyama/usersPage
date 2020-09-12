/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Slide = ({ content, id }) => {
  const detailsPath = `/details/${id}`;
  return (
    <Link
      to={detailsPath}
      css={css`
      height: 100%;
      width: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      cursor: pointer;
    `}
    />
  );
};

Slide.defaultProps = {
  content: null,
}

Slide.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default Slide;
