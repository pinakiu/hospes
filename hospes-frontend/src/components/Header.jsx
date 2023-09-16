import { motion } from "framer-motion";
import { useState } from "react";


const Header = () => {
    const containerVariants = { 
        hidden: { height: "0%" },
        visible: { height: "100%", transition: { staggerChildren: 0.15 } },
        };
        
        const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        };
    const [toggleButton, setToggleButton] = useState(false)
    return (
        <div>
            <header>
                <nav className="navigation">
                    <div className="header-title">
                        <motion.h1 whileHover={{scale:1.1}} whileTap={{scale:.9}}className="title">Hospes</motion.h1>
                    </div>
                    <div className="image-container">
                        <motion.img whileHover={{scale:1.1}} whileTap={{scale:.9}}
                        src="https://cdn.vectorstock.com/i/preview-2x/62/59/default-avatar-photo-placeholder-profile-icon-vector-21666259.webp" alt="Anonymous Picture"
                            className="profile-pic"
                            onClick={() =>setToggleButton(!toggleButton)}/>
                        {toggleButton &&
                            <motion.div
                            className="profile-options"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            >
                                <motion.button className="profile-option home-button" variants={buttonVariants}>
                                    Home
                                </motion.button>
                                <motion.button className="profile-option" variants={buttonVariants}>
                                    Profile
                                </motion.button>
                                <motion.button className="profile-option logout-button" variants={buttonVariants}>
                                    Logout
                                </motion.button>
                            </motion.div>
                        }
                    </div>
                </nav>
            </header>
            
        </div>

       ) }

       export default Header;