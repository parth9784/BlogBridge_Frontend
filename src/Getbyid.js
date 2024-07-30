import axios from "axios";

export default async function Getbyid(id,token) {
    try {
        const response = await axios.post("http://localhost:3001/getbyid", {
            blogid: id,
            token: token
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        throw error; 
    }
}
