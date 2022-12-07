import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import ClickableStar from './ClickableStar.jsx';

export default function() {
  return (
    <div className="add-to-cart">
      <SizeSelector />
      <QuantitySelector />
      <button className="add-to-cart-button">Add to Cart</button>
      <ClickableStar />
    </div>
  );
}