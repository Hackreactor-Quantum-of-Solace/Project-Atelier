import StyleIcon from './StyleIcon.jsx';

export default function(props) {
  let currentStyle = props.currentStyle || {};
  return (
    <div className="style-selector">
      <h4 className="style-label">Style ><span className="current-style-name">{currentStyle.name}</span></h4>
      <div className="style-icons">
        {props.styles.map((style, i) => (
          <StyleIcon
            key={i}
            style={style}
            currentStyle={props.currentStyle.style_id === style.style_id}
            onClick={props.changeCurrentStyle}
          />
        ))}
      </div>
    </div>
  );
}