import React from 'react';
import axios from 'axios';

import RelatedProductsList from './relatedItems/RelatedProductsList.jsx';
import OutfitList from './relatedItems/OutfitList.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    //suppose each product will be loaded with `?id=${givenNumber}` in the url
    super(props);
    this.state = {
      //save relatedItemsId of the overview product
      relatedItemsId : [],
      currentProductFeature : [],
      currentProductName: ''
    }

    this.getRelatedItemsId = this.getRelatedItemsId.bind(this);
    this.getCurrentProductFeature = this.getCurrentProductFeature.bind(this);
  }
  componentDidMount() {
    this.getRelatedItemsId();
    this.getCurrentProductFeature();
  }

  getRelatedItemsId() {
    axios({
      method : 'get',
      url : `/products/${this.props.productId}/related`,
    })
    .then((response) => {
      this.setState({
        relatedItemsId: response.data
      });
    })
    .catch((err) => {
      console.log('Get Related Items ID ERROR', err);
    });

  }
  getCurrentProductFeature() {
    axios({
      method: 'get',
      url: `/products/${this.props.productId}`,
    })
    .then((response) => {
      this.setState({
        currentProductFeature : response.data.features,
        currentProductName: response.data.name
      });
    })
    .catch((err) => {
      console.log('Get Current Product Feature ERROR', err);
    });
  }
  render() {
    return (
      <>
        <RelatedProductsList
        relatedItemsId={this.state.relatedItemsId}
        currentProductFeature={this.state.currentProductFeature}
        currentProductName={this.state.currentProductName}/>

        <OutfitList
        productId={this.props.productId}
        outfit={this.props.outfit}
        addToOutfit={this.props.addToOutfit}
        removeFromOutfit={this.props.removeFromOutfit}/>
      </>

    )
  }
}