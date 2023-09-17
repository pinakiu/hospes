import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Modal = () => {
  const user = useSelector((state) => state.user);
  const cities = useSelector((state) => state.cities);
  const [formState, setFormState] = useState({
    origin: '',
    location: '',
    language: '',
    price: '',
    startDate: '',
    endDate: '',
    dietaryRestrictions: '',
    capacity: '',
    homeImage: null,
    personImage: null,
    details: '',
  });
  const dietaryRestrictionsOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Kosher',
    'Halal',
    'Pescatarian',
    'Dairy-Free',
    'Nut-Free',
    'Soy-Free',
    'No Restrictions'
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'homeImage' || name === 'personImage') {
      setFormState({
        ...formState,
        [name]: e.target.files[0],
      });
      return;
    }else{
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };
  const submit = (e) => {
    e.preventDefault()
    console.log(formState)
    const formData = new FormData();
    formData.append('origin', formState.origin);
    formData.append('location', formState.location);
    formData.append('language', formState.language);
    formData.append('price', formState.price);
    formData.append('startDate', formState.startDate);
    formData.append('endDate', formState.endDate);
    formData.append('dietaryRestrictions', formState.dietaryRestrictions);
    formData.append('capacity', formState.capacity);
    formData.append('homeImage', formState.homeImage);
    formData.append('personImage', formState.personImage);
    formData.append('details', formState.details);
    fetch('http://localhost:3000/users', {
      method: 'PUT',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
      <>
      <div className="background">
        <form className='sign-up-form' onSubmit={e => submit(e)}>
          <h2>Your one stop away from finding your dream host!</h2>

          <div className="host-location-container">
            <div className="origin-host-sign-up">
              <label htmlFor="origin">Where are you originally from?</label>
              <input type="text" name="origin" id="origin" placeholder="Country" required onChange={handleChange}/>
            </div>

            <div className="host-location-sign-up">
              <label htmlFor="location">Location: </label>
              <select name="location" id="location" required onChange={handleChange}>
                <option value="" selected disabled>Select a City</option>
                {cities.map((city, index) => (
                  <option value={city} key={index}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="language-price-container">
            <div className="host-language-sign-up">
              <label htmlFor="language">Language: </label>
              <input type="text" name="language" id="language" placeholder="Chinese, English, Spanish" required onChange={handleChange}/>
            </div>

            <div className="host-price-sign-up">
              <label htmlFor="price">Price: </label>
              <input type="number" name="price" id="price" placeholder={user.hostOrGuest ? "How much are you renting for per week?" : "What's your price range per week?"} required onChange={handleChange}/>
            </div>
          </div>

          <div className="availability-container">
            <div className="host-start-date">
              <label htmlFor="startDate">Availability Start Date: </label>
              <input type="date" name="startDate" id="startDate" required onChange={handleChange}/>
            </div>

            <div className="host-end-date">
              <label htmlFor="endDate">Availability End Date: </label>
              <input type="date" name="endDate" id="endDate" required onChange={handleChange}/>
            </div>
          </div>

          <div className='dietary-restrictions-capacity-container'>
            <div className="host-dietary-restrictions-sign-up">
              <label htmlFor="dietaryRestrictions">Dietary Restrictions: </label>
              <select name="dietaryRestrictions" id="location" required onChange={handleChange}>
                <option value="" selected disabled>Select a City</option>
                {dietaryRestrictionsOptions.map((city, index) => (
                  <option value={city} key={index}>{city}</option>
                ))}
              </select>
            </div>
          </div>

            <div className="host-capacity-sign-up">
            <label htmlFor="capacity">Capacity: </label>
            <select name="capacity" id="capacity" required onChange={handleChange}>
              <option value="" disabled selected>Select Capacity</option>
              {[1, 2, 3, 4, 5, 6].map((number, index) => (
                <option value={number} key={index}>{number}</option>
              ))}
            </select>
          </div>

          <div className="house-person-container">
            {user.hostOrGuest &&
              <div className="host-house-type-sign-up">
                <label htmlFor="homeImage">Home Image</label>
                <input type="file" name="homeImage" id="homeImage" onChange={handleChange}
                accept="image/*" />
              </div>
            }

            <div className="host-person-type-sign-up">
              <label htmlFor="personImage">Person Image: </label>
              <input type="file" name="personImage" id="personImage" onChange={handleChange}
              accept="image/*" />
            </div>
          </div>

          <div className="details-container">
            <div className="host-details-sign-up">
              <label htmlFor="details">About Me: </label>
              <textarea name="details" id="details" cols="30" rows="10" placeholder="I'm the best" onChange={handleChange}></textarea>
            </div>
          </div>

          <div className="submit-container">
            <input type="submit" className='submit-button'/>
          </div>

        </form>
      </div>
    </>
  )}
export default Modal