import React from 'react';

import Answers from './Answers.jsx';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
    var hide = false;
    if(Object.keys(this.props.answerList).length === 0) {
      hide = true;
    }
    return (
      <div>
        <span className="question">Q: {this.props.body}</span>
        <span className="question-details">Helpful? Yes &#40;{this.props.helped}&#41;  |  Report</span>
        <div className="break-big"></div>
        <span className="question answer" hidden={hide}> A:  </span>
        <div>
          {Object.keys(this.props.answerList).map(key => (
            <Answers key={key}
              user={this.props.answerList[key].answerer_name}
              body={this.props.answerList[key].body}
              date={this.props.answerList[key].date}
              helpfulness={this.props.answerList[key].helpfulness}/>
          ))}
        </div>
      </div>
    )
  }
}