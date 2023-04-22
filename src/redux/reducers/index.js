import { combineReducers } from "redux";
import companyReducer from "./company.reducer";

const reducers = combineReducers({
    company: companyReducer
});

export default (state, action) => reducers(state, action)