import React from 'react';

import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import ClickableStar from './ClickableStar.jsx';

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_sku: '',
      current_size: '',
      current_quantity: 0
    }
    this.selectSize = this.selectSize.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
  }

  selectSize(size) {
    console.log(`selecting size: ${size}`);
    this.setState({
      current_sku: this.props.sizeInfo[size].sku,
      current_size: size
    });
  }

  selectQuantity(qty) {
    if (this.state.current_size) {
      console.log(`selecting quantity: ${qty}`);
      this.setState({ current_quantity: qty })
    }
  }

  render() {
    const sizeOptions = Object.keys(this.props.sizeInfo);
    let maxQuantity = this.state.current_sku ? this.props.currentStyle.skus[this.state.current_sku].quantity : 0;
    maxQuantity = maxQuantity <= 15 ? maxQuantity : 15;
    return (
      <div className="add-to-cart">
        <SizeSelector sizeOptions={sizeOptions} selectSize={this.selectSize} />
        <QuantitySelector maxQuantity={maxQuantity} selectQuantity={this.selectQuantity} />
        <button className="add-to-cart-button">Add to Cart</button>
        <ClickableStar />
      </div>
    );
  }
}