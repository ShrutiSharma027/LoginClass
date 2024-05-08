import { NavLink } from "react-router-dom";

export const Signup=()=> {
      return (
    <>
     <div class="img">
        {/* <!---------------------- Main Container -------------------------> */}
        <div class="container-fluid margin d-flex justify-content-center align-items-center ">
            {/* <!---------------------- Login Container ------------------------> */}
            <div class="row d-flex justify-content-center shadow align-items-center bg-white box-area mt-0">
                {/* <!---------------------- Left Box -------------------------------> */}
                <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                    <img src="./images/log.jpg" class="image"/>
                </div>
                {/* <!---------------------- Right Box -------------------------------> */}
                <div class="col-md-6 d-flex justify-content-center align-items-center bg-white right-box">
                    <div class="row align-items-center">
                        <div class="header text mb-4 ">
                            <h4 class="d-flex justify-content-center align-items-center">Sign Up</h4>
                            <h4 class="d-flex justify-content-center align-items-center">Register here to sign up on our website</h4>
                        </div>
                        <div class="input-group mb-4">
                            <label>Enter Your Name<input type="email"
                                    class="form-control form-control-lg bg-light round required"
                                    placeholder="Username"/></label>
                        </div>
                        <div class="input-group mb-4">
                            <label>Enter Your Email<input type="password"
                                    class="form-control form-control-lg bg-light round required"
                                    placeholder="email"/></label>
                        </div>
                        <div class="input-group mb-4">
                            <label>Enter Password<input type="password"
                                    class="form-control form-control-lg bg-light round required"
                                    placeholder="Password"/></label>
                        </div>
                        <div class="input-group mb-4">
                            <label>Enter Confirm Password<input type="password"
                                    class="form-control form-control-lg bg-light round required"
                                    placeholder="Password"/></label>
                        </div>
                        <div class="input-group mb-5 d-flex justify-content-between">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="formCheck"/>
                                <label for="formCheck" class="form-check-label text"><small> Remember me
                                    </small></label>
                            </div>
                            <div class="forgot">
                                <small><NavLink to="#">Forgot password</NavLink></small>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 justify-content-center input-group mb-3">
                            <button class="btn btn-lg btn-primary w-50 fs-10">Sign Up</button>
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-lg btn-light w-100 fs-10 "><img src="./images/google.png"
                                    class="google me-2" alt="Google image"/><small>Sign in with Google</small></button>
                        </div>
                        <div class="row">
                            <small>Already have an account? <NavLink to="/login">Login</NavLink></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}