import React from 'react';
import ReviewsImages from './ReviewsImages.jsx';

//maps through all the reviews and formats them into 'tiles'
export default function ReviewsTile (props) {


  let imagesArr = props.review.photos
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
         {imagesArr.map( (imagesObj, index) => <ReviewsImages key={index} images ={imagesObj}/>)}
         <p>name:{props.review.reviewer_name}</p>
         <p>recommend: {props.review.recommend}</p>
         <p>helpfulness: {props.review.helpfulness}</p>
    </div>
  )
}

