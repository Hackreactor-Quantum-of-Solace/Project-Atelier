import React from 'react';
import Overview from './Overview.jsx';
import RatingsReviews from './ratingsReviews/RatingsReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RelatedItems from './RelatedItems.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: new URLSearchParams(window.location.search).get('id'),
      cart: {},
      outfit: []
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(sku, qty) {
    let currentQuantityInCart = this.state.cart[sku] || 0;
    this.setState({
      cart: {
        ...this.state.cart,
        [sku]: currentQuantityInCart + qty
      }
    });
  }

  // TODO - delete item if none left in cart...currently the cart will hold
  // the sku with a quantity of 0
  removeFromCart(sku, qty) {
    if (!this.state.cart[sku]) return;
    let newQuantity = this.state.cart[sku] - qty;
    newQuantity = newQuantity > 0 ? newQuantity : 0;
    this.setState({
      cart: {
        ...this.state.cart,
        [sku]: newQuantity
      }
    });
  }

  render() {
    return (
      <div>
        <Overview productId={this.state.product_id} />
        <RatingsReviews productId={this.state.product_id} />
        <QuestionsAnswers productId={this.state.product_id} />
        <RelatedItems productId={this.state.product_id}/>
      </div>
    );
  }
};