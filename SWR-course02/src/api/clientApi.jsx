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

