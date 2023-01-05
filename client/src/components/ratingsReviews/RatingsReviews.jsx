import React from 'react';
import axios from 'axios';

import ReviewsList from './list/ReviewsList.jsx';
import ReviewsTile from './list/ReviewsTile.jsx';
import ReviewsSort from './list/ReviewsSort.jsx';
import NewReviewForm from './form/NewReviewForm.jsx';
import AverageRating from './list/AverageRating.jsx';


export default class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      visibleReviews: [],
      averageRating: 0,
      sortValue: 'relevance'
    };
    this.getRatingsReviews = this.getRatingsReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.increaseHelpfulnessCount = this.increaseHelpfulnessCount.bind(this);

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
        var totalRating = 0;

        for (var i = 0; i < reviews.data.results.length; i++) {
          totalRating = totalRating + reviews.data.results[i].rating
        }

        this.setState({
          reviews: reviews.data.results,
          visibleReviews: reviews.data.results.slice(0,2),
          averageRating: totalRating/reviews.data.results.length
        });

      })
      .catch( (err) => {
        console.log(err);
      });
  }

  increaseHelpfulnessCount(reviewId, helpfulnessCount) {
    console.log('hello', reviewId)

    // console.log(helpfulnessCount, 'helpfulnessCount RatingsReviews')
    // helpfulnessCount++
    // console.log(helpfulnessCount, 'helpfulnessCount + 1, RatingsReviews')

    let config = {
      url: `/reviews/${reviewId}/helpful`,
      method: 'put',
      data: {
        helpfulnessCount: helpfulnessCount++
      }
    };

    axios(config)
      .then (
    this.getRatingsReviews(this.props.productId)
    )
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

    this.setState({
      visibleReviews: this.state.reviews.slice(0,4)
    });
  }

  render() {
    return (
      <div className='reviews-section-container'>
        <div className='reviews-header'>
        <h1>Ratings & Reviews</h1>
        </div>

       <div className='ratings-container'>
       <h2>Ratings</h2>
       <AverageRating averageRating={this.state.averageRating}/>
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
       <ReviewsList review={this.state.reviews} visibleReviews={this.state.visibleReviews} value={this.state.sortValue} increaseHelpfulnessCount={this.increaseHelpfulnessCount}/>
       </div>
       <div>
        <button onClick={this.handleMoreReviews}>
          More Reviews
        </button>
       </div>
       <NewReviewForm />
      </div>





    )
  }
}