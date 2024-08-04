import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Pnf(){
    const navigate=useNavigate();
    function handleclick(){
        navigate("/")
    }
    return(
        <div className='flex justify-center items-center mt-6 flex-col'>
        <dotlottie-player src="https://lottie.host/18047788-9855-4f5d-b4e6-efe6ff363c82/ejg9g2obxE.json" background="transparent" speed="1" style={{width: "450px", height: "450px"}} loop autoplay></dotlottie-player>
        <button type="button" onClick={handleclick} class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Home</button>
        </div>
    );
}