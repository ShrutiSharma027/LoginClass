import * as Yup from 'yup'
//Login Schema
export const loginschema = Yup.object({
    email: Yup.string().min(2).required("Please enter your email "),
    password: Yup.string().min(6).required("Please enter password"),
});
//Signup Schema
export const signupschema=Yup.object({
    name:Yup.string().min(2).required("Please enter your name"),
    email:Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    cpassword:Yup.string().min(6).required("Please enter confirm password")
})
