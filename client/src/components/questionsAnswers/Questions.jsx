import React from 'react';

import Answers from './Answers.jsx';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
    return (
      <div>
        <h3>User: {this.props.asker}</h3>
        <span>Q: {this.props.body}</span>
        <div>
          <h5>responses</h5>
          {Object.keys(this.props.answerList).map(key => (
            <Answers key={key}
              user={this.props.answerList[key].answerer_name}
              body={this.props.answerList[key].body}
              date={this.props.answerList[key].date} />
          ))}
        </div>
      </div>
    )
  }
}