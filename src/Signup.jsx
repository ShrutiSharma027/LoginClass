import { NavLink } from "react-router-dom";
import { Login } from "./Login";

export const Signup=()=> {
      return (
    <>
    {/* <!---------------------- Main Container -------------------------> */}
    <div className="container-fluid margin d-flex justify-content-center align-items-center ">
        {/* <!---------------------- Login Container ------------------------> */}
        <div className="row d-flex justify-content-center shadow align-items-center bg-white box-area mt-0">
            {/* <!---------------------- Left Box -------------------------------> */}
            <div className="col-md-6 col-md-6 col-sm-4 ">
            <div className="image"></div>
            </div>
            {/* <!---------------------- Right Box -------------------------------> */}
            <div className="col-md-6 d-flex justify-content-center align-items-center bg-white right-box">
                <div className="row align-items-center">
                    <div className="header text mb-4 ">
                        <h4 className="d-flex justify-content-center align-items-center">Sign Up</h4>
                        <h4 className="d-flex justify-content-center align-items-center">Register here to sign up on our
                            website</h4>
                    </div>
                    <div className="input-group mb-4">
                        <label>Enter Your Name<input type="email"
                                className="form-control form-control-lg bg-light round required"
                                placeholder="Username"/></label>
                    </div>
                    <div className="input-group mb-4">
                        <label>Enter Your Email<input type="password"
                                className="form-control form-control-lg bg-light round required"
                                placeholder="Email"/></label>
                    </div>
                    <div className="input-group mb-4">
                        <label>Enter Password<input type="password"
                                className="form-control form-control-lg bg-light round required"
                                placeholder="Password"/></label>
                    </div>
                    <div className="input-group mb-4">
                        <label>Enter Confirm Password<input type="password"
                                className="form-control form-control-lg bg-light round required"
                                placeholder="Password"/></label>
                    </div>
                    <div className="input-group mb-5 d-flex justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="formCheck"/>
                            <label htmlFor="formCheck" className="form-check-label text"><small> Remember me
                                </small></label>
                        </div>
                        <div className="forgot">
                            <small><NavLink href="#">Forgot password</NavLink></small>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 justify-content-center input-group mb-3">
                        <button className="btn btn-lg btn-primary w-50 fs-10">Sign Up</button>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-lg btn-light w-100 fs-10 "><img src="./images/google.png"
                                className="google me-2" alt="Google image"/><small>Sign in with Google</small></button>
                    </div>
                    <div className="row">
                        <small>Already have an account? <NavLink to={Login}>Login</NavLink></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

// export default Signup