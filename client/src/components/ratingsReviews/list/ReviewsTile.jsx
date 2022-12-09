import React from 'react';
import ReviewsList from './ReviewsList.jsx';

//maps through all the reviews and formats them into 'tiles'
export default function ReviewsTile (props) {

  // console.log(props.review, 'line 7 date')
  console.log(props.sortValue, 'line 8')

  // function compareHelpfulness(a, b) {
  //   return a - b;
  // }
  // let sortedReviews = props.review.sort(compareHelpfulness);


  if (props.sortValue === 'helpfulness') {
    props.review.sort( (a, b) => {
      return b.helpfulness - a.helpfulness
    });
  } else if (props.sortValue === 'date') {
    props.review.sort( function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  } else {
    props.review.sort( function(a, b) {
      return b.helpfulness - a.helpfulness || new Date(b.date) - new Date(a.date);
    });
  }


  let reviewsList = props.review.map( (reviewObj, index) => {

    // console.log(reviewObj.photos, 'line 10')
    let images = reviewObj.photos.map( (photosObj) => {
      // console.log(photosObj, 'line 12')
    })

    let ratingStyle = {
    color: 'blue'
    }

    let formattedDate = new Date(reviewObj.date)
    let month = formattedDate.getMonth()
    let formattedDateString = formattedDate.toDateString()

    return (
      <div key ={index}>
        <h3>{reviewObj.summary}</h3>
        <p style={ratingStyle}>rating (need to convert to stars): {reviewObj.rating}</p>
        <p>{formattedDateString}</p>
        <p>{reviewObj.body}</p>
        <p>name:{reviewObj.reviewer_name}</p>
        <p>recommend: {reviewObj.recommend}</p>
        <p>helpfulness: {reviewObj.helpfulness}</p>
     </div>
    )
  })



  return (
    <div>
      <ul>
        {reviewsList}
      </ul>
      {/* <ReviewsList reviews={reviewsList} /> */}
    </div>
  )
}

