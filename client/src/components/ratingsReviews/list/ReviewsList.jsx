import React from 'react';
import ReviewsTile from './ReviewsTile.jsx'

//returns a list format of reviews
export default function ReviewsList(props) {
  console.log(props, 'line 6 of ReviewsList')

    return (
      <div>
        <h2>Review Section</h2>
        {/* <ReviewTile/> */}
      </div>
    )

}

/**
 * NOTES/QUESTIONS/CONFIRMATIONS
 *
 * do I need this component? does it do the same thing as the ReviewTile?
 */