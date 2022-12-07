export default function(props) {
  let currentStyle = props.currentStyle || {};
  return (
    <div className="style-selector">
      <h4 className="style-label">Style ><span className="current-style-name">{currentStyle.name}</span></h4>
    </div>
  );
}