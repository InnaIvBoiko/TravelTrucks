import MapIcon from '../Icons/StarIcon/MapIcon/MapIcon.jsx';
import StarIcon from '../Icons/StarIcon/StarIcon.jsx';
import css from './LocationInfo.module.css';

export default function LocationInfo({ rating, reviews, location }) {
    const reviewsCount = reviews.length;
    
    return (
        <div className={css.row}>
            <p className={css.text}>
                <span className={css.iconWrap}>
                    <StarIcon />
                </span>
                {rating} ({reviewsCount} Reviews)
            </p>
            <p className={css.text}>
                <span className={css.iconWrap}>
                    <MapIcon />
                </span>
                {location}
            </p>
        </div>
    );
}