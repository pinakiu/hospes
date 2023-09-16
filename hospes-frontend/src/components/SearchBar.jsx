import Icon from '@mdi/react';

import { mdiMagnify } from '@mdi/js';
import { motion } from "framer-motion";
const SearchBar = () => {
    return(
        <div className="search-bar">
        <div className="location">
            <label htmlFor="name">
                Location:
            </label>
            <select  aria-label="Default select example" name="location">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
    </div>
    )
}
export default SearchBar