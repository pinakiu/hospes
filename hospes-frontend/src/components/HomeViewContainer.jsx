import { motion } from "framer-motion";
const HomeViewContainer = () => {
    const user = {
        image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
        location: "New York, NY",
        price: 500,
        origin_country: "China",
        languages: ["English", "Spanish", "Mandarin"]
    }
    const repeatedElements = Array(5).fill(null);

    return(
        <div className="view-homes">
            {repeatedElements.map((_, index) => (
                <div className="home" key={index}>
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="HomeImage"
                    className="home-image"
                />
                <div className="home-information">
                    <div className="home-location">{user.location}</div>
                    <div className="owner-origin">Host is from: {user.origin_country}</div>
                    <div className="languages-spoken">
                    Languages: <span> </span>
                    {user.languages.map((language, languageIndex) => (
                        <span key={languageIndex}>{language} </span>
                    ))}
                    </div>
                    <div className="stay-price">Total Price: ${user.price}</div>
                </div>
                </div>
            ))}
        </div>
    )
}
export default HomeViewContainer