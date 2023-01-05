import React from 'react';
import ReviewsTile from './ReviewsTile.jsx'

export default function ReviewsList(props) {

  console.log(props, 'line 6 ReviewsList')


  // function compareHelpfulness(a, b) {
  //   return a - b;
  // }
  // let sortedReviews = props.review.sort(compareHelpfulness);


  if (props.value === 'helpfulness') {
    props.visibleReviews.sort( (a, b) => {
      return b.helpfulness - a.helpfulness
    });
  } else if (props.value === 'date') {
    props.visibleReviews.sort( function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  } else {
    props.visibleReviews.sort( function(a, b) {
      return b.helpfulness - a.helpfulness || new Date(b.date) - new Date(a.date);
    });
  }

    return (
      <div class="scroller">
        {props.visibleReviews.map( (reviewObj, index) => <ReviewsTile key ={index} review={reviewObj} increaseHelpfulnessCount={props.increaseHelpfulnessCount}/>)}
      </div>
    )
  }

  // increaseHelpfulnessCount={this.increaseHelpfulnessCount}



