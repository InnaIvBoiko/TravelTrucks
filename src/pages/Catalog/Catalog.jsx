import { useState, useEffect } from 'react';
import { getCampers } from '../../campers-api.js';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import css from './Catalog.module.css';

export default function Catalog() {
    const [campers, setCampers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleItem, setVisibleItem] = useState(4);

    const handleLoadMore = () => {
        setVisibleItem(prevItem => prevItem + 4);
    };

    useEffect(() => {
        async function fetchCampers() {
            try {
                setIsLoading(true);
                const data = await getCampers();
                setCampers(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCampers();
    }, []);

    return (
        <main className={css.container}>
            {isLoading && <b>Loading campers...</b>}
            <SearchBox/>
            <CampersList campers={campers} loadMore={handleLoadMore} visibleItem={ visibleItem} />
        </main>
    )
}