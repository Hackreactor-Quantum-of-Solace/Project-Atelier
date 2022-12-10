import React from 'react';



export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
    return (
      <div>
        <h5>User: {this.props.user}</h5>
        <span>Responded with: {this.props.body}</span>
      </div>
    )
  }
}