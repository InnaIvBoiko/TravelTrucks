import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <section className={css.mainSection}>
            <div className={css.textWrap}>
                <h1 className={css.title} >Campers of your dreams</h1>
                <p className={css.text}>
                    You can find everything you want in our catalog
                </p>
            </div>
            <Link to={'/catalog'} >
                <Button btnText='View Now' />
            </Link>
        </section>
    );
}

 