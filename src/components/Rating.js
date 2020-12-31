import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import { Rating } from '@material-ui/lab';
import RatingApi from '../api/ratings'


export default function RatingComponenent() {
  const [rated, setrated] = useState(false)
  const [ratinglocal, setratinglocal] = useState(0)
  const [ratingcount, setratingcount] = useState(0)


  const setrate = (rating) => {
    setratinglocal(rating)
    setrated(true)
    localStorage.setItem("rating", rating);
    Swal.fire(
      'Good job!',
      'Thank You For Your Ratings!',
      'success'
    )
    RatingApi.addrating(ratingcount, rating)
  }

  useEffect(() => {
    ratingcheck()
    getratings()
  }, [])


  const getratings = async () => {
    RatingApi.totalratings().then((totalrating) => {
      setratingcount(totalrating)
    })
  }

  const ratingcheck = () => {
    let rating = localStorage.getItem('rating')
    if (rating) {
      setrated(true);
      setratinglocal(parseInt(rating))
    }
  }

  return (
    <div className="Rating">
      {rated ? <div className="Rating-container">   <h3 className="text-rating">Thanks For Rating</h3>
        <Rating name="rating1" className="pt-30" color="red" disabled defaultValue={ratinglocal} size="large" /></div> : <div className="Rating-container ">
          <h3 className="text-rating">Rate Us</h3>
          <Rating className="pt-30" color="red" name="rating" onChange={(e) => {
            setrate(e.target.value)
          }} defaultValue={0} size="large" /></div>}
    </div>
  )
}
