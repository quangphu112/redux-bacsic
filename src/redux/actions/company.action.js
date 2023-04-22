import companyService from "../../core/service/company.service";
import {
    GET_COMPANIES_REQUEST,
    GET_COMPANIES_SUCCESS,
    GET_COMPANIES_FAIL,
    CREATE_COMPANIES,
    UPDATE_COMPANIES,
    DELETE_COMPANIES
} from "../constants/company.constants";

const getAllCompanies = () => async (dispatch) => {
    try {
        dispatch({type: GET_COMPANIES_REQUEST})
        const companies =  await companyService.getAllCompany();
        dispatch({
            type: GET_COMPANIES_SUCCESS,
            payload: companies
        })
    } catch (error) {
        dispatch({
            type: GET_COMPANIES_FAIL,
            payload: error
        })
    }
}

const companyActions = {
    getAllCompanies
}

export default companyActions;