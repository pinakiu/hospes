import Header from "./Header"
const HostProfile = () =>
{
    const profileData = {
        location: 'San Francisco, CA',
        originCountry: 'United States',
        price: '$200 per night',
        language: 'English',
        profilePhoto: "https://cdn.vectorstock.com/i/preview-2x/62/59/default-avatar-photo-placeholder-profile-icon-vector-21666259.webp",
        propertyPhoto: 'https://images.pexels.com/photos/2189666/pexels-photo-2189666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        availability: 'Available',
        numberOfPeopleInHousehold: 3,
        capacity: 2,
        description: 'I have many pets in the house.'
      };

    
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
        <div className="container my-5 py-4">
            <div className="row justify-content-around">
                <div className="flex-column col-md-5 text-left mx-0 justify-content-start w-25" style={{ width: "250px"}}>
                    <img src={profileData.profilePhoto} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: "200px", height: "200px", objectFit: "cover"}}/>
                    <div style={iconTextStyle}>
                        <i className="fas fa-map-marker-alt" style={iconStyle}></i>
                        <span style={spanStyle}>{profileData.location}</span>
                    </div>
                    <div className="pb-5" style={iconTextStyle}>
                        <i className="fas fa-language" style={iconStyle}></i>
                        <span style={spanStyle}>{profileData.language}</span>
                    </div>
                    <img src={profileData.propertyPhoto} alt="Profile" className="img-fluid" style={{ width: "300px", height: "300px", borderRadius: "15px", objectFit: "cover"}}/>
                </div>
                <div className="col-md-7">
                    <h1 className="display-3 mb-5">Firstname Lastname</h1>
                    <div className="mb-4">
                        <label className="form-label">Description</label>
                        <div style={boxStyle}>{profileData.description}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Origin Country</label>
                        <div style={boxStyle}>{profileData.originCountry}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <div style={boxStyle}>{profileData.price}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Availability</label>
                        <div style={boxStyle}>{profileData.availability}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"># of People in Household</label>
                        <div style={boxStyle}>{profileData.numberOfPeopleInHousehold}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Capacity</label>
                        <div style={boxStyle}>{profileData.capacity}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
}
export default HostProfile