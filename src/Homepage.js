import React from 'react'
import Bloglist from './bloglist';
import { IoMdAdd } from "react-icons/io";
export default function Homepage({isloggedin}){
    function handleclick(){
        console.log("New post")
    }
    return(
        <div className='flex flex-col'>
        {isloggedin?<button type="button" onClick={handleclick} class="mr-3 self-end text-[#539F8D] flex gap-1 text-center hover:text-black border border-[#539F8D] hover:bg-[#D3E8E2] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"><IoMdAdd className='text-xl' />NEW POST</button>
        :""}
        <Bloglist/>
        </div>
    );
}