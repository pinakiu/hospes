import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const Modal = () => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
//   const host = {
//     name: "Host",
//     host: true,
//   }
const host = {
    name: "Guest",
    host: false,
  }

  return (
    <>
      <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Finish signing up to be the best {host.name}.</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <form action="" className='sign-up-form'>
                    <div className="host-location-container">
                        <div className="origin-host-sign-up">
                            <label htmlFor="origin">Where are you originally from?</label>
                            <input type="text" name="origin" id="origin" placeholder="Country"/>
                        </div>
                        <div className="host-location-sign-up">
                            <label htmlFor="">Location: </label>
                            <select name="origin" id="origin" >
                                <option value="city1">City 1</option>
                                <option value="city2">City 2</option>
                                <option value="city3">City 3</option>
                                <option value="city4">City 4</option>
                                <option value="city5">City 5</option>
                            </select>
                        </div>
                    </div>
                    <div className="language-price-container">
                        <div className="host-language-sign-up">
                            <label htmlFor="language">Language: </label>
                            <input type="text" name="language" id="origin" placeholder="Chinese, English, Spanish"/>
                        </div>
                        <div className="host-price-sign-up">
                            <label htmlFor="price">Price: </label>
                            {!host.host ?
                            <input type="text" name="price" id="origin" placeholder="What's your price range"/>:
                            <input type="text" name="price" id="origin" placeholder="How much are you renting for?"/>
                            }
                            
                        </div>
                    </div>
                    <div className="availability-container">
                        <div className="host-start-date">
                            <label htmlFor="startDate">Availability Start Date: </label>
                            <input type="date" name="startDate" id="origin" placeholder="Start Date"/>
                        </div>
                        <div className="host-end-date">
                            <label htmlFor="endDate">Availability End Date: </label>
                            <input type="date" name="endDate" id="origin" placeholder="End Date"/>
                        </div>
                    </div>
                    <div className='dietary-restrictions-capacity-container'>
                        <div className="host-dietary-restrictions-sign-up">
                            <label htmlFor="dietary-restrictions">Dietary Restrictions: </label>
                            <input type="text" name="dietary-restrictions" id="origin" placeholder="Dietary Restrictions"/>
                        </div>
                        <div className="host-capacity-sign-up">
                            <label htmlFor="capacity">Capacity: </label>
                            <input type="text" name="capacity" id="origin" placeholder="Capacity"/>
                        </div>
                    </div>
                    <div className="house-person-container">
                        {host.host &&
                            <div className="host-house-type-sign-up">
                            <label htmlFor="home-image">Home Image</label>
                            <input type="file" name="home-image" id="origin" placeholder="House Type"/>
                            </div>
                        }
                      
                        <div className="host-person-type-sign-up">
                            <label htmlFor="person-image">Person Image: </label>
                            <input type="file" name="person-image" id="origin" placeholder="Person Type"/>
                        </div>
                    </div>
                    <div className="details-container">
                        <div className="host-details-sign-up">
                            <label htmlFor="">About Me: </label>
                            <textarea name="details" id="details" cols="30" rows="10" placeholder="I'm the best"></textarea>
                        </div>
                    </div>
                </form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
export default Modal