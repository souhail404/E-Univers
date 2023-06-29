import React , {useEffect, useState} from 'react';
import './Form.css';

import Input from '../Inputs/Input'
import { Link } from 'react-router-dom';


const MultiStepForm = (props) => {
    const handleSubmit = props.handleSubmit;
    const formsInfos = props.formsInfos;
    const formPages = formsInfos.length-1;
    const [page , setPage] = useState(0);
    

    return (
        <div className="form-wrpr">
            
            {(formPages > 0) && <ProgressBar page={page} formPages={formPages}  /> }
            
            {formsInfos[page].heading && <Header formHeading={formsInfos[page].heading} />}

            <form action="" className='form-body' onSubmit={handleSubmit}>
                
                {props.children[page]}

                <div className="form-footer">
                    
                    <FormButtons page={page} setPage={setPage} formPages={formPages} />
                    
                    <div className="special-link">
                        <Link> go to </Link>
                    </div>
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