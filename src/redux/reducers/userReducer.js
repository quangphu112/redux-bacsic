import { 
    GET_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER
 } from "../constants/index"

 const initialState = {
    requesting: false,
    data: null
 }

 const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                requesting: true,
                data: action.payload
            };
        case CREATE_USER:
            return state;
        case UPDATE_USER:
            return state;
        case DELETE_USER:
            return state;
        default: 
            return state;
    }
 }

 export default userReducer;