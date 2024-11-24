import axios from "axios";
import { newsApiUrl } from "../config/constant";

export const getMethod = async (relativesUrl, params = {}) => {
    try {
        const response = axios.get(`${newsApiUrl}/${relativesUrl}`, { params })
        return response;
    } catch (error) {
        // Let the error propagate naturally after handling specific cases
        throw error;
    }
};