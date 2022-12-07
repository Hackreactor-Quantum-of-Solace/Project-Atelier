export default function(props) {
  return (
    <span className="star-rating">{props.rating.toFixed(2)} stars</span>
  );
}