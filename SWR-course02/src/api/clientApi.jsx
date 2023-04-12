import axios from 'axios'
import useSWR from 'swr'


export const client = axios.create({
    baseURL: 'http://localhost:5000'
})

export const fetchData =  () =>{

    return client.get('/users')
   

}

export const userFetch = async (id) => {
    const response = await client.get(`/users/${id}`)
    return response.data
}

export const newUser =  async (user) => {
    return  await client.post('/users', user)
   
}

export const editUser = async (id, editedUser) => {
    return  await client.put(`/users/${id}`, editedUser)
}


export const deleteUser = async (id) => {
    const response = await client.delete(`/users/${id}`)
    return response.data
}

