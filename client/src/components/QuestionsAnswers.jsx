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
        <QuestionsList />
        <div>
          <Questions />
        </div>
        <PostQuestions />
      </div>
    );
  }
}