import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useId } from 'react';
import { setFilters, resetFilters, loadFilters } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';


export default function SearchBox() {
    const dispatch = useDispatch();
    const filters = useSelector((state)=> state.filters);
    console.log(filters)

    const locationId = useId();

    useEffect(() => {
        dispatch(loadFilters());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        const filterValue = type === 'checkbox' ? checked : value;
        dispatch(setFilters({ [name]: filterValue }));
    };
    const handleReset = () => {
        dispatch(resetFilters());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
        
    return (
        <div className={css.wrap}>
            <form onSubmit={handleSubmit}>
                <label htmlFor={locationId}>Location</label>
                <input
                    type="text"
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    placeholder='City'
                />

                
                <label>
                    <input
                        type='checkbox'
                        name='AC'
                        checked={filters.AC}
                        onChange={handleChange}
                    />
                    AC
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='automatic'
                        checked={filters.automatic}
                        onChange={handleChange}
                    />
                    Automatic
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='kitchen'
                        checked={filters.kitchen}
                        onChange={handleChange}
                    />
                    Kitchen
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='TV'
                        checked={filters.TV}
                        onChange={handleChange}
                    />
                    TV
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='bathroom'
                        checked={filters.bathroom}
                        onChange={handleChange}
                    />
                    Bathroom
                </label>

            
                <label>
                    <input
                        type='radio'
                        name='form'
                        value='panelTruck'
                        onChange={handleChange}
                    />
                    Van
                </label>
                <label>
                    <input
                        type='radio'
                        name='form'
                        value='fullyIntegrated'
                        onChange={handleChange}
                    />
                    Fully Integrated
                </label>
                <label>
                    <input
                        type='radio'
                        name='form'
                        value='alcove'
                        onChange={handleChange}
                    />
                    Alcove
                </label>
                
                <button className={css.btn} type='submit'>Search</button>
                <button className={css.btn} type='reset' onClick={handleReset}>Reset</button>   
            </form>
        </div>
    );
}

// import Button from '../Button/Button';
// import EquipmentFilterCards from '../EquipmentFilterCards/EquipmentFilterCards';
// import MapIcon from '../Icons/MapIcon/MapIcon';
// import TypeFilterCards from '../TypeFilterCards/TypeFilterCards';

    //     <div className={css.wrap}>
    //         <div className={css.relative}>
    //             <p className={css.text}>Location</p>
    //             <input
    //                 className={css.location}
    //                 type="text"
    //                 name='location'
    //                 // value={location}
    //                 placeholder='City'
    //             />
    //             <span className={css.icon}>
    //                 <MapIcon />
    //             </span>
    //         </div>
    //         <h3 className={css.heading}>Filters</h3>
    //         <div>
    //             <h2 className={css.title} >Vehicle equipment</h2>
    //             <div className={css.line}></div>
    //             <EquipmentFilterCards />
    //         </div>
    //         <div>
    //             <h2 className={css.title} >
    //                 Vehicle type
    //             </h2>
    //             <div className={css.line}></div>
    //             <TypeFilterCards />
    //         </div>
    //         <Button btnText={'Search'}></Button>
    //     </div>
// 