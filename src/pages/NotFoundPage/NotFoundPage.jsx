import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return (
        <section className={css.container}>
            <p>Opps! Page not found! Sorry!</p>
            <p>
                Please visit out
            </p>
            <Link to='/'>
                <Button btnText={'Home page'} />

            </Link>
        </section>
    );
}