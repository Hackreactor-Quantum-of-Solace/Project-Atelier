import React from 'react';

//maps through all the reviews and formats them into 'tiles'
export default function ReviewsTile (props) {

  // console.log(props, 'line 6')

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
    </div>
  )
}

