import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import css from './CamperItem.module.css';
import Categories from '../Categories/Categories';
import LocationInfo from '../LocationInfo/LocationInfo';

export default function CamperItem({ camper: {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    transmission,
    AC,
    engine,
    kitchen,
    radio,
    bathroom,
} }){
    const url = gallery[0].thumb;

    return (
        <div className={css.card}>
            <img className={css.photo} src={url} alt={name} />
            <div className={css.info}>
                <div className={css.main}>
                    <h2 className={css.name}>{name}</h2>
                    <p className={css.name}>€<span>{price}</span>.00</p>
                </div>

                <LocationInfo
                    rating={rating}
                    reviews={reviews}
                    location={location}
                />
                
                <p className={css.description}>
                    {description}
                </p>

                <Categories
                    transmission={transmission}
                    AC={AC}
                    engine={engine}
                    kitchen={kitchen}
                    radio={radio}
                    bathroom={bathroom}
                />

                <Link to={`/catalog/${id}`} >
                    <Button btnText={'Show more'} />
                </Link>
               
            </div>
        </div>
    );
}
