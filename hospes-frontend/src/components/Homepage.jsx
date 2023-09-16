
import Header from "./Header";
import SearchBar from "./SearchBar";


const Homepage = () => {
    const user = {
        image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
        location: "New York, NY",
        price: 500,
        origin_country: "China",
        languages: ["English", "Spanish", "Mandarin"]
    }
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
                <div className="view-homes">
                    <div className="home" >
                        <img src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="HomeImage"
                        className="home-image"/>
                        <div className="home-information">
                            <div className="home-location">
                                {user.location}
                            </div>
                            <div className="owner-origin">
                                Host is from: {user.origin_country}
                            </div>
                            <div className="languages-spoken">
                                Languages: <span> </span>
                                {user.languages.map((language,index) => (
                                    <span key={index}>{language} </span>)
                                )}
                            </div>
                            <div className="stay-price">
                                Total Price:  ${user.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
export default Homepage;