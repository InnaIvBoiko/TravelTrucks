import CamperItem from '../CamperItem/CamperItem.jsx';
import css from './CampersList.module.css';
    
export default function CampersList({ campers }) {
    return (
        <ul className={css.list}>
            {campers.map((camper) => (
                <li key={camper.id}>
                    <CamperItem camper={camper} />
                </li>
            ))}
        </ul>
    );
}