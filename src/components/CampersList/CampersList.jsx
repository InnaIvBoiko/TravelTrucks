import CamperItem from '../CamperItem/CamperItem.jsx';
    
export default function CampersList({ campers }) {
    return (
        <ul>
            {campers.map((camper) => (
                <li key={camper.id}>
                    <CamperItem camper={camper} />
                </li>
            ))}
        </ul>
    );
}