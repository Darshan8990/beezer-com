import React, { useState, useEffect } from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";

import AccountApi from '../api/accounts'

function AccountComp({ user }) {
  const [data, setdata] = useState(null)
  useEffect(() => {
    if (user !== undefined) {
      getaccounts(user)
    }
  }, [user])

  const getaccounts = async (userdata) => {
    if (userdata.account) {
      await AccountApi.getaccountdetails(userdata.account).then((data) => {
        setdata(data)
      })
    }
  }
  return (
    data ? <div className="Account-card-Main">
      <div className="account-card-data">
        <span className="account-card-name" >{data.title}</span >
        <span className="pt-30">- {user.name}</span>
      </div>
      <img height="180" src={data.img} alt="movie-image" />
    </div> : <div className="Account-card">
        <span className="account-card-name">Getting Data From User....</span>
      </div>

  )
}


AccountComp.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.stateData.user,
});
export default connect(mapStateToProps, null)(AccountComp);