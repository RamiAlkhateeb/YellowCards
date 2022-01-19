import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { userService, alertService } from '@/_services';
import formJson from './formElements.json'
import Element from '../_components/Element'
import {FormContext} from '../FormContext'
import {ViewProfile} from './ViewProfile'

function Advanced(idd){

    //const { id } = ({data});
    //const { id } = match.params;
    const [elements,setElements] = useState(null)

    useEffect(() => {
        setElements(formJson[0])
        console.log("idididid")
        console.log(idd)
    }, []);

    const {fields,page_label} = elements??{}
    
    const handleSubmit = (event)=>{
        
        event.preventDefault();
        console.log(idd.id)
        //console.log(elements.fields[0].field_label )
        var ee = elements.fields[0].field_label
        var vv = elements.fields[0].field_value
        var ewww = { [ee] : vv}
        console.log(ewww)
        updateUsera(idd.id,ewww)
        
    }
    function updateUsera(id, data) {
        return userService.updatea(id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                //history.push('..');
            })
            .catch(alertService.error);
    }
    const handleChange = (id , event)=>{
        const newElemnts ={... elements}
        newElemnts.fields.forEach(field => {
            const {field_type,field_id } = field
            if(id === field_id){
                field['field_value'] = event.target.value
            }
            setElements(newElemnts)
        });
        console.log(elements)
    }
    
    return (
        <FormContext.Provider  value= {{handleChange}}>
            
            <div className="App container">
            <h3>{page_label}</h3>
        <form>
            {fields ? fields.map((field,i) => <Element key={i} field = {field}/>) :
            null}
            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        </div>
        
        </FormContext.Provider>


    );
}

export {Advanced};