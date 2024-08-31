import css from './FilterCard.module.css';

export default function FilterCard({ text, icon }) {
    return (
        <button type='button' className={css.wrap}>
            <span>{icon}</span>
            <p className={css.text}>{ text}</p>
        </button>
    )
}