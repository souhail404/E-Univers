import React from 'react'
import Form from "./Form";
import { useFormik } from 'formik';
import {LoginSchema} from '../../FormSchemas'

import { loginFormSetup } from "../../content/FormsSetup";



const LoginForm = (props) => {
      
      const onSubmit = ()=>{
        console.log('submited')
      }

      const {values , errors, touched,  handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues:{
            emailortel:'',
            password:'',
        },
        validationSchema: LoginSchema,
        onSubmit,
      })

      const formData = {
        classes:props.className,
        formsInfos:loginFormSetup,
        handleSubmit,
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        specialLink:[
          {
            to:'',
            title:'forgot password' 
          },
          {
            to:'/signup/',
            title:'Create an account' 
          }
        ]
      }

      return (
      <>
          <Form propsData={formData}/>
      </>
      )
}


export default LoginForm