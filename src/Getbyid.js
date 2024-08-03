import axios from "axios";

export default async function Getbyid(id,token) {
    // const baseurl = process.env.base_url;
    try {
        const response = await axios.post("https://blogbridge-backend.onrender.com/getbyid", {//http://localhost:3001/getbyid
            blogid: id,
            token: token
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        throw error; 
    }
}
