/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledItemContainer, StyledSocialMediaIcons } from './slideStyle';

const Slide = ({ content, id, center }) => {
  const detailsPath = `/details/${id}`;
  return (
    <StyledItemContainer>
      <Link
        to={detailsPath}
        css={css`
      height: 100px;
      width: 150px;
      display: block;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      cursor: pointer;
      position: relative;
    `}
      />
      <div className="hall-name">{center.hall}</div>
      <div className="info">
        Lorem ipsum dolor sit amet, consectetur
      </div>

      <StyledSocialMediaIcons className="navEnd">
        <div><FontAwesomeIcon icon={['fab', 'facebook']} /></div>
        <div><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
        <div><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
      </StyledSocialMediaIcons>
    </StyledItemContainer>
  );
};

Slide.defaultProps = {
  content: null,
};

Slide.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number.isRequired,
  center: PropTypes.object.isRequired,
};

export default Slide;
