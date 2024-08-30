import StarIcon from '../StarIcon/StarIcon';
import css from './CamperReviews.module.css';

export default function CamperReviews({ camper: {
    reviews
}}) {
    return (
        <ul className={css.reviewsList}>
            {reviews.map((review, index) => (
                <li key={index}>
                    <div className={css.name}>
                        <div className={css.circle}>{review.reviewer_name.charAt(0)}</div>
                        <div>
                            <p>{review.reviewer_name}</p>
                            {/* <span>{review.reviewer_rating}</span> */}
                            <span>
                                {Array.from({ length: review.reviewer_rating }, (_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </span>
                        </div>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                </li>
            ))}
        
        
        </ul>
    );
}