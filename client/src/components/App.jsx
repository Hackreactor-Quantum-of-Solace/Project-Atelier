import React from 'react';
import ReviewList from './RatingsReview/ReviewList.jsx';
import Review from './RatingsReview/Review.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ReviewList />
      </div>
    );
  }
};