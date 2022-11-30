import React from 'react';
import Review from './Review.jsx'

//returns a list format of reviews
export default class ReviewList extends React.Component {

  render () {
    return (
      <div>
        <h2>Review Section</h2>
        <h3>These are hard coded reviews.</h3>
        <Review />
      </div>
    )
  }
}