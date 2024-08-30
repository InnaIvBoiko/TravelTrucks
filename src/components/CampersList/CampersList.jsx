import CamperItem from '../CamperItem/CamperItem.jsx';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';


import css from './CampersList.module.css';
    
export default function CampersList({ campers, loadMore, visibleItem }) {
    
    return (
        <div className={css.wrap}>
            <ul className={css.list}>
                {campers.slice(0, visibleItem).map((camper) => (
                    <li key={camper.id}>
                        <CamperItem camper={camper} />
                    </li>
                ))}
            </ul>
            {visibleItem < campers.length && <LoadMoreBtn loadMore={loadMore} />}
        </div>
    );
}