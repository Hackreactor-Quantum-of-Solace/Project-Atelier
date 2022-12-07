export default function(props) {
  const stars = {
    clicked: '⭐',
    unclicked: '☆'
  }
  return (
    <button className="clickable-star">{stars.unclicked}</button>
  );
}