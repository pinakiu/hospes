import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleUserChange = (e) => {
    if(e.target.name === "username"){
      setUser({...user, username: e.target.value})
    }
    if(e.target.name === "password"){
      setUser({...user, password: e.target.value})
    }
  } 
 const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/local", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)})
      .then((res)=> {
      if(res.ok){
        localStorage.setItem("token",true);
        localStorage.setItem("user",null);
        dispatch(updateUser(null));

        navigate("/");
        return res.json();
      }})
    }

  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col d-flex justify-content-center col-xl-10">
          <div className="card" style={{ borderRadius: "1rem", boxShadow: " 0px 0px 20px black", maxWidth: '90%'}}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fas fa-cubes fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      <span className="h1 fw-bold mb-0">Hospes</span>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign into your account
                    </h5>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">   
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          name='username'
                          onChange={(e) => handleUserChange(e)}
                          value={user.username}
                        />
                        {user.username.length === 0 &&
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>}
                      </div>
                     
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">                     
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
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"
                        onClick={(e) => submit(e)}
                      >
                        Login
                      </button>
                    </div>
                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <div className="form-check d-flex align-items-left gap-2 mb-3 p-0">
                        Don't have an account? <Link to="/sign-up">Register here</Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 d-none d-md-block my-4 px-4">
                <img 
                  style={{ borderRadius: 15}}
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
  </section>
  
  );
}

export default Login;