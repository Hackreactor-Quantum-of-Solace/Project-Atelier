import React from 'react';

export default class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <div className="comparison-modal">
        <p>COMPARING</p>
        <div>
          <p>{this.props.currentProductName}</p>
          {this.props.currentProductFeature.map((item, index) => (
            <p key ={index}>c: {item.feature} v: {item.value}</p>
          ))}
        </div>
        <div>
          <p>{this.props.relatedProductName}</p>
          {this.props.relatedProductFeature.map((item, index) => (
            <p key={index}>c: {item.feature} v: {item.value}</p>
          ))}
        </div>
      </div>
    )
  }
}

