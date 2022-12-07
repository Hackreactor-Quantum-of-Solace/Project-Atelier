import React from 'react';
import axios from 'axios';

import ReviewsList from './list/ReviewsList.jsx';
import ReviewsTile from './list/ReviewsTile.jsx';
import ReviewsSort from './list/ReviewsSort.jsx';


export default class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      dropdown: 'relevant'
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getRatingsReviews = this.getRatingsReviews.bind(this);
  }

  componentDidMount () {
    this.getRatingsReviews(this.props.productId);
    //sort using relevant
    //render
  }
  getRatingsReviews(id) {
    let config = {
      url: `/reviews?product_id=${id}`,
      method: 'get'
    };

    axios(config)
      .then ( (reviews) => {
        this.setState({
          results: reviews.data.results
        })
      })
      .catch( (err) => {
        console.log(err);
      });
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
      {/* <DropDownSort /> */}
      <div className='list-container'>
        {/* map here, then send each single reivew to  */}
       <ReviewsTile review={this.state.results} />
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