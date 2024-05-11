import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
import log from "./assets/images/log.jpg"
import google from "./assets/images/google.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export const Login = () => {
    const initialvalue = {
        email: "",
        password: ""
    }
    const [formvalues, setFormValues] = useState(initialvalue)
    // Formik for validation
    // const formik = useFormik({
    //     initialvalue: {
    //         email: "",
    //         password: "",
    //     },
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // }
    const loginschema = Yup.object({
        email: Yup.string().min(2).required("Please enter your email "),
        password: Yup.string().min(6).required("Please enter password"),
    });
    const handlChange = (e) => {
        // console.log(e.target);
        const { email, value } = e.target;
        setFormValues({ ...formvalues, [email]: value });
        console.log(formvalues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <>
            {/* <!---------------------- Main Container -------------------------> */}
            <div className="container-fluid margin d-flex justify-content-center align-items-center">
                {/* <!---------------------- Login Container ------------------------> */}
                <div className="row d-flex justify-content-center shadow align-items-center bg-white box-area round ">
                    {/* <!---------------------- Left Box -------------------------------> */}
                    <div className="col-lg-6 col-md-6 col-sm-4  ">
                        <div className="image">
                            <img src={log} className="image" alt="Login Image" />
                        </div>
                    </div>
                    {/* <!---------------------- Right Box -------------------------------> */}
                    <div className="col-md-6 ">
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
                        {/* <pre>{JSON.stringify(formvalues,undefined)}</pre> */}
                        <form onSubmit={handleSubmit}>
                            <div className="row align-items-center">
                                <div className="header text mb-4 ">
                                    <h4 className="d-flex justify-content-center align-items-center mt-4">Login</h4>
                                    <h4 className="d-flex justify-content-center align-items-center">We are happy to have you back.
                                    </h4>
                                </div>
                                <div className="input-group mb-4">
                                    <label>Enter Email
                                        <input type="email"
                                            className="form-control form-control-lg bg-light round required"
                                            placeholder="Email"/>
                                    </label>
                                </div>
                                <div className="input-group mb-4">
                                    <label>Enter Password
                                        <input type="password"
                                            className="form-control form-control-lg bg-light round required"
                                            placeholder="Password" />
                                    </label>
                                </div>
                                <div className="input-group mb-5 d-flex justify-content-between">
                                    <div className="form-check">
                                        <label htmlFor="formCheck" className="form-check-label text" >
                                            <input type="checkbox" className="form-check-input" id="formCheck" value={formvalues.password}
                                                onChange={handlChange} />
                                            <small> Remember me</small>
                                        </label>
                                    </div>
                                    <div className="forgot margin-right">
                                        <small><a href="#">Forgot password</a></small>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 justify-content-center input-group mb-3">
                                    <button className="btn btn-lg btn-primary w-50 fs-10">Login</button>
                                </div>
                                <div className="input-group mb-3">
                                    <button className="btn btn-lg btn-light w-100 fs-10 ">
                                        <div className="google" alt="Google image"></div>
                                        <img src={google} className="google" alt="Google image" />
                                        <small>Sign in with Google</small></button>
                                </div>
                                <div className="row mb-3">
                                    <small>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
// export default Login