import { useEffect, useState } from "react";
import Header from "./Header"
import StarRating from "./StarRating";
import { useParams } from "react-router-dom";
const GuestProfile = () =>
{
    const {id} = useParams()
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

    // const profileData = {
    //     name: 'Test Guest Name',
    //     profile_picture: "https://cdn.vectorstock.com/i/preview-2x/62/59/default-avatar-photo-placeholder-profile-icon-vector-21666259.webp",
    //     age: '44',
    //     gender: 'Female',
    //     location: 'San Francisco, CA',
    //     origin_country: 'Nepal',
    //     languages: ['English', 'Nepalese'],
    //     target_price: "$20 per night",
    //     target_dates: "12/01/2022 - 03/16/2023",
    //     dietary_restrictions: "Lactose Intolerance",
    //     num_guests: "2",
    //     description: "I love pets!",
    //     rating: "4.2",
    //   };

    
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
        <>
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
                    {/* <span style={spanStyle}>{profile.languages.join(", ")}</span> */}
                </div>
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
                    <label className="form-label">Budget</label>
                    <div style={boxStyle}>{profile.price}$ a day</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Availability</label>
                    <div style={boxStyle}>{profile.startDate} - {profile.endDate}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Number of Guests</label>
                    <div style={boxStyle}>{profile.capacity}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dietary Restrictions</label>
                    <div style={boxStyle}>{profile.dietaryRestrictions}</div>
                </div>
            </div>
        </div>
    </div>
    </>
    }
    </>
        
      );
}
export default GuestProfile