import React from 'react';

export default class ComparisonMedal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.featureCompare = this.featureCompare.bind(this);
  }
  featureCompare() {

  }
  componentDidMount() {
    this.featureCompare();
  }

  render() {
    return (
      <div className="comparisonMedal" style={{"border": "1px solid red"}}>
        <h2>Comparing</h2>
        <div>current
          {this.props.currentProductFeature.map((item, index) => (
            <p key ={index}>c: {item.feature} v: {item.value}</p>
          ))}
        </div>
        <div>related
          {this.props.relatedProductFeature.map((item, index) => (
            <p key={index}>c: {item.feature} v: {item.value}</p>
          ))}
        </div>
      </div>
    )
  }
}

