export default function(props) {
  let options = [];
  for (let i = 1; i <= props.maxQuantity; i++) {
    options.push(<option key={i}>{i}</option>);
  }

  return (
    <select
      className="quantity-selector"
      onChange={(e) => props.selectQuantity(parseInt(e.target.value))}
    >
      {options.length ? options : <option>1</option>}
    </select>
  );
}