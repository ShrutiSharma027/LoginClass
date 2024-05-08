import { NavLink } from "react-router-dom";

export const Login=()=> {
    return (
    <>
      <div class="img">
        {/* <!---------------------- Main Container -------------------------> */}
        <div class="container-fluid margin d-flex justify-content-center align-items-center ">
            {/* <!---------------------- Login Container ------------------------> */}
            <div class="row d-flex justify-content-center shadow align-items-center bg-white box-area ">
                {/* <!---------------------- Left Box -------------------------------> */}
                <div class="col-lg-6 col-md-6 col-sm-4 d-flex justify-content-center align-items-center flex-column">
                <img src="./images/log.jpg" class="image"/>
                </div>
                {/* <!---------------------- Right Box -------------------------------> */}
                <div class="col-md-6 d-flex justify-content-center align-items-center bg-white right-box">
                    <div class="row align-items-center">
                        <div class="header text mb-4 ">
                            <h4 class="d-flex justify-content-center align-items-center">Login</h4>
                            <h4 class="d-flex justify-content-center align-items-center">We are happy to have you back.
                            </h4>
                        </div>
                        <div class="input-group mb-4">
                            <label>Enter Email<input type="email"
                                    class="form-control form-control-lg bg-light round required"
                                    placeholder="email"/></label>
                        </div>
                        <div class="input-group mb-4">
                            <label>Enter Password<input type="password"
                                    class="form-control form-control-lg bg-light round required"
                                    placeholder="password"/></label>
                            </div>
                            <div class="input-group mb-5 d-flex justify-content-between">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="formCheck"/>
                                    <label for="formCheck" class="form-check-label text"><small> Remember me
                                        </small></label>
                                </div>
                                <div class="forgot">
                                    <small><NavLink href="#">Forgot password</NavLink></small>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        <div class="col-md-12 justify-content-center input-group mb-3">
                            <button class="btn btn-lg btn-primary w-50 fs-10">Login</button>
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-lg btn-light w-100 fs-10 "><img src="./images/google.png"
                                    class="google me-2" alt="Google image"/><small>Sign in with Google</small></button>
                        </div>
                        <div class="row">
                            <small>Don't have an account? <NavLink to="/singup">Sign Up</NavLink></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}