import React from 'react';
import Overview from './Overview.jsx';
import ReviewList from './RatingsReview/List/ReviewList.jsx';
import Review from './RatingsReview/List/ReviewTile.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Overview />
        <ReviewList />
        <QuestionsAnswers />
      </div>
    );
  }
};