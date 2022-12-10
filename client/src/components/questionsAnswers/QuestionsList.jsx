import React from 'react';

import Questions from './Questions.jsx';
import PostQuestions from './PostQuestions.jsx';

export default class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
  }





  render () {
    return (
      <div>
        <h3>I hold the questions and answers!</h3>
        <div>
          {this.props.qList.map(q => (
            <Questions key={q.question_id} body={q.question_body} date= {q.question_date}
              asker={q.asker_name} helped={q.question_helpfulness} reported={q.reported}
              answerList={q.answers}/>
          ))}
        </div>
          <PostQuestions />
      </div>
    )
  }
}