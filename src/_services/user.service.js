import config from 'config';
import { fetchWrapper } from '@/_helpers';

//const baseUrl = `${config.apiUrl}/users`;
//const baseUrl = `http://localhost:8000/api/customers/`;
const baseUrl2 = `http://localhost:8080/api/cards`;


export const userService = {
    getAll,
    getById,
    create,
    update,
    updatea,
    delete: _delete
};

function getAll(query) {
    if (query && query.address.length > 0){
        var q= query.address
        return fetchWrapper.get(`${baseUrl2}?address=${q}`);

    }
    else
    return fetchWrapper.get(baseUrl2)
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl2}${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl2+'quotes', params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl2}${id}`, params);
}

function updatea(id, params) {
    return fetchWrapper.put(`${baseUrl2}profile/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl2}${id}`);
}
