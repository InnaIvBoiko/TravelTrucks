import { useParams } from "react-router-dom";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import { useEffect, useState } from "react";
import { getCamperById } from "../../campers-api";
import CamperData from "../../components/CamperData/CamperData";
import BookForm from "../../components/BookForm/BookForm";
import css from './CamperDetailsPage.module.css';

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
        <section className={css.container}>
            {loading && <b>Loading details of camper...</b>}
            <CamperData camper={camperData} />
            <div className={css.switch}>
                <h2 className={css.switchItem}>Features</h2>
                <h2 className={css.switchItem}>Reviews</h2>
            </div>
            <div className={css.info}> 
                {/* <CamperFeatures camper={camperData}/> */}
                <CamperReviews camper={camperData} />
                <BookForm />
            </div>
        </section>
   )
}