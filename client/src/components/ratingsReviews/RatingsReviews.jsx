import React from 'react';
import axios from 'axios';

import ReviewsList from './list/ReviewsList.jsx';
import ReviewsTile from './list/ReviewsTile.jsx';
import ReviewsSort from './list/ReviewsSort.jsx';
import NewReviewForm from './form/NewReviewForm.jsx';


export default class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      visibleReviews: [],
      reviewsCount: 2,
      sortValue: 'relevance'
    };
    this.getRatingsReviews = this.getRatingsReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMoreReviews = this.handleMoreReviews.bind(this);

  }

  componentDidMount () {
    this.getRatingsReviews(this.props.productId);
  }
  getRatingsReviews(id) {
    let config = {
      url: `/reviews?product_id=${id}`,
      method: 'get'
    };

    axios(config)
      .then ( (reviews) => {
        // console.log(reviewsCount, 'line 36')
        this.setState({
          reviews: reviews.data.results,
          visibleReviews: reviews.data.results.slice(0, 2),
        })
      })
      .catch( (err) => {
        console.log(err);
      });
  }

  handleChange(event) {
    //reset state
    this.setState({sortValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('sorting by' + this.state.sortValue);
  }

  handleMoreReviews(event) {
    event.preventDefault();
    console.log('handleMoreReviews')
  }

  render() {
    return (
      <div>
        <h2>Sorted List of Reviews</h2>
        <div className='list-container'>
          <ReviewsList reviews={this.state.reviews} visibleReviews={this.state.visibleReviews} value={this.state.sortValue}/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Sort by:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="date">date</option>
              <option value="helpfulness">helpfulness</option>
              <option value="relevant">relevant</option>
            </select>
          </label>
        </form>
        <div>
          <button onSubmit={this.handleMoreReviews}>More Reviews</button>
        </div>
       <NewReviewForm />
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