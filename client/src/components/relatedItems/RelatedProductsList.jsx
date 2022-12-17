import React from 'react';
import SingleCard from './SingleCard.jsx';

export default class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'star'
    }
  }

  render() {
    return (
      <div className= "relatedProductsList">
        <h2>RELATED PRODUCTS</h2>
        <div className="related-items-container">
        {this.props.relatedItemsId.map(id => (
          <SingleCard key={id} id={id} icon={this.state.icon} currentProductFeature={this.props.currentProductFeature}/>
        ))}
        </div>
      </div>
    )
  }
}