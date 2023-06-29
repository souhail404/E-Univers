import React from 'react'
import Form from './Form'
import Input from '../Inputs/Input'
import { useFormik } from 'formik';
import {SignUpSchema} from '../../FormSchemas'

const onSubmit = ()=>{
    console.log('submited')
}
const SignUpForm = () => {
    const formsInfos = [
        {
            heading:'Sign up infos',
            input:[
                {
                  id:1,
                  name:'email',
                  label:'email',
                  placeholder:'Enter you email...',
                  type:'email'     
                },
                {
                  id:2,
                  name:'numberPhone',
                  label:'Phone number',
                  placeholder:'Enter you phone number...',
                  type:'tel'     
                },
                {
                  id:3,
                  name:'password',
                  label:'password',
                  placeholder:'Enter a strong password...',
                  type:'password'   
                },
                {
                  id:4,
                  name:'confirmpassword',
                  label:'confirm password',
                  placeholder:'Confirm your password...',
                  type:'password'   
                }
            ]
        },
        {
            heading:'personal info',
            input:[
                {
                    id:1,
                    name:'fullname',
                    label:'full name',
                    placeholder:'Enter your full name...',
                    type:'text'
                },
                {
                    id:2,
                    name:'username',
                    label:'username',
                    placeholder:'Enter a username...',
                    type:'text'
                },
                {
                    id:3,
                    name:'birthday',
                    label:'birthday',
                    placeholder:'',
                    type:'date'
                },
            ]
        },
        {
            heading:'other infos',
            input:[
                {
                    id:1,
                    name:'adress',
                    label:'adress',
                    placeholder:'Enter you adress...',
                    type:'text'     
                },
                {
                    id:2, 
                    name:'adresstwo',
                    label:'adress 2',
                    placeholder:'continue adress...',
                    type:'text'     
                }
            ]
        }
    ];
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
    return (
    <>
        <Form className='' formsInfos={formsInfos} handleSubmit={handleSubmit} >
            <FormOne value={values} error={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} />
            <FormTwo value={values} error={errors} handleBlur={handleBlur} handleChange={handleChange} />
            <FormThree value={values} error={errors} handleBlur={handleBlur} handleChange={handleChange} />
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
                type='email' 
                name='email' 
                label='email' 
                placeholder='Enter you email...' 
                value={value.email} 
                error={error.email} 
                handleBlur={handleBlur} 
                handleChange={handleChange}
                touched={touched.email}  
            />
            <Input 
                type='text' 
                name='telnumber' 
                label='phone number' 
                placeholder='Enter you phone number...' 
                value={value.telnumber} 
                error={error.telnumber} 
                handleBlur={handleBlur} 
                handleChange={handleChange}
                touched={touched.telnumber} 
            />
            <Input 
                type='password' 
                name='password' 
                label='password' 
                placeholder='Enter a password...' 
                value={value.password} 
                error={error.password} 
                handleBlur={handleBlur} 
                handleChange={handleChange}
                touched={touched.password}  
            />
            <Input 
                type='password' 
                name='confirmpassword' 
                label='confirm password' 
                placeholder='confirm the password...' 
                value={value.confirmpassword} 
                error={error.confirmpassword} 
                handleBlur={handleBlur} 
                handleChange={handleChange}
                touched={touched.confirmpassword} 
            />
        </> 
    )
}
const FormTwo = (props) => {
    const value = props.value;
    const error = props.error;
    const handleBlur = props.handleBlur;
    const handleChange = props.handleChange;
    const touched = props.touched;
    return (
        <>
            <Input 
                type='text' 
                name='fullname' 
                label='full name' 
                placeholder='Enter you full name...' 
                error={error.fullname} 
                value={value.fullname} 
                handleBlur={handleBlur} 
                handleChange={handleChange}
                touched={touched.fullname}  
            />
            <Input 
                type='text' 
                name='username' 
                label='username' 
                placeholder='Enter an username...' 
                error={error.username} 
                value={value.username} 
                handleBlur={handleBlur} 
                handleChange={handleChange} 
                touched={touched.username} 
            />
            <Input 
                type='date' 
                name='birthdate' 
                label='birth date' 
                placeholder='Enter your birth date...' 
                error={error.birthdate} 
                value={value.birthdate} 
                handleBlur={handleBlur} 
                handleChange={handleChange} 
                touched={touched.birthdate} 
            />
        </> 
    )
}
const FormThree = (props) => {
    const value = props.value;
    const error = props.error;
    const handleBlur = props.handleBlur;
    const handleChange = props.handleChange;
    const touched = props.touched;
    return (
        <>
            <Input 
                type='text' 
                name='address' 
                label='address' 
                placeholder='Enter your address...' 
                error={error.address} 
                value={value.address} 
                handleBlur={handleBlur} 
                handleChange={handleChange}  
                touched={touched.address}
            />
            <Input 
                type='text' 
                name='addresstwo' 
                label='address 2' 
                placeholder='continue your address...' 
                error={error.addresstwo} 
                value={value.addresstwo} 
                handleBlur={handleBlur} 
                handleChange={handleChange}
                touched={touched.addresstwo}  
            />
        </> 
    )
}
export default SignUpForm