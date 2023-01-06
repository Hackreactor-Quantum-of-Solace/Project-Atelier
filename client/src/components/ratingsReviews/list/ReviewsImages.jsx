import React from 'react';

export default function ReviewsImages (props) {
  console.log(props.images.url, 'line 4 ReviewsImages')

  return (
    <div className="review-images">
      <img src={props.images.url} width="80px" height="80px"/>
    </div>
  )
}