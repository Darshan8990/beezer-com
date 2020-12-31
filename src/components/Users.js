import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import store from "../redux/store";
import { setuser } from "../redux/actions/userActions";
import UsersApi from '../api/users'

import Avatar from '@material-ui/core/Avatar';


function UsersComp({ userlist }) {
  const [usersdata, setusersdata] = useState([])
  const [loading, setloading] = useState(true)
  const [defaultuser, setdefaultuser] = useState({})


  useEffect(() => {
    getusers()
  }, [])

  useEffect(() => {
    if (userlist.length > 0) {
      setloading(false)
      setusersdata(userlist)
      setdefaultuser(userlist[0])
    }
  }, [userlist])

  const getusers = async () => {
    await UsersApi.getusers()
  }



  const setstateuser = (user) => {
    store.dispatch(setuser(user));
    setdefaultuser(user)
  }

  return (
    <div className="User">
      {loading ? <div>
        <Loader
          type="Rings"
          color="#fff"
          height={100}
          width={100}
        />
        <h3 className="text-white">Loading Users..</h3>
      </div> : usersdata.map((user) => {
        return <div className="Avatar-main"><Avatar src={user.img} key={user.account} onClick={() => setstateuser(user)} className={defaultuser.account === user.account ? 'Avatar active' : 'Avatar'} ></Avatar><span className="Avatar-name">{user.name}</span></div>
      })}

    </div>
  )
}

UsersComp.propTypes = {
  userlist: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  userlist: state.stateData.userlist,
});
export default connect(mapStateToProps, null)(UsersComp);
