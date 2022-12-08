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


  let reviewsList = props.review.map( (reviewObj) => {

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
      <div>
        <h3>{reviewObj.summary}</h3>
        <span style={ratingStyle}>rating (need to convert to stars): {reviewObj.rating}</span>
        <br />
        <span>{formattedDateString}</span>
        <br />
        <p>{reviewObj.body}</p>
        <br />
        <span>{reviewObj.reviewer_name}</span>
        <br />
        <span>recommend: {reviewObj.recommend}</span>
        <br />
        <span>helpfulness: {reviewObj.helpfulness}</span>
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

