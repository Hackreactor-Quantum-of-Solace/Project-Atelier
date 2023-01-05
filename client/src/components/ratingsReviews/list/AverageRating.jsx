import React from 'react';
import StarRating from './StarRating.jsx';

export default function AverageRating(props) {
  console.log(props, 'line 5')

  return (
    <div>
      <p className="rating"><StarRating rating={props.averageRating}/></p>
    </div>
  )
}