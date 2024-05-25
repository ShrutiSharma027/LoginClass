import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
import google from "./assets/images/google.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginschema } from "./assets/Schema";


export const Login = () => {
   // Formik for validation
const initialValues = {
    email: '',
    password: '',
}
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: loginschema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            {/* <!---------------------- Main Container -------------------------> */}
            <div className="container-fluid h-100">
                {/* <!---------------------- Login Container ------------------------> */}
                <div className="row shadow center h-100 ">
                    {/* <!---------------------- Left Box -------------------------------> */}

                    <div className="col-md-9 bg-white round">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-sm-block">
                                <div className="image" alt="Side image">
                                </div>
                            </div>
                            {/* <!---------------------- Right Box -------------------------------> */}
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="row center">
                                        <div className="header text mb-4 ">
                                            <h4 className="center mt-4">Login</h4>
                                            <h4 className="center">We are happy to have you back.
                                            </h4>
                                        </div>
                                        <div className="mb-4">
                                            <label>Enter Email
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control form-control-lg bg-light round required"
                                                    placeholder="Email" size={40} />
                                            </label>
                                            <label className="text-danger">{errors.email && <p>{errors.email}</p>}</label>
                                        </div>
                                        <div className="mb-4">
                                            <label>Enter Password
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control form-control-lg bg-light round required"
                                                    placeholder="Password" size={40} />
                                            </label>
                                            <label className="text-danger">{errors.password && <p>{errors.password}</p>}</label>
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
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
// export default Login