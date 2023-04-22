import {
    GET_COMPANIES_REQUEST,
    GET_COMPANIES_SUCCESS,
    GET_COMPANIES_FAIL,
    CREATE_COMPANIES,
    UPDATE_COMPANIES,
    DELETE_COMPANIES
} from "../constants/company.constants";

const initialState = {
    data: null,
    loading: false,
    requesting: false
}

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case GET_COMPANIES_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: true,
                requesting: true
            }
        
        case GET_COMPANIES_FAIL: 
            return {
                ...state
            }
            
        default: 
            return state;
        }
}

export default companyReducer;

