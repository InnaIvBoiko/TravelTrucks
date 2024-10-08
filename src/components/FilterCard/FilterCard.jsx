import css from './FilterCard.module.css';

export default function FilterCard({ text, icon }) {
    return (
        <span className={css.wrap}>
            {icon}
            <p className={css.text}>{ text}</p>
        </span>
    )
}