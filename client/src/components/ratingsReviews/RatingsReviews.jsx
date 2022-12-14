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
      sortValue: 'relevant'
    };
    this.getRatingsReviews = this.getRatingsReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
          reviews: reviews.data.results
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

  render() {
    return (
      <div className='reviews-section-container'>
       <h2>Sorted List of Reviews</h2>

       <div className='list-container'>
       <ReviewsList review={this.state.reviews} value={this.state.sortValue}/>
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