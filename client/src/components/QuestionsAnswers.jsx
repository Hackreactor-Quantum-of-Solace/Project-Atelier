import React from 'react';
import axios from 'axios';

import QuestionsList from './questionsAnswers/QuestionsList.jsx';
import QuestionSearch from './questionsAnswers/QuestionSearch.jsx';

export default class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      questionsAndAnswers: []
    };
    this.getQuestionsAndAnswers = this.getQuestionsAndAnswers.bind(this);
  }

  getQuestionsAndAnswers(id) {
    axios.get(`/qa/questions?product_id=${id}&count=10`)
    .then(response => {
      this.setState({ questionsAndAnswers: response.data.results});
    });
  }

  componentDidMount() {
    this.getQuestionsAndAnswers(this.props.productId);
  }

  render() {
    return (
      <div className={`questions-container`}>
        <h5 className="questions-title">QUESTIONS & ANSWERS</h5>
        <QuestionSearch/>
        <QuestionsList qList={ this.state.questionsAndAnswers } />
      </div>
    );
  }
}