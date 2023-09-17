import { useEffect, useState } from "react";
import Header from "./Header"
import StarRating from "./StarRating";
import { useParams } from "react-router-dom";

const HostProfile = () =>
{  
    const {id} = useParams()
    // const profileData = {
    //     name: 'Test Host Name',
    //     profile_picture: `https://images.pexels.com/photos/2189666/pexels-photo-2189666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    //     property_picture: 'https://images.pexels.com/photos/2189666/pexels-photo-2189666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     age: '44',
    //     gender: 'Female',
    //     location: 'San Francisco, CA',
    //     origin_country: 'Nepal',
    //     languages: ['English', 'Nepalese'],
    //     price: "$20 per night",
    //     availability: "12/01/2022 - 03/16/2023",
    //     dietary_restrictions: "Lactose Intolerance",
    //     capacity: "2",
    //     description: "I love pets!",
    //     rating: "4.2",
    //   };
    const [profile, setProfile] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json()).then(
            (data) => {
                if(data){
                setProfile(data)
                }
            })
    },[])

    
    const iconTextStyle = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
    };

    const iconStyle = {
        width: '20px',
        textAlign: 'center',
    };

    const spanStyle = {
        marginLeft: '20px',
    };

    const boxStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };
    
    return (
        <>
        <Header/>
        {profile && 
        <div className="container my-5 py-4">
            <div className="row justify-content-around">
                <div className="flex-column col-md-5 text-left mx-0 justify-content-start w-25" style={{ width: "250px"}}>
                    <img src={profile.personImage} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: "200px", height: "200px", objectFit: "cover"}}/>
                    <div style={iconTextStyle}>
                        <i className="fa-solid fa-venus-mars" style={iconStyle}></i>
                        <span style={spanStyle}>{profile.gender}</span>
                    </div>
                    <div style={iconTextStyle}>
                        <i className="fa-solid fa-calendar" style={iconStyle}></i>
                        <span style={spanStyle}>{profile.age}</span>
                    </div>
                    <div style={iconTextStyle}>
                        <i className="fas fa-map-marker-alt" style={iconStyle}></i>
                        <span style={spanStyle}>{profile.location}</span>
                    </div>
                    <div className="pb-5" style={iconTextStyle}>
                        <i className="fas fa-language" style={iconStyle}></i>
                        {/* <span style={spanStyle}>{profileData.languages.join(", ")}</span> */}
                    </div>
                    <img src={profile.homeImage} alt="Profile" className="img-fluid" style={{ width: "300px", height: "300px", borderRadius: "15px", objectFit: "cover"}}/>
                </div>
                <div className="col-md-7">
                    <h1 className="display-3 mb-1">{profile.name}</h1>
                    <StarRating rating={profile.rating}/>
                    <div className="mt-4 mb-4">
                        <label className="form-label">Description</label>
                        <div style={boxStyle}>{profile.details}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Origin Country</label>
                        <div style={boxStyle}>{profile.origin}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <div style={boxStyle}>{profile.price} per day</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Availability</label>
                        <div style={boxStyle}>{profile.startDate}- {profile.endDate}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Capacity</label>
                        <div style={boxStyle}>{profile.capacity}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dietary Restrictions</label>
                        <div style={boxStyle}>{profile.dietaryRestrictions}</div>
                    </div>
                </div>
            </div>
        </div>
}
        </>
      );
}
export default HostProfile