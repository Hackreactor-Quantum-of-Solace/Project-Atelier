import React from 'react';

import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import ClickableStar from './ClickableStar.jsx';

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    let sizeInfo = {};
    for (const [sku, skuInfo ] in this.props.currentStyle.skus) {
      sizeInfo[skuInfo.size] = { sku, quantity: skuInfo.quantity }
    }
    this.state = {
      sizes: sizeInfo,
      current_sku: ''
    }
    this.selectSize = this.selectSize.bind(this);
  }

  selectSize(size) {
    this.setState({ current_sku: this.state.sizes[size].sku });
  }

  render() {
    const sizeOptions = Object.keys(this.state.sizes);
    const maxQuantity = this.state.current_sku ? this.props.currentStyle.skus[this.state.current_sku].quantity : 0;
    return (
      <div className="add-to-cart">
        <SizeSelector sizeOptions={sizeOptions} selectSize={this.selectSize} />
        <QuantitySelector maxQuantity={maxQuantity} />
        <button className="add-to-cart-button">Add to Cart</button>
        <ClickableStar />
      </div>
    );
  }
}