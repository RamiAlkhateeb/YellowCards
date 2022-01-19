import React,{useContext} from 'react'
import {FormContext} from '../../FormContext'

const Input = ({field_id,field_placeholder,field_label,field_mandatory,field_value}) => {
    const {handleChange} = useContext(FormContext)
    //handleChange()
    return (
        <div className="form-group col-5">
                     <label>{field_label}</label>
                     <input name="firstname" type="text"  className='form-control' 
                     placeholder = {field_placeholder ? field_placeholder:''}
                     value = {field_value}
                     onChange={event=>handleChange(field_id,event)}
                     />
                     
                </div>
    )
       
    
}

export default Input