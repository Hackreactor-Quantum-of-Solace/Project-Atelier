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
      <div className= "related-products-list">
        <h2>RELATED PRODUCTS</h2>
        <div className="related-items-container">
        {this.props.relatedItemsId.map(id => (
          <SingleCard key={id} id={id} icon={this.state.icon} currentProductFeature={this.props.currentProductFeature}/>
        ))}
        </div>
        {/* this div is used to contain Modal component. By default, it's empty, when customer hover mouse to star icon, it will wrap modal component into it */}
        <div className="modal-container"></div>

      </div>
    )
  }
}