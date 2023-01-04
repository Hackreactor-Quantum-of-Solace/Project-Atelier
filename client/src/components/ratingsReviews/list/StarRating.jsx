import StarIcon from '../../../../images/star.svg';

export default function(props) {
  const percentage = Math.round(props.rating/5 *100);
  return (
    <div className="star-rating" >
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <div className="stars-overlay" style={{ width: `${100 - percentage}%`}}></div>
    </div>
  )
}