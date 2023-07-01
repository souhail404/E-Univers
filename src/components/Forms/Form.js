import React , {useEffect, useState} from 'react';
import './Form.css';

import { Link } from 'react-router-dom';

import Input from '../Inputs/Input';


const MultiStepForm = (props) => {
    const {classes , formsInfos , handleSubmit , specialLink} = props.propsData;

    const formPages = formsInfos.length-1;
    const [page , setPage] = useState(JSON.parse(localStorage.getItem('page')) || 0);
    
    useEffect ( ()=>{
        localStorage['formPageNum'] =  JSON.stringify(page);
    },[page])

    return (
        <div className={`form-wrpr ` + classes }>
            
            {(formPages > 0) && <ProgressBar page={page} formPages={formPages}  /> }
            
            {formsInfos[page].heading && <Header formHeading={formsInfos[page].heading} />}

            <form action="" className='form-body' onSubmit={handleSubmit}>
                
                {/* {(formPages > 0) ? props.children[page] : props.children } */}
                <FormPageWrapper page={page} propsData={ props.propsData} />
                
                <div className="form-footer">
                    
                    

                    <FormButtons page={page} setPage={setPage} formPages={formPages} />
                    
                    {
                        specialLink && specialLink.map((link,i)=>{
                            return ( 
                                <div className="special-link">
                                    <Link to={link.to} className='link'> {link.title} </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </form>
            
        </div>
    )
}


const ProgressBar = (props) => {
    const page = props.page;
    const formPages = props.formPages;
    return (
        <>
        <div className="form-prgress-bar" style={{gridTemplateColumns:`repeat(${formPages + 1} , 1fr)`}}>
            {
                Array(page + 1).fill().map((el,i )=>{
                    return <span key={i} className='progress active'></span>
                })
            }
            {
                Array(formPages - page).fill().map((el,i )=>{
                    return <span key={i} className='progress notactive'></span>
                })
            }
        </div>
        </>
        
        )
}


const FormPageWrapper = (props) => {
    const {handleBlur , handleChange , values , formsInfos, errors , touched} = props.propsData;
    const page = props.page;
    return (
        <>
            {
                formsInfos[page].input.map((el,i)=>{
                        return(
                            <Input 
                                key={i}
                                type={el.type}
                                name={el.name} 
                                label={el.label} 
                                placeholder={el.placeholder}
                                value={values[`${el.name}`]} 
                                error={errors[`${el.name}`]} 
                                handleBlur={handleBlur} 
                                handleChange={handleChange}
                                touched={touched[`${el.name}`]}  
                            />
                        )
                    })
                
            }
        </>
        
        )
}


const Header = (props) => {
    const formHeading = props.formHeading;
    return (
        <>
            <div className='form-header'>
                    <p className='txt'> {formHeading} </p>
            </div>
        </>
        
        )
}

const FormButtons = (props) => {
    const page = props.page;
    const setPage = props.setPage;
    const formPages = props.formPages;
    return (
        <>
            <div className="form-btns-wrpr">
                {(formPages > 0) && <div className={`form-btn ${(page===0)  ? "disabled" : ""}`} onClick={()=> setPage((prevPage) => prevPage-1) }>Prev</div>}
                {(formPages > 0) && !(page===formPages) && <div  className='form-btn' onClick={()=> setPage((prevPage) => prevPage+1) }>Next</div>}
                {page===formPages && <input className={`form-btn ${!(formPages > 0) ? 'w-100' : 'w-50'} `} type="submit" />}
            </div>
        </>
        
        )
}


export default MultiStepForm