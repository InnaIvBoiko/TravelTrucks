import { useState, useEffect } from 'react';
import { getCampers } from '../../campers-api.js';
import CampersList from '../../components/CampersList/CampersList.jsx';

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
        <>
            {isLoading && <b>Loading campers...</b>}
            <CampersList campers={campers} loadMore={handleLoadMore} visibleItem={ visibleItem} />
        </>
    )
}