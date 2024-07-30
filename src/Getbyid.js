import axios from "axios";

export default async function Getbyid(id) {
    try {
        const response = await axios.post("http://localhost:3001/getbyid", {
            blogid: id,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTcyYmNhMzlmZjBjMDRkYjRlNDFmZiIsImlhdCI6MTcyMjMwNzQzNywiZXhwIjoxNzIyMzE4MjM3fQ.wO4HZXIyDpWxtvJb3G2NRIlPzEutcsP5X0csHt-uQQ0"
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        throw error; 
    }
}
