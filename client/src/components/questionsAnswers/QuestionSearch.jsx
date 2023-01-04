import React from 'react';


export default class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
    return (
      <div className="questions-search-bar">
        <input type="text" className="ui-input-text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <span className="img-magnify-glass img-icon">&#x1F50E;&#xFE0E;</span>
      </div>
    )
  }

}