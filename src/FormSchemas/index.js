import * as yup from 'yup';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{6,16}$/;
const fullnameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

export const SignUpSchema = yup.object().shape({
    email: yup.string().email('please enter a valid email').required('required'),
    telnumber: yup.string().matches(phoneRegex, "Invalid phone.").required('required'),
    password: yup.string().matches(passwordRegex, "Invalid form (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)").required("required"),
    confirmpassword: yup.string().oneOf([yup.ref("password")], "Mismatched passwords").required("Please confirm your password"),
    address: yup.string().required("required"),
    address2: yup.string(),
    birthdate: yup.date().required("required"),
    fullname: yup.string().matches(fullnameRegex, "Invalid form (must not include numbers and special characters).").required("required"),
    username: yup.string().matches(usernameRegex, "must be over 6 characters and start with alphabetic character and only include numbers and alphabets and underscore(_)").required("required"),
})


export const LoginSchema = yup.object().shape({
    emailortel: yup.string().required('required'),
    password: yup.string().required('required'),
})