import React from 'react';
import axios from 'axios';

import AddToCart from './overview/AddToCart.jsx';
import ImageGallery from './overview/ImageGallery.jsx';
import ProductInfo from './overview/ProductInfo.jsx';
import StyleSelector from './overview/StyleSelector.jsx';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_info: {}
    };
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  getProductInfo(id) {
    axios.get(`/products/${id}`)
    .then(response => this.setState({ product_info: response.data }))
    .catch(err => console.log(`unable to retrieve product info for product with id ${id}`, err));
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const product_id = queryParams.get('id');
    this.getProductInfo(product_id);
  }

  render() {
    return (
      <div className="overview-container">
        <ImageGallery product_info={this.state.product_info} />
        <div className="user-selection-bar">
          <StyleSelector product_id={this.state.product_info} />
          <AddToCart product_id={this.state.product_info} />
        </div>
        <ProductInfo product_id={this.state.product_info} />
      </div>
    );
  }
}