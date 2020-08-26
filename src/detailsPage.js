import React from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';

const DetailPage = ({ centers }) => {
  let { id } = useParams();

  const center = centers.filter((ele, idx) => parseInt(id) === idx)

  return (
    <div>
      <div className="image-wrapper">

      </div>
      <ul>
        {center.map((ele, idx) => (
          <li
            key={idx}
          >{ele.building}</li>
        ))}
      </ul>
      <div className="book-appointment">

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}

export default connect(mapStateToProps)(DetailPage);