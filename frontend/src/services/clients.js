import axios from 'axios'

const baseUrl = "/api/clients"  

const getAll = () => {
    const request = axios.get(baseUrl) 
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  
const update = (clientToUpdate) => {
    console.log('update en service',clientToUpdate)
    const request = axios.put(`${baseUrl}/${clientToUpdate.id}`, clientToUpdate)
    return request.then(response => response.data)
}

const delClient = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {getAll, create, update, delClient}