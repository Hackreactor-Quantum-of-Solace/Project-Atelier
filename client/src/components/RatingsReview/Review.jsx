import React from 'react';

//maps through all the reviews and formats them into 'tiles'
export default class Review extends React.Component {


  render () {
    let reviewsArr = ["Comfortable and practical.", "They are very dark. But that's good because I'm in very sunny spots"]

    let reviewList = reviewsArr.map( (review, key) => {
     return <li>{review}</li>
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

