import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { userService, alertService } from '@/_services';
import formJson from './formElements.json'
import Element from '../_components/Element'
import {FormContext} from '../FormContext'
import {Advanced} from './Advanced'


function ViewProfile({ history, match }){

  
    const { id } = match.params;
    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
    });

   const [elements,setElements] = useState(null)

   
   

    useEffect(() => {
        setElements(formJson[0])
        console.log("IDDDDDDDDDD")
        console.log(id)
    }, []);

    
    const {fields} = elements??{}
   function onSubmit(data) {
       console.log(data)
       
    const newElemnts ={... elements}
    newElemnts.fields.forEach(field => {
        const {field_type,field_id } = field
        // if(id === field_id){
        //     field['field_label'] = data.labels
        // }
        field['field_label'] = data.labels
        setElements(newElemnts)
    });

    console.log(elements)
       return createUser(data)
   }

   function createUser(data) {
       
   }


    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className="form-row">
                
            <div className="form-group col-5">
                    <label>Enter the field label</label>
                    <input name="labels" type="text" ref={register} className=
                    'form-control' />
                </div>
                
            </div>
            
           
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <Link to={ '..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
        <Advanced id={id}/>
        </div>
    );
}

export { ViewProfile };