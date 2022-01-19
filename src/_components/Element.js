import React from 'react'
import Input from './elements/Input'
import Select from './elements/Select'

const Element = ({field : {field_type,field_id,field_placeholder,field_label
    ,field_mandatory,field_value,field_options}}) => {

    switch(field_type){
        case 'text':
        return(<Input
        field_id = {field_id}
        field_placeholder={field_placeholder}
        field_label={field_label}
        field_mandatory={field_mandatory}
        field_value={field_value}
        />)
        
        case 'select':
        return (<Select
            field_id = {field_id}
            field_placeholder={field_placeholder}
            field_label={field_label}
            field_mandatory={field_mandatory}
            field_value={field_value}
            field_options={field_options}

            />)
    
        default:
            return null;

    }
    return (
        <div>
        element
        </div>
    )
       
    
}

export default Element