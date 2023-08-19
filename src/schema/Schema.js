import * as Yup from 'yup';

export const logInSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(3).required("Enter your password")
})

export const signUpSchema = Yup.object({
    email: Yup.string().email().required("Email is required "),
    password: Yup.string().min(3).required("Enter your password"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], ("Password must match")),

})