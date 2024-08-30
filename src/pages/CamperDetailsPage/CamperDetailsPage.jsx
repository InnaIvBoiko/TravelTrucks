import { useParams } from "react-router-dom";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import { useEffect, useState } from "react";
import { getCamperById } from "../../campers-api";
import CamperData from "../../components/CamperData/CamperData";

export default function CamperDetailsPage() {
    const { id } = useParams();
    const [camperData, setCamperData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return;

        async function fetchCamper() {
            try {
                setLoading(true);
                const data = await getCamperById(id);
                setCamperData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCamper();
    }, [id]);

    if (!camperData) {
        return ;
    };

    return (
        <>
            {loading && <b>Loading details of camper...</b>}
            <CamperData camper={camperData}/>
            <CamperFeatures camper={camperData}/>
            <CamperReviews camper={camperData}/>
        </>
   )
}