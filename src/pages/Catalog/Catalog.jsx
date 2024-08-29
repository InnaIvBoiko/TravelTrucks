import { useState, useEffect } from 'react';
import { getCampers } from '../../campers-api.js';
import CampersList from '../../components/CampersList/CampersList.jsx';

export default function Catalog() {
    const [campers, setCampers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCampers() {
            try {
                setLoading(true);
                const data = await getCampers();
                setCampers(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCampers();
    }, []);


    return (
        <>
            {loading && <b>Loading campers...</b>}
            <CampersList campers={campers} />
        </>
    )
}