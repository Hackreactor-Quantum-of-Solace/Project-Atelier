import React from 'react';

import AddToCart from './overview/AddToCart.jsx';
import ImageGallery from './overview/ImageGallery.jsx';
import ProductInfo from './overview/ProductInfo.jsx';
import StyleSelector from './overview/StyleSelector.jsx';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overview-container">
        <ImageGallery />
        <div className="user-selection-bar">
          <StyleSelector />
          <AddToCart />
        </div>
        <ProductInfo />
      </div>
    );
  }
}