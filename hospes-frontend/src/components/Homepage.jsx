// color palette: #2b3944, #b7a69a, #e3e4e3, #706869, #60483c, #e1d7c4, #83643d, #9b7b5c, #e6c6a5

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