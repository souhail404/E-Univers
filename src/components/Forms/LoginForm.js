import React from 'react'
import Form from "./Form";
import Input from '../Inputs/Input'
import { useFormik } from 'formik';
import {LoginSchema} from '../../FormSchemas'

const onSubmit = ()=>{
  console.log('submited')
}

const LoginForm = () => {
      const formsInfos = [
        {
            heading:'',
            input:[
              {
                id:1,
                name:'emailortel',
                label:'email or phone number',
                placeholder:'Enter you email or phone number...',
                type:'text'
              },
              {
                id:1,
                name:'password',
                label:'password',
                placeholder:'Enter your password...',
                type:'password'
              }
            ]
        }
      ];
      const {values , errors, touched,  handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues:{
            emailortel:'',
            password:'',
        },
        validationSchema: LoginSchema,
        onSubmit,
    })
      return (
      <>
          <Form className='' formsInfos={formsInfos} handleSubmit={handleSubmit} >
            <FormOne value={values} error={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} />
            <>
            </>
          </Form>
      </>
      )
}
const FormOne = (props) => {
  const value = props.value;
  const error = props.error;
  const handleBlur = props.handleBlur;
  const handleChange = props.handleChange;
  const touched = props.touched;
  return (
      <>
          <Input 
              type='text' 
              name='emailortel' 
              label='email or phone number' 
              placeholder='Enter you email or phone number...' 
              value={value.emailortel} 
              error={error.emailortel} 
              handleBlur={handleBlur} 
              handleChange={handleChange}
              touched={touched.emailortel} 
          />
          <Input 
              type='password' 
              name='password' 
              label='password' 
              placeholder='Enter your password...' 
              value={value.password} 
              error={error.password} 
              handleBlur={handleBlur} 
              handleChange={handleChange}
              touched={touched.password}  
          />
      </> 
  )
}

export default LoginForm