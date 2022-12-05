import React from 'react';

import Questions from './questionsAnswers/Questions.jsx';
import QuestionsList from './questionsAnswers/QuestionsList.jsx';
import PostQuestions from './questionsAnswers/PostQuestions.jsx';

export default class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Q&A section</h1>
        <QuestionsList />
        <div>
          <Questions />
        </div>
        <PostQuestions />
      </div>
    );
  }
}