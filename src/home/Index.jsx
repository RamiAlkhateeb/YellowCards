import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService, alertService } from '@/_services';
function Home({match}) {
    const { path } = match ;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
        console.log(path+"users")
    }, []);

    const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
    });


    function onSubmit(data) {
        console.log(data)
        userService.getAll(data).then(x => setUsers(x));
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className="form-row">
                <div className="form-group col">
                    <label>Location</label>
                    <select name="address" ref={register} className={`form-control ${errors.address ? 'is-invalid' : ''}`}>
                        <option value=""></option>
                        <option value="Damascus">Damascus</option>
                        <option value="Homs">Homs</option>
                        <option value="Aleppo">Aleppo</option>
                        <option value="Lattakia">Lattakia</option>
                        <option value="Tartous">Tartous</option>
                        <option value="Sweda">Sweda</option>
                    </select>
                    <div className="invalid-feedback">{errors.address?.message}</div>
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Search
                </button>
                </div>
            </div>
            </form>
            <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Location</th>
                        <th style={{ width: '30%' }}>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user._id}>
                            <td><Link to={`${path}users/info/${user._id}`} > {user.title} {user.lastname}</Link></td>
                            <td>{user.address}</td>
                            <td>{user.role}</td>
                            
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            </div>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
           
        </div>
    );
}

export { Home };