import React from 'react';
import ReviewsList from './ReviewsList.jsx';

//maps through all the reviews and formats them into 'tiles'
export default function ReviewsTile (props) {

    // console.log(reviewObj.photos, 'line 10')
  //   let images = reviewObj.photos.map( (photosObj) => {
  //     // console.log(photosObj, 'line 12')
  //   })

    let ratingStyle = {
    color: 'blue'
    }

    let formattedDate = new Date(props.review.date)
    let month = formattedDate.getMonth()
    let formattedDateString = formattedDate.toDateString()

  return (
    <div class="tile">
      <h3>{props.review.summary}</h3>
         <p style={ratingStyle}>rating (need to convert to stars): {props.review.rating}</p>
         <p>{formattedDateString}</p>
         <p>{props.review.body}</p>
         <p>name:{props.review.reviewer_name}</p>
         <p>recommend: {props.review.recommend}</p>
         <p>helpfulness: {props.review.helpfulness}</p>
    </div>
  )
}

