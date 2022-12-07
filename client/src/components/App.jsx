import React from 'react';
import Overview from './Overview.jsx';
import RatingsReviews from '../components/ratingsReviews/RatingsReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RelatedItems from './RelatedItems.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '71697'
    }
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const product_id = queryParams.get('id');
    this.setState({ product_id });
  }

  render() {
    return (
      <div>
        <Overview productId={this.state.product_id} />
        <RatingsReviews productId={this.state.product_id} />
        <QuestionsAnswers productId={this.state.product_id} />
        <RelatedItems productId={this.state.product_id}/>
      </div>
    );
  }
};