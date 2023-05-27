import axios from "axios"

export const httpService = () =>{
    return axios.create({
        baseURL: 'http://localhost:3000/api'
    })
}

export const httpServiceSecure = (token: string) =>{
    return axios.create({
        baseURL: 'http://localhost:3000/api'
    })
}