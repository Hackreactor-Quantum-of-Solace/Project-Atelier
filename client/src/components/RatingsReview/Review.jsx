import React from 'react';

//maps through all the reviews and formats them into 'tiles'
export default class Review extends React.Component {


  render () {
    let reviewObj = {
      "product": "2",
      "page": 0,
      "count": 5,
      "results": [
        {
          "review_id": 5,
          "rating": 3,
          "summary": "I'm enjoying wearing these shades",
          "recommend": false,
          "response": null,
          "body": "Comfortable and practical.",
          "date": "2019-04-14T00:00:00.000Z",
          "reviewer_name": "shortandsweeet",
          "helpfulness": 5,
          "photos": [{
              "id": 1,
              "url": "urlplaceholder/review_5_photo_number_1.jpg"
            },
            {
              "id": 2,
              "url": "urlplaceholder/review_5_photo_number_2.jpg"
            }
          ]
        },
        {
          "review_id": 3,
          "rating": 4,
          "summary": "I am liking these glasses",
          "recommend": false,
          "response": "Glad you're enjoying the product!",
          "body": "They are very dark. But that's good because I'm in very sunny spots",
          "date": "2019-06-23T00:00:00.000Z",
          "reviewer_name": "bigbrotherbenjamin",
          "helpfulness": 5,
          "photos": [],
        }
      ]
    }

    // console.log(reviewObj.results[0].summary)
    // console.log(reviewObj.results[1].summary)


    let reviewsArr = ["Comfortable and practical.", "They are very dark. But that's good because I'm in very sunny spots"]

    // let reviewList1 =
    // reviewsArr.forEach ((review) => {
    //   console.log(review, 'line 56')
    //   // return <li>{review}</li>
    // })


    // let reviewList = reviewsArr.map( (review) => {
    //  return <li>{review}</li>
    // })

    let reviewList = reviewObj.results.map( ({
      review_id,
      rating,
      summary,
      recommend,
      response,
      body,
      date,
      reviewer_name,
      helpfulness
    }) => {
     let ratingStyle = {
      color: 'blue'
     }
     console.log(typeof date, 'line 79')
     console.log(new Date(date), 'line 80')
     return (
      <div>
        {/* <li> */}

          <h3>{summary}</h3>
          <span style={ratingStyle}>rating (need to convert to stars): {rating}</span>
          <br />
          <span>review_id: {review_id}</span>
          <br />
          <span>{date}</span>
          <br />
          <p>{body}</p>
          <br />
          <span>recommend: {recommend}</span>
          <br />
          <span>helpfulness: {helpfulness}</span>
        {/* </li> */}
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
}

