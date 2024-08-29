import { Link } from 'react-router-dom';
import Button from "../Button/Button";

export default function CamperItem({ camper: {
    id,
    name,
    price,
    rating,
    location,
    description,
} }){

    const camperId = `${id}`;
    const url = `https://ftp.goit.study/img/campers-test-task/${camperId}-1.webp`; 
    
    return (
        <div>
            <img src={url} alt={name} />
            <div>
                <div>
                    <p>{name}</p>
                    <p>€<span>{price}</span>.00</p>
                </div>
                <div>
                    <p>{rating}</p>
                </div>
                <p>
                    {description}
                </p>
                <Link to={`/catalog/${id}`} >
                    <Button btnText={'Show more'} />
                </Link>
               
            </div>
        </div>
    );
}
