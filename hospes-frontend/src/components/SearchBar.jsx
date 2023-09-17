import Icon from '@mdi/react';

import { mdiMagnify } from '@mdi/js';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const SearchBar = () => {
    const locations = useSelector((state) => state.cities)
    const [allLocations, setAllLocations] = useState([]);
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
    return(
        allLocations && allLocations.length !== 0 ?
        (<div className="search-bar">
        <div className="location">
            <label htmlFor="name">
                Location:
            </label>
            <select  aria-label="Default select example" name="location">
                <option selected disabled>Open this select menu</option>
               {allLocations.map((location) => (
                     <option key={location}>{location}</option>
                ))}
            </select>
        </div>
        <div className="start-date">
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" name="startDate"/>
        </div>
        <div className="end-date">
            <label htmlFor="endDate">End Date:</label>
            <input type="date" name="endDate"/>
        </div>
        <div className="number-of-guests">
            <label htmlFor="guests">Guests</label>
            <select aria-label="Default select example" name="guests">
                <option selected>Number</option>
                {Array.from({ length: 5 }, (_, index) => (
                    <option className="hi" key={index}>{index+1}</option>
                ))}
            </select>
        </div>
        <motion.div whileHover={{scale:1.2}}
        whileTap={{scale:.9}}className="search-button">
            <Icon path={mdiMagnify} size={1}/>
        </motion.div>
    </div>): null
    )
}
export default SearchBar