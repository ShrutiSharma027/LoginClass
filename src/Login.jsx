import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
import log from "./assets/images/log.jpg"
import google from "./assets/images/google.png"
import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
    // Formik for validation
    const formik = useFormik({
        initialvalue: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    const loginschema = Yup.object({
        email: Yup.string().min(2).required("Please enter your email "),
        password: Yup.string().min(6).required("Please enter password"),
    });
    return (
        <>
            {/* <!---------------------- Main Container -------------------------> */}
            <div className="container-fluid h-100">
                {/* <!---------------------- Login Container ------------------------> */}
                <div className="row shadow center h-100">
                    {/* <!---------------------- Left Box -------------------------------> */}

                    <div className="col-md-9 bg-white round">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-sm-block">
                                <div className="image" alt="Side image">
                                </div>
                            </div>
                            {/* <!---------------------- Right Box -------------------------------> */}
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                {/* <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                              
                            />
                            <label htmlFor="password">Email Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                              
                            />
                             <button type="submit">Login</button>
                        </form> */}
                                <div className="row center">
                                    <div className="header text mb-4 ">
                                        <h4 className="center mt-4">Login</h4>
                                        <h4 className="center">We are happy to have you back.
                                        </h4>
                                    </div>
                                    <div className="mb-4">
                                        <label>Enter Email
                                            <input type="email"
                                                className="form-control form-control-lg bg-light round required"
                                                placeholder="Email" size={35}/>
                                        </label>
                                    </div>
                                    <div className="mb-4">
                                        <label>Enter Password
                                            <input type="password"
                                                className="form-control form-control-lg bg-light round required"
                                                placeholder="Password" size={35}/>
                                        </label>
                                    </div>
                                    <div className="mb-5 d-flex justify-content-between">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="formCheck" />
                                            <label htmlFor="formCheck" className="form-check-label text">
                                                <small> Remember me</small>
                                            </label>
                                        </div>
                                        <div className="margin-right">
                                            <small><a href="#">Forgot password</a></small>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 center mb-3">
                                        <button className="btn btn-lg btn-success w-50 fs-10">Login</button>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-lg btn-light w-100 fs-10 ">
                                            <div className="google" alt="Google image"></div>
                                            <img src={google} className="google" alt="Google image" />
                                            <small>Sign in with Google</small></button>
                                    </div>
                                    <div className="row mb-3">
                                        <small>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></small>
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
// export default Login