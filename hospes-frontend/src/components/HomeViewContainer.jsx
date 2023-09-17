import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeViewContainer = () => {
    const [allHosts, setAllHosts] = useState([]);
    const [loading, setLoading] = useState(true);  // set initial loading state to true

    useEffect(() => {
        fetch("http://localhost:3000/users/allhosts")
            .then((r) => {
                if (!r.ok) {
                    throw new Error("Failed to fetch data");
                }
                return r.json();
            })
            .then(data => {
                console.log(data);
                setAllHosts(data);
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="view-homes">
            { allHosts.length !== 0 && allHosts.map((user) => (
                <Link to={`/profile/host/${user._id}`}className="home" key={user._id}>
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={user.homeImage}
                    alt="HomeImage"
                    className="home-image"
                    style={{maxWidth:"100%"
                    ,height:"20em"}}
                    
                />
                <div className="home-information">
                    <div className="username">{user.name}</div>
                    <div className="home-location">{user.location}</div>
                    <div className="owner-origin">Host is from: {user.origin}</div>
                    <div className="languages-spoken">
                    Languages: <span> </span>
                    {/* {user.languages.map((language, languageIndex) => (
                        <span key={languageIndex}>{language} </span>
                    ))} */}
                    </div>
                    <div className="stay-price">Price per day: ${user.price}</div>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default HomeViewContainer;
