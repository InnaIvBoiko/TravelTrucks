import Button from '../Button/Button';
import EquipmentFilterCards from '../EquipmentFilterCards/EquipmentFilterCards';
import MapIcon from '../Icons/StarIcon/MapIcon/MapIcon';
import TypeFilterCards from '../TypeFilterCards/TypeFilterCards';
import css from './SearchBox.module.css';

export default function SearchBox() {
    return (
        <div className={css.wrap}>
            <div className={css.relative}>
                <p className={css.text}>Location</p>
                <input
                    className={css.location} type="text" name='location'
                    placeholder='City'
                />
                <span className={css.icon}>
                    <MapIcon />
                </span>
            </div>
            <h3 className={css.heading}>Filters</h3>
            <div>
                <h2 className={css.title} >Vehicle equipment</h2>
                <div className={css.line}></div>
                <EquipmentFilterCards />
            </div>
            <div>
                <h2 className={css.title} >
                    Vehicle type
                </h2>
                <div className={css.line}></div>
                <TypeFilterCards />
            </div>
            <Button btnText={'Search'}></Button>
        </div>
    );
}