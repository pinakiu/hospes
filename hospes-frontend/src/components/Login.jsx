import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleUserChange = (e) => {
    if(e.target.name === "email"){
      setUser({...user, email: e.target.value})
    }
    if(e.target.name === "password"){
      setUser({...user, password: e.target.value})
    }
  } 

  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem",boxShadow: " 0px 0px 20px black"}}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fas fa-cubes fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      <span className="h1 fw-bold mb-0">Logo</span>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign into your account
                    </h5>
                    <div className="form-outline mb-4"> 
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        name='email'
                        onChange={(e) => handleUserChange(e)}
                        value={user.email}
                      />
                      {user.email.length === 0 &&
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>}
                     
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        name='password'
                        onChange={(e) => handleUserChange(e)}
                        value={user.password}
                      />
                      {user.password.length === 0 &&
                        <label className="form-label" htmlFor="form2Example17">
                          Password
                        </label>}
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"
                      >
                        Login
                      </button>
                    </div>
                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <Link to="/sign-up" style={{ color: "#393f81" }}>
                        Register here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_1280.png"
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: "0rem 1rem 1rem 0rem",
                  height: "100%", boxShadow:" -2px 0px 5px lightgrey"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default App;