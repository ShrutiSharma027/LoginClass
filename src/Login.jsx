import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";

export const Login=()=> {
    return (
        <>
            {/* <!---------------------- Main Container -------------------------> */}
            <div className="container-fluid margin d-flex justify-content-center align-items-center">
                {/* <!---------------------- Login Container ------------------------> */}
                <div className="row d-flex justify-content-center shadow align-items-center bg-white box-area ">
                    {/* <!---------------------- Left Box -------------------------------> */}
                    <div className="col-lg-6 col-md-6 col-sm-4 ">
                        <div className="image"></div>
                    </div>
                    {/* <!---------------------- Right Box -------------------------------> */}
                    <div className="col-md-6 ">
                        <div className="row align-items-center">
                            <div className="header text mb-4 ">
                                <h4 className="d-flex justify-content-center align-items-center">Login</h4>
                                <h4 className="d-flex justify-content-center align-items-center">We are happy to have you back.
                                </h4>
                            </div>
                            <div className="input-group mb-4">
                                <label>Enter Email<input type="email"
                                    className="form-control form-control-lg bg-light round required"
                                    placeholder="Email" /></label>
                            </div>
                            <div className="input-group mb-4">
                                <label>Enter Password<input type="password"
                                    className="form-control form-control-lg bg-light round required"
                                    placeholder="Password" /></label>
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text"><small> Remember me
                                    </small></label>
                                </div>
                                <div className="forgot">
                                    <small><a href="#">Forgot password</a></small>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 justify-content-center input-group mb-3">
                                <button className="btn btn-lg btn-primary w-50 fs-10">Login</button>
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-lg btn-light w-100 fs-10 "><div className="google me-2" alt="Google image"></div>
                                <small>Sign in with Google</small></button>
                            </div>
                            <div className="row">
                                <small>Don't have an account? <NavLink to={Signup}>Sign Up</NavLink></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// export default Login