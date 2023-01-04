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
        this.setState({
          reviews: reviews.data.results,
          visibleReviews: reviews.data.results.slice(0,2)
        })
      })
      .catch( (err) => {
        console.log(err);
      });
  }

  handleChange(event) {
    //reset state
    this.setState({sortValue: event.target.value}); //setState is asynch
    console.log('sorting by ' + this.state.sortValue);
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  handleMoreReviews(event) {
    event.preventDefault();
    console.log('handleMoreReviews')
  }

  render() {
    return (
      <div className='reviews-section-container'>
        <div className='reviews-header'>
        <h1>Ratings & Reviews</h1>
        </div>

       <div className='ratings-container'>
       <h2>Ratings</h2>
       </div>

       <div className='reviews-container'>
       <form onSubmit={this.handleSubmit}>
        <label>
          {this.state.reviews.length} reviews, sorted by
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="date">date</option>
            <option value="helpfulness">helpfulness</option>
            <option value="relevance">relevant</option>
          </select>
        </label>
       </form>
       <ReviewsList review={this.state.reviews} visibleReviews={this.state.visibleReviews} value={this.state.sortValue}/>
       </div>
       <div>
        <button onSubmit={this.handleMoreReviews}>
          More Reviews
        </button>
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