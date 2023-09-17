import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "./starRating";

const HomeViewContainer = () => {
    const [allHosts, setAllHosts] = useState([]);
    const [loading, setLoading] = useState(true);  // set initial loading state to true
    const search = useSelector((state) => state.search);
    const [star, setStar] = useState(0);
    const [originalCopy, setOriginalCopy] = useState([{}]);
    const [uniqueLanguage, setUniqueLanguages] = useState([{}]);
    const [language, setLanguage] = useState("");
    useEffect(() => {
        setLoading(true);
        setStar(0);
        setLanguage(0);
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
            setOriginalCopy(data);
            const allLanguages = data.flatMap(item => item.language);
            const languages = new Set(allLanguages);
            const uniqueLanguages = Array.from(languages);
            setUniqueLanguages(uniqueLanguages);
        }
            setLoading(false)
        })}
        else{
            setLoading(false)
        }

    }, [search]);
    useEffect(() => {
        if(allHosts.length !== 0){
            const allHostsCopy = [... originalCopy];
            let filteredHosts = allHostsCopy.filter((host) => {
                if(star === 0){
                    return true;
                }
                else{
                    return host.rating >= star;
                }
            })
            filteredHosts = filteredHosts.filter((host) => {
                if(language === ""){
                    return true;
                }
                else{
                    return host.language.includes(language);
                }
            })
            if(filteredHosts.length === 0){
                alert("No results found please try again, clearing your filters!");
                setStar(0)
                setLanguage("")
            }else{
                setAllHosts(filteredHosts)
            }
        }
    },[star, language])
    if (loading) {
        return <div>Loading...</div>; 
    }
    const starRating= [1,2,3,4,5];
    return (<div className="view-filter">
            {allHosts.length > 0 && uniqueLanguage &&<div className="filter">
                <div className="star-filter">
                    <h4 style={{fontSize:".9em", fontWeight:"bolder"}}>Customer Review</h4>
                    {starRating.map((rating) => (
                        star === rating ?
                        <motion.div key={rating} style={{fontWeight:"bolder", fontSize:"1.05em", color:"red"}} onClick={() => {setStar(0)}}>
                            <StarRating rating={rating}/>
                            <span> & up</span>
                        </motion.div>:
                        <motion.div key={rating} whileHover={{scale:1.05}} onClick={() => {setStar(rating)}}>
                            <StarRating rating={rating}/>
                            <span> & up</span>
                        </motion.div>
                    ))
                    }
                </div>
                <div className="language-filter">
                    <h4 style={{fontSize:".9em", fontWeight:"bolder"}}>Language</h4>
                    <div className="language-list">
                        {uniqueLanguage.map((lang) => (
                            language === lang ?
                            <motion.div  style={{color:"red", fontSize:"`1.05", fontWeight:"bolder"}}className="language" key={lang} onClick={() => {setLanguage("")}}>
                                {lang}
                            </motion.div>:
                            <motion.div whileHover={{scale:1.1}} className="language" key={lang} onClick={() => {setLanguage(lang)}}>
                                {lang}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>}
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
        </div>
    );
};

export default HomeViewContainer;
