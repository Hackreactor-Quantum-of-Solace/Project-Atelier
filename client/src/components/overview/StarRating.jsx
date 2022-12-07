import StarIcon from '../../../images/star-icon.svg';
import { roundToNearestQuarter } from '../../../../helpers/helpers.js';

export default function(props) {
  const rating = roundToNearestQuarter(props.rating);
  return (
    <div className="star-rating">
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />
      <img className="star-icon" src={StarIcon} alt="star-icon" />

      <div className="stars-overlay"></div>
    </div>
  );
}