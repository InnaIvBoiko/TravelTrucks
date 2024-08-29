import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import css from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={css.container}>
            <Link to={'/'} className={css.logo}>
                <Logo />
            </Link>
            <ul className={css.navMenu}>
                <li>
                    <Link to={'/'} className={css.navMenuItem}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to={'/catalog'} className={css.navMenuItem}>
                    Catalog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}