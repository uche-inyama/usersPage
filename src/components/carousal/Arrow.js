/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      color: #fff;
      display: flex;
      position: absolute;
      top: 10.4%;
      ${direction === 'right' ? 'right: 8px' : 'left: 5px'};
      height: 29px;
      width: 29px;
      justify-content: center;
      background-color: #8bc238;
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
    {direction === 'right' ? '>>' : '<<'}
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Arrow;
