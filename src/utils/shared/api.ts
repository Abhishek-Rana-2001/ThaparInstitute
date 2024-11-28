import axios from "axios"
import { BASE_URL } from "../url"

export const getStudent = async (studentID: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/student/${studentID}`);
        return response; // Return the data directly
    } catch (error) {
        throw error; // Re-throw the error for handling in the calling function
    }
}

export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/course`)
        return response
    }
    catch (err) {
       throw(err)
    }
};