import React,{useContext} from 'react'
import {FormContext} from '../../FormContext'

const Select = ({field_id,field_placeholder,field_label,
    field_mandatory,field_value,field_options}) => {
        const {handleChange} = useContext(FormContext)
    return (
        <div className="form-row">
                 <div className="form-group col">
                     <label>{field_label}</label>
                     <select  className='form-control' onChange={event=>handleChange(field_id,event)}>
                         <option >Open this select menu</option>
                         {field_options.length > 0 && field_options.map((option,i)=>
                         <option value={option.option_label} key={i}>{option.option_label}</option>
                         )}
                     </select>
                 </div>
        </div>
    )
       
    
}

export default Select