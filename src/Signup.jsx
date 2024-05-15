import { NavLink } from "react-router-dom";
import { Login } from "./Login";
import log from "./assets/images/log.jpg"
import google from "./assets/images/google.png"

export const Signup = () => {
    return (
        <>
            {/* <!---------------------- Main Container -------------------------> */}
            <div className="container-fluid h-100  ">
                {/* <!---------------------- Login Container ------------------------> */}
                <div className="row center h-100  d-flex justify-content-center align-items-center">
                    {/* <!---------------------- Left Box -------------------------------> */}
                    <div className="col-md-9 bg-white round">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-sm-block">
                                <div className="image" alt="Side image">
                                    {/* <img src={log} className="image" alt="Login Image" /> */}
                                </div>
                            </div>
                            {/* <!---------------------- Right Box -------------------------------> */}
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="row d-flex">
                                    <div className="header text mb-4 ">
                                        <h4 className="center mt-4">Sign Up</h4>
                                        <h4 className="center">Register here to sign up on our
                                            website</h4>
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Your Name
                                            <input type="email"
                                                className="form-control form-control-lg bg-light round required"
                                                placeholder="Username" size={35} />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Your Email
                                            <input type="password"
                                                className="form-control form-control-lg bg-light round required"
                                                placeholder="Email" size={35}/>
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Password<input type="password"
                                            className="form-control form-control-lg bg-light round required"
                                            placeholder="Password" size={35}/></label>
                                    </div>
                                    <div className="mb-3">
                                        <label>Enter Confirm Password<input type="password"
                                            className="form-control form-control-lg bg-light round required"
                                            placeholder="Confirm Password" size={35}/></label>
                                    </div>
                                    <div className="mb-3 d-flex justify-content-between">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="formCheck" />
                                            <label htmlFor="formCheck" className="form-check-label text"><small> Remember me</small>
                                            </label>
                                        </div>
                                        <div className="margin-right">
                                            <small><NavLink href="#">Forgot password</NavLink></small>
                                        </div>
                                    </div>
                                    <div className="col-md-12 center mb-2">
                                        <button className="btn btn-lg btn-success w-50 fs-10">Sign Up</button>
                                    </div>
                                    <div className="mb-2">
                                        <button className="btn btn-lg btn-light w-100 fs-10 "><img src={google}
                                            className="google" alt="Google image" /><small>Sign in with Google</small></button>
                                    </div>
                                    <div className="row mb-3">
                                        <small>Already have an account? <NavLink to="/login">Login</NavLink></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// export default Signup