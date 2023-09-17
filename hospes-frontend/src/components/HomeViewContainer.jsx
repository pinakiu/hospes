import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeViewContainer = () => {
    const [allHosts, setAllHosts] = useState([]);
    const [loading, setLoading] = useState(true);  // set initial loading state to true
    const search = useSelector((state) => state.search);
    useEffect(() => {
        setLoading(true);
        if(search)
        {const url = new URL("http://localhost:3000/users/host");
        url.search = new URLSearchParams(search);
        fetch(url).then(response => {
            if(response.ok) {
                return response.json();
            }
            else{
                console.log("bad");
                setAllHosts([]);
                setLoading(false)
            }
        }).then (data => {
            if(data){
            setAllHosts(data);
        }
            setLoading(false)
        })}
        else{
            setLoading(false)
        }

    }, [search]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="view-homes">
            { allHosts.length !== 0 ? allHosts.map((user) => (
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
                    {user.language.map((language, languageIndex) => (
                        <span key={languageIndex}>{language} </span>
                    ))}
                    </div>
                    <div className="stay-price">Price per day: ${user.price}</div>
                </div>
                </Link>
            )): <div className="no-results">No results found at the moment please put in a query to proceed</div>}
        </div>
    );
};

export default HomeViewContainer;
