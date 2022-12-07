import React from 'react';
import axios from 'axios';

import AddToCart from './overview/AddToCart.jsx';
import ImageGallery from './overview/ImageGallery.jsx';
import ProductInfo from './overview/ProductInfo.jsx';
import StyleSelector from './overview/StyleSelector.jsx';
import ProductOverview from './overview/ProductOverview.jsx';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_info: {},
      product_styles: [],
      currentStyle: {}
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
  }

  getProductInfo(id) {
    axios.get(`/products/${id}`)
    .then(response => this.setState({ product_info: response.data }))
    .catch(err => console.log(`unable to retrieve product info for product with id ${id}`, err));
  }

  getProductStyles(id) {
    axios.get(`/products/${id}/styles`)
    .then(response => {
      let currentStyle = response.data.results.find(style => style['default?'] === true);
      this.setState({ product_styles: response.data.results, currentStyle });
    })
    .catch(err => console.log(`unable to retrieve product styles for product with id ${id}`, err));
  }

  changeCurrentStyle(style) {
    this.setState({ currentStyle: style });
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const product_id = queryParams.get('id');
    this.getProductInfo(product_id);
    this.getProductStyles(product_id);
  }

  render() {
    return (
      <div className="overview-container">
        <ImageGallery product_info={this.state.product_info} />
        <div className="user-selection-bar">
          <ProductInfo product_info={this.state.product_info} />
          <StyleSelector
            styles={this.state.product_styles}
            currentStyle={this.state.currentStyle}
            changeCurrentStyle={this.changeCurrentStyle} />
          <AddToCart product_info={this.state.product_info} />
        </div>
        <ProductOverview product_info={this.state.product_info} />
      </div>
    );
  }
}