import React from 'react';
import './Input.css';

const Input = (props) => {
    const {value, error, touched, handleBlur, handleChange } = props;
    const { type, name, label, placeholder} = props;

    return (
        <div className='input-wrpr' key={props.key}>
            <div className={`label-d-input ${error && touched ? 'error' : ''}`}>
                <label className='label' htmlFor={name}>{label} :</label>
                <input className='input'type={type} placeholder={placeholder} name={name} id={name} value={value} onBlur={handleBlur} onChange={handleChange} /> 
            </div>
            <div className='error-msg'>
                {error && touched && <p className='msg-txt'>* {error}</p>}
            </div>
        </div>
    )
}

export default Input