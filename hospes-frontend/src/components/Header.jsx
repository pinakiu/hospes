import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const containerVariants = { 
        hidden: { height: "0%" },
        visible: { height: "100%", transition: { staggerChildren: 0.15 } },
        };
        const dispatch = useDispatch();
        const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        };
    const [toggleButton, setToggleButton] = useState(false)
    const logout = () => {
        fetch("http://localhost:3000/auth/logout", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
        }).then((res) => {
            if(res.ok) {
                console.log("hi")
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                dispatch(updateUser(null));
                navigate(0);
                return res.json();
            }
        })
    }
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
                                <Link to ="/">
                                    <motion.button className="profile-option home-button" variants={buttonVariants}>
                                            Home
                                    </motion.button>
                                </Link>
                                {user.hostOrClient === "Host" ? 
                                 <Link to ={`/profile/host/${user._id}`}>
                                    <motion.button className="profile-option" variants={buttonVariants}>
                                            Profile
                                    </motion.button>
                                </Link>:                      
                                <Link to ={`/profile/guest/${user._id}`}>
                                    <motion.button className="profile-option" variants={buttonVariants}>
                                            Profile
                                    </motion.button>
                                </Link>}
           
                                <motion.button className="profile-option logout-button" variants={buttonVariants}
                                onClick={() => logout()}>
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