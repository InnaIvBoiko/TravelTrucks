import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem.jsx';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import { selectFilteredCampers } from '../../redux/campersSlice.js';
import css from './CampersList.module.css';
    
export default function CampersList({ loadMore, visibleItem }) {
    
    const visibleCampers = useSelector(selectFilteredCampers);

    return (
        <div className={css.wrap}>
            <ul className={css.list}>
                {visibleCampers.slice(0, visibleItem).map((camper) => (    
                <li key={camper.id}>
                        <CamperItem camper={camper} />
                    </li>
                ))}
            </ul>
            {visibleItem < visibleCampers.length && <LoadMoreBtn loadMore={loadMore} />}
        </div>
    );
}