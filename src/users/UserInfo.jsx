import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { userService, alertService } from '@/_services';



function UserInfo({ history, match }){

  
    const { id } = match.params;
    const [user, setUser] = useState(null);

    useEffect(() => {
        
        userService.getById(id).then(x => setUser(x.results))
           
        
    }, []);

    var notto = ["password","_id" , "confirmPassword","title","firstname","lastname"]

    var pairs = [];
    for(var key in user){
        if(notto.includes(key))
            continue
        
        pairs.push(<p>{key} : {user[key]}</p>);
    
    }

    console.log(pairs)

    return (
     
        <div>
            <h3>{user && user.title}  {user && user.firstname}  {user && user.lastname}</h3>
            {pairs}
        </div>
       
    );
}

export { UserInfo };