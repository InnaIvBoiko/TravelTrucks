import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers} from '../../campers-api.js';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import css from './Catalog.module.css';

export default function Catalog() {
    const dispatch = useDispatch();
    
    const isLoading = useSelector((state) => state.campers.loading)
    
    const [visibleItem, setVisibleItem] = useState(4);

    const handleLoadMore = () => {
        setVisibleItem(prevItem => prevItem + 4);
    };

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return (
        <main className={css.container}>
            {isLoading && <b>Loading campers...</b>}
            <SearchBox/>
            <CampersList loadMore={handleLoadMore} visibleItem={ visibleItem} />
        </main>
    )
}