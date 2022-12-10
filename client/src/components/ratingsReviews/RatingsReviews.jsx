import React from 'react';
import axios from 'axios';

import ReviewsList from './list/ReviewsList.jsx';
import ReviewsTile from './list/ReviewsTile.jsx';
import ReviewsSort from './list/ReviewsSort.jsx';


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
    console.log('sorting by' + this.state.sortValue);
    event.preventDefault();
  }

  render() {
    return (
      <div>
       <h2>Sorted List of Reviews</h2>

       <div className='list-container'>
        {/* map here, then send each single reivew to  */}
       <ReviewsTile review={this.state.reviews} sortValue={this.state.sortValue}/>
       </div>
       <form onSubmit={this.handleSubmit}>
        <label>
          Sort by:
          <select sortValue={this.state.value} onChange={this.handleChange}>
            <option sortValue="date">date</option>
            <option sortValue="helpfulness">helpfulness</option>
            <option sortValue="relevant">relevant</option>
          </select>
        </label>
       </form>

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