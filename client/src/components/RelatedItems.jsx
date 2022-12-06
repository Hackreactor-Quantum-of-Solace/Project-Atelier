import React from 'react';
import axios from 'axios';

import RelatedProductsList from './relatedItems/RelatedProductsList.jsx';
import OutfitList from './relatedItems/OutfitList.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    //suppose overview product_id is 71697 which should be props in APP.jsx
    super(props);
    this.state = {
      //save relatedItemsId of the overview product
      relatedItemsId: [],
      hasRelatedItems:false
    }

    this.getRelatedItemsId = this.getRelatedItemsId.bind(this);
  }
  componentDidMount() {
    this.getRelatedItemsId();
  }
  getRelatedItemsId() {
    axios({
      method: 'get',
      //the correct url should be <`/products/${this.props.id}/related` >
      //this url is a given product_id test
      url: '/products/71697/related'
    })
    .then((response) => {
      //console.log(response.data);
      this.setState({
        relatedItemsId: response.data,
        hasRelatedItems: true
      });

    })
  }
  render() {
    return (
      <div className = "relatedItems">
        {this.state.hasRelatedItems ? < RelatedProductsList relatedItemsId={this.state.relatedItemsId}/> : null}
        < OutfitList />
      </div>
    )
  }
}