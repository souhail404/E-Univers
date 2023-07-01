import React from 'react'
import Form from './Form'
import { useFormik } from 'formik';
import {SignUpSchema} from '../../FormSchemas'

import { signUpFormSetup } from '../../content/FormsSetup';


const SignUpForm = (props) => {
    
    const onSubmit = ()=>{
        console.log('submited')
    }

    const {values , errors, touched,  handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues:{
            email:'',
            telnumber:'',
            password:'',
            confirmpassword:'',
            address:'',
            addresstwo:'',
            birthdate:'',
            fullname:'',
            username:'',
        },
        validationSchema: SignUpSchema,
        onSubmit,
    })

    const formData = {
        classes:props.className,
        formsInfos:signUpFormSetup,
        handleSubmit,
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        specialLink:[
            {
                to:'/login/',
                title:'I already have an account'
            }
        ]
    }

    return (
    <>
        <Form propsData={formData}/>
    </>
  )
}


export default SignUpForm