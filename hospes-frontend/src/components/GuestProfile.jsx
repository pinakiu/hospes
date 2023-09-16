import Header from "./Header"
const GuestProfile = () =>
{
    const profileData = {
        Age: '21',
        destination: 'San Francisco, CA',
        originCountry: 'Uzbekistan',
        language: 'Uzbek',
        budget: '$1500 per month',
        dietary: 'Lactose Intolerance',
        profilePhoto: "https://cdn.vectorstock.com/i/preview-2x/62/59/default-avatar-photo-placeholder-profile-icon-vector-21666259.webp",
        aboutMe: 'I love traveling and meeting new people!',
        dates: '09/23/2023 - 11/01/2023',
        misc: 'I have a dog I would like to bring.'
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
                        <span style={spanStyle}>{profileData.age}</span>
                    </div>
                    <div className="pb-5" style={iconTextStyle}>
                        <i className="fas fa-language" style={iconStyle}></i>
                        <span style={spanStyle}>{profileData.language}</span>
                    </div>
                </div>
                <div className="col-md-7">
                    <h1 className="display-3 mb-5">Firstname Lastname</h1>
                    <div className="mb-4">
                        <label className="form-label">Bio</label>
                        <div style={boxStyle}>{profileData.aboutMe}</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Origin Country</label>
                        <div style={boxStyle}>{profileData.originCountry}</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Destination</label>
                        <div style={boxStyle}>{profileData.destination}</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Dates</label>
                        <div style={boxStyle}>{profileData.dates}</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Budget</label>
                        <div style={boxStyle}>{profileData.budget}</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Dietary Restrictions</label>
                        <div style={boxStyle}>{profileData.dietary}</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Notes</label>
                        <div style={boxStyle}>{profileData.misc}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
}
export default GuestProfile