import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';

function Footer({ rating }) {

  return (
    <div className="Footer">
      <h4 className="color-secondary fs-12">{rating} Likes</h4>
      <span className="pt-10 color-fade fs-10 pt-30" >Made With <FavoriteIcon className="heart" /> </span>
      <span className="pt-10 color-fade fs-12" > Copyright © Darshan Asolkar 2020. All rights reserved.</span>
    </div>
  )
}


Footer.propTypes = {
  rating: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  rating: state.stateData.rating,
});
export default connect(mapStateToProps, null)(Footer);