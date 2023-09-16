
import Header from "./Header";
import Icon from '@mdi/react';

import { mdiMagnify } from '@mdi/js';
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";


const Homepage = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h1 style={{fontWeight:"bolder"}}>Welcome to Hospes</h1>
                    </div>
                    <div className="subtitle">
                        <h4>Where you don't just find a home, you find a <i style={{color:"red"}}>family.</i></h4>
                    </div>
                </div>
                <SearchBar/>
            </div>
            <div className="view-homes">
                
            </div>
        </>
        
    )
}
export default Homepage;