import axios from "axios";
export default async function Getdata(){
    try{
        const data=await axios.get("https://blogbridge-backend.onrender.com/getall");//http://localhost:3001/getall
        return data;
    }
    catch(error){
        console.error(error);
    }
}

