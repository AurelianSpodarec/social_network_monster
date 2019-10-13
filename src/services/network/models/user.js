import config from './../../config';
import { getRequest } from './../requests/getRequest';

// Get
const readUsers = async () => {
    const res = await fetch(`${config.apiUrl}/users`,  getRequest())
    return await res.json()
}

const readUser = async (id) => {
    const res = await fetch(`${config.apiUrl}/users/${id}`, getRequest())
    return await res.json()
}

// Needs token
const readUserProfile = async () => {
    const res = await fetch(`${config.apiUrl}/users/me`,  getRequest())
    return await res.json()
}

const deleteUser = async (id) => {
    const res = await fetch(`${config.apiUrl}/users/${id}`, 'DELETE')
    return await res.json()
}



const updateUser = async () => {
    const res = await fetch(`${config.apiUrl}`, 'PATCH')
    return await res.json()
}

const createUser = async () =>{
    const res = await fetch(`${config.apiUrl}/users`, 'POST')
    return await res.json()
}

export {
    readUsers,
    readUser,
    readUserProfile
}