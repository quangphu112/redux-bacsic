import axios from "axios";

const getAllCompany = async () => {
    const response = await axios.get("http://localhost:3000/company")
    return response ? response.data : null;
}

const createCompany = async (body) => {
    const response = await axios.post("http://localhost:3000/company", body);
    return response ? response : null;
}

const updateCompany = async (companyId) => {
    const response = await axios.put(`http://localhost:3000/company/${companyId}`);
    return response ? response : null;
}

const deleteCompany = async (companyId) => {
    const response = await axios.delete(`http://localhost:3000/company/${companyId}`);
    return response ? response : null;
}

const companyService = {
    getAllCompany,
    createCompany,
    updateCompany,
    deleteCompany
};

export default companyService;