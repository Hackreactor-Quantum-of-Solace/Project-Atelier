import React from 'react';
import ReviewTile from './ReviewTile.jsx'

//returns a list format of reviews
export default function ReviewList(props) {

    return (
      <div>
        <h2>Review Section</h2>
        <h3>These are hard coded reviews.</h3>
        <ReviewTile/>
      </div>
    )

}

/**
 * NOTES/QUESTIONS/CONFIRMATIONS
 *
 * do I need this component? does it do the same thing as the ReviewTile?
 */