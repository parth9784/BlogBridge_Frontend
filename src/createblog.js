import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function CreateBlog() {
    const [value, setValue] = useState('');
    const quillRef = useRef(null);
    const navigate=useNavigate()
    const notifysuccess = () => toast.success("Blog Published..");
    const notifyerror = () => toast.error("Invalid");
    const notifyfill=()=> toast.warn("Fill the Contents!!")
    
    async function handlepublish(){
        const token = localStorage.getItem("authToken");
        const gettitle = document.getElementById("title").value;
        const geturl = document.getElementById("url").value;
        
        if (!gettitle || !value) {
            notifyfill()
            return;
        }

        let obj = { token: token, content: value, title: gettitle };
        if (geturl) {
            obj.image = geturl;
        }

        try {
            const data = await axios.post("http://localhost:3001/createblog", obj);
            if (data.status === 200) {
                console.log("Created the post...");
                notifysuccess();
                navigate("/")

            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                notifyerror();
            }
        }
    }
   
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div>
                <h1 className='text-xl lg:text-2xl popmed mt-3'>Start Writing, Start Bridging</h1>
                <button 
                    type="button" 
                    onClick={handlepublish} 
                    className="flex items-center gap-1 text-md absolute right-0 mt-3 text-[#539F8D] max-w-[130px] text-center hover:text-black border border-[#539F8D] hover:bg-[#D3E8E2] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    <FaPaperPlane />Publish
                </button>
            </div>
            <div className='md:w-[700px] w-[300px] lg:w-[1100px] rounded-lg m-3'>
                <form className='flex flex-col gap-6'>
                    <div className="relative h-11 w-[80%] min-w-[200px] mt-4 flex flex-col">
                        <input
                            required
                            placeholder="Title"
                            id="title"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#b6f1e1] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#D3E8E2] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Title
                        </label>
                    </div>
                    <div className="relative h-11 w-[80%] min-w-[200px] mt-7 flex flex-col">
                        <input
                            required
                            type="url"
                            id="url"
                            placeholder="Image Url"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#b6f1e1] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#D3E8E2] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Image Url
                        </label>
                    </div>
                    <ReactQuill ref={quillRef} theme="snow" value={value} onChange={setValue} className='mt-2 h-[600px] mb-11' />
                </form>
            </div>
        </div>
    );
}
