import { 
    GET_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER
 } from "../constants/index"
 import axios from "axios"

 export const getUsers = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3000/user")
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
 }