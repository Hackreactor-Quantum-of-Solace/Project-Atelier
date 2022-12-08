import React from 'react';

//maps through all the reviews and formats them into 'tiles'
export default function ReviewsTile (props) {
  console.log(props.review, 'ReviewsTile, line 5')
  console.log(props.review.photos, 'line 6')
  let reviewList = props.review.map( ({
    review_id,
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness,
    photos
  }) => {

    let ratingStyle = {
    color: 'blue'
    }
  //  console.log(typeof date, 'line 79')
  //  console.log(new Date(date), 'line 80')

    let formattedDate = new Date(date)
    let month = formattedDate.getMonth()
  //  console.log(month)
    let formattedDateString = formattedDate.toDateString()

  //  console.log(typeof formattedDateString)
    return (
    <div>

      <h3>{summary}</h3>
      <span style={ratingStyle}>rating (need to convert to stars): {rating}</span>
      <br />
      <span>{formattedDateString}</span>
      <br />
      <p>{body}</p>
      <br />
      <span>{reviewer_name}</span>
      <br />
      <span>recommend: {recommend}</span>
      <br />
      <span>helpfulness: {helpfulness}</span>
    </div>

    )
  })

  return (
    <div>
      <ul>

      {reviewList}
      </ul>
    </div>
  )

}

