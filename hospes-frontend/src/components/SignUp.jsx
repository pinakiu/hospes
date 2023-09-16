import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';

const SignUp = () => {
    const [client, setClient] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }); 
    useEffect(() => {
        console.log(client)
    }, [client])
    const handleClientChange = (e) => { 
        if(e.target.name === "name"){
            setClient({...client, name: e.target.value})
            
        }
        if(e.target.name === "email"){
            setClient({...client, email: e.target.value})
        }
        if(e.target.name === "password"){
            setClient({...client, password: e.target.value})
        }
        if(e.target.name === "confirmPassword"){
            setClient({...client, confirmPassword: e.target.value})
        }
    }

  return (
  <section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-16 col-xl-11" style={{maxWidth: '70%'}}>
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-4">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                          name='name'
                          onChange={(e) => handleClientChange(e)}
                          value={client.name}
                        />
                        {client.name.length === 0 &&
                        <label className="form-label" htmlFor="form3Example3c">
                            Your Name
                        </label>}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c"
                          className="form-control"
                          name='email'
                          onChange={(e) => handleClientChange(e)}
                          value={client.email}
                        />
                        {client.email.length === 0 &&
                        <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                            </label>}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c"
                          className="form-control"
                          name='password'
                          onChange={(e) => handleClientChange(e)}
                          value={client.password}
                        />
                          {client.password.length === 0 &&
                            <label className="form-label" htmlFor="form3Example3c">
                                Password
                            </label>
                            }
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd"
                          className="form-control"
                          name='confirmPassword'
                          onChange={(e) => handleClientChange(e)}
                          value={client.confirmPassword}
                        />
                        {client.confirmPassword.length === 0 &&
                        <label className="form-label" htmlFor="form3Example3c">
                            Repeat Your Password
                            </label>}
                      </div>
                    </div>
                    <div className="form-check d-flex align-items-center justify-content-center mb-2 pt-4 pb-4 px-2">
                        <ToggleButton/>
                    </div>
                    <div className="d-flex justify-content-center mt-2, mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-dark btn-lg btn-block">
                        Register
                      </button>
                    </div>
                    <div className="form-check d-flex align-items-center gap-2 mb-3">
                        Already have an account? <Link to="/login">Login here</Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center align-items-center order-1 order-lg-2">
                  <img 
                    style={{ borderRadius: 25}}
                    src="https://images.pexels.com/photos/4046512/pexels-photo-4046512.jpeg?auto=compress&cs=tinysrgb&w=200&h=400&dpr=2"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default SignUp;