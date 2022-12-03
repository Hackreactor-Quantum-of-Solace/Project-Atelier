import React from 'react';
import ReviewList from './RatingsReview/List/ReviewList.jsx';
import ReviewTile from './RatingsReview/List/ReviewTile.jsx';
import ReviewSort from './RatingsReview/List/ReviewSort.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
      dropdown: 'relevant'
    }
  }

  componentDidMount () {
//axios.get from API
//sort using relevant
//render

  }

  handleChange () {
    //for dropdown
    //pass down
    //reset state

  }

  render() {
    return (
      <div>
       <h2>Sorted List of Reviews</h2>
      <DropDownSort />
      <div className='list-container'>
       <ReviewList />
      </div>

      </div>


    )
  }
}

/**
 * NOTES/QUESTIONS/CONFIRMATIONS
 *
 * This is the whole Ratings&Review Section
 * Renders the Ratings Sections
 * Renders a sorted list of reviews, with default being Relevant
 * Add new review button
 * More review button
 */