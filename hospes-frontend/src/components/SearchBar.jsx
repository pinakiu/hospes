import Icon from '@mdi/react';

import { mdiMagnify } from '@mdi/js';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearch } from '../redux/searchSlice';
const SearchBar = () => {
    const [allLocations, setAllLocations] = useState([]);
    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + 1);
    const nextMinDate = `${nextDay.getFullYear()}-${String(nextDay.getMonth() + 1).padStart(2, '0')}-${String(nextDay.getDate()).padStart(2, '0')}`;

    const dispatch = useDispatch();
    useEffect(() => {
        fetch("http://localhost:3000/users/host/locations")
        .then((res =>{
            if(res.ok) {
                return res.json()
            }
        }))
        .then(data => {
            setAllLocations(data)
        })

    },[])
    const [formData, setFormData] = useState({
        location: 'New York City, NY',
        startDate: minDate,
        endDate: nextMinDate,
        guests: 1,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.location || !formData.startDate || !formData.endDate || !formData.guests) {
            alert("All fields are required!");
            return;
        }
        dispatch(updateSearch(formData))
    }

    return(
        allLocations && allLocations.length !== 0 ?
        (<form className="search-bar" onSubmit={(e) => {handleSubmit(e)}}>
        <div className="location">
            <label htmlFor="name">
                Location:
            </label>
            <select  aria-label="Default select example" name="location" onChange={handleChange} required>
               {allLocations.map((location) => (
                     <option key={location}>{location}</option>
                ))}
            </select>
        </div>
        <div className="start-date">
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" name="startDate" onChange={handleChange} min={minDate} value={formData.startDate} />
        </div>
        <div className="end-date">
            <label htmlFor="endDate">End Date:</label>
            <input type="date" name="endDate"onChange={handleChange} min={formData.startDate}  value={formData.endDate}/>
        </div>
        <div className="number-of-guests">
            <label htmlFor="guests">Guests</label>
            <select aria-label="Default select example" name="guests" onChange={handleChange}  value={formData.guests}>
                <option defaultValue disabled>Number</option>
                {Array.from({ length: 5 }, (_, index) => (
                    <option className="hi" key={index}>{index+1}</option>
                ))}
            </select>
        </div>
        <motion.button whileHover={{scale:1.2}} type='submit'
            whileTap={{scale:.9}}className="search-button" style={{backgroundColor:"transparent", borderRadius:"2em", border:"none"}}>
                <Icon path={mdiMagnify} size={1}/>
        </motion.button>
    </form>): null
    )
}
export default SearchBar