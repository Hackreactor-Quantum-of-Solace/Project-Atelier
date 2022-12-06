export default function(props) {
  const product_info = props.product_info || {};

  return (
    <div className="product-info">
      <h2>{product_info.name}</h2>
    </div>
  );
}