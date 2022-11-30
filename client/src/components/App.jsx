import React from 'react';
import Overview from './Overview.jsx';
import ReviewList from './RatingsReview/ReviewList.jsx';
import Review from './RatingsReview/Review.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Overview />
        <ReviewList />
      </div>
    );
  }
};