export default function(props) {
  return (
    <select className="size-selector">
      <option default>Select Size</option>
      {props.sizeOptions.map((size, i) => {
        <option key={i} onChange={() => props.selectSize(size)}>{size}</option>
      })}
    </select>
  );
};