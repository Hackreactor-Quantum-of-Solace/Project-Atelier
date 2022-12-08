import React from 'react';
import axios from 'axios';

import RelatedProductsList from './relatedItems/RelatedProductsList.jsx';
import OutfitList from './relatedItems/OutfitList.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    //suppose each product will be loaded with `?id=${givenNumber}` in the url
    super(props);
    //console.log('relateItems',this.props.productId)
    this.state = {
      //save relatedItemsId of the overview product
      relatedItemsId: [],
    }

    this.getRelatedItemsId = this.getRelatedItemsId.bind(this);
  }
  componentDidMount() {
    this.getRelatedItemsId();
  }

  getRelatedItemsId() {
    axios({
      method: 'get',
      url: `/products/${this.props.productId}/related`,
    })
    .then((response) => {
      //console.log(response.data);
      this.setState({
        relatedItemsId: response.data
      });
    })
    .catch((err) => {
      console.log('getRelatedItemsID ERROR', err);
    })

  }
  render() {
    return (
      <div className = "relatedItems">
         < RelatedProductsList relatedItemsId={this.state.relatedItemsId}/>

        < OutfitList />
      </div>
    )
  }
}