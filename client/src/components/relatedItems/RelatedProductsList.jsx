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
      <div class= "relatedProductsList">
        <h2>Related Products</h2>
        {this.props.relatedItemsId.map(id => (
          <SingleCard key={id} id={id} icon={this.state.icon}/>
        ))}
      </div>
    )
  }
}