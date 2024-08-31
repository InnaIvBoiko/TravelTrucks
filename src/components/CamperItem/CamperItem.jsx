import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button.jsx";
import Categories from '../Categories/Categories.jsx';
import LocationInfo from '../LocationInfo/LocationInfo.jsx';
import Heart from '../Icons/Heart/Heart.jsx';
import HeartActive from '../Icons/Heart/HeartActive.jsx';
import css from './CamperItem.module.css';

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

    const [isFavorited, setIsFavorited] = useState(true);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favoriteCampers')) || [];
        setIsFavorited(favorites.includes(id));
    }, [id]);

     const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favoriteCampers')) || [];
         if (isFavorited) {
              const updatedFavorites = favorites.filter(favId => favId !== id);
            localStorage.setItem('favoriteCampers', JSON.stringify(updatedFavorites));
        } else {
            favorites.push(id);
            localStorage.setItem('favoriteCampers', JSON.stringify(favorites));
        }

        setIsFavorited(!isFavorited);
    };
            
    return (
        <div className={css.card}>
            <img className={css.photo} src={url} alt={name} />
            <div className={css.info}>
                <div className={css.main}>
                    <h2 className={css.name}>{name}</h2>
                    <div className={css.main} onClick={toggleFavorite}>
                        <p className={css.name}>€<span>{price}</span>.00</p>
                        {!isFavorited ? (<Heart />):(<HeartActive/>)}
                        
                    </div>
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
