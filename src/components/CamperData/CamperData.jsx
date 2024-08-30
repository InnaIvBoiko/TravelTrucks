import LocationInfo from '../LocationInfo/LocationInfo';
import css from './CamperData.module.css';

export default function CamperData({ camper: {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
} }) {
    return (
        <div className={css.wrap}>
            <div className={css.details}>
                <h2 className={css.name}>{name}</h2>
                <LocationInfo
                    rating={rating}
                    reviews={reviews}
                    location={location}
                />
                <p className={css.price}>€<span>{price}</span>.00</p>
            </div>
            <ul className={css.gallery}>
                {gallery.map((item, index) => (
                    <li key={index}>
                        <img className={css.photo} src={item.thumb} alt={name} />
                    </li>
                ))}
            </ul>
            <p className={css.description}>{description}</p>
        </div>
    );
}