export default function(props) {
  const product_info = props.product_info || {};
  const price = product_info.default_price ? `$${product_info.default_price}` : '';

  return (
    <div className="ov-product-info">
      <p className="ov-product-rating">star rating
        <span className="ov-reviews-link"><a href="#">Read all reviews</a></span>
      </p>
      <p className="ov-category">{product_info.category}</p>
      <h2 className="ov-product-name">{product_info.name}</h2>
      <p className="ov-price">{price}</p>
    </div>
  );
}